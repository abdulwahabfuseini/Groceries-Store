import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectMongoDB } from "@/libs/mongodb";
import { IUser } from "@/contexts/Types";
import clientPromise from "@/libs/dbconnect";

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "credential",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "myname@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {

        // ==== Connect To MongoDb ==== 

        await connectMongoDB().catch((err) => {
          throw new Error(err);
        });

        // ==== Check if input fields are not Empty ==== 

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please Enter Email and Password")
        }

        // ===== Check user with Email ==== 

        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        // ==== Email Not Found ==== 

        if (!user) {
          throw new Error("No User Found with this Email");
        }

        // ===== Check Password with DB Password ===== 

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        // ===== InCorrect Password ==== 

        if (!isPasswordCorrect) {
          throw new Error("Incorrect Password");
        }

        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/signin",
    signOut: "/"
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user as IUser;
      session.user = user;

      return session;
    },
  },
};
