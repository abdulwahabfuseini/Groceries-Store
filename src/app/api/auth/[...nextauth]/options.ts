import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectMongoDB } from "@/libs/mongodb";

export const authOptions: AuthOptions = {
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
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter email and password");
        }

        await connectMongoDB();

        const user = await User.findOne({
          // where: {
          email: credentials.email,
          // },
        });

        if (!user) {
          await User.create({
            email: credentials.email,
            hashedPassword: credentials.password
              .replace(" ", " ")
              .toLowerCase(),
          });
        }

        if (!user || !user.hashedPassword) {
          throw new Error("No User Found With This Email");
        }

        const PasswordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!PasswordMatch) {
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
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV == "development",
  pages: {
    signIn: "/signin",
  },
};
