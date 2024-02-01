import { connectMongoDB } from "@/libs/mongodb";
import BillingDetails from "@/models/BillingDetails";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { fullName, email, phoneNumber, city, street, postalAddress, zipCode } = body;
  console.log("🚀 ~ POST ~ fullName:", fullName)
  console.log("🚀 ~ POST ~ email:", email)
  console.log("🚀 ~ POST ~ phoneNumber:", phoneNumber)
  console.log("🚀 ~ POST ~ city:", city)
  console.log("🚀 ~ POST ~ street:", street)
  console.log("🚀 ~ POST ~ postalAddress:", postalAddress)
  console.log("🚀 ~ POST ~ zipCode:", zipCode)
  try {
    await connectMongoDB()
    
    // ==== Check if input fields are not empty ==== 
    if ( 
      !fullName ||
      !email ||
      !phoneNumber ||
      !city ||
      !street ||
      !postalAddress || 
      !zipCode
    ) {
      return NextResponse.json({ message: "Missing fields" }, { status: 405 });
    }
     
    
    // Create a new billing details
    const newBillingDetails = new BillingDetails({
      fullName,
      email,
      phoneNumber,
      city,
      street,
      postalAddress,
      zipCode
    });

    await newBillingDetails.save();

    return NextResponse.json(
      {
        message: "Billing Details Submitted Successfully",
        data: newBillingDetails,
      },
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Submit Billing Details" },
      { status: 500 }
    );
  }
};
