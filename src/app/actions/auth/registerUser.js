"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

export const registerUser = async (payload) => {
  const userCollections =  dbConnect(collectionNameObj.userCollections);
  const { name, email, password } = payload;

  if (!email || !password || !name) {
    return { success: false, message: "Missing required fields" };
  }

  const existingUser = await userCollections.findOne({ email });

  if (existingUser) {
    return { success: false, message: "User already exists" };
  }
 const hashedPassword = await bcrypt.hash(password,10)
  payload.password = hashedPassword
  const result = await userCollections.insertOne(payload);

  return {
    success: true,
    message: "User registered successfully",
    userId: result.insertedId.toString(),
  };
};
