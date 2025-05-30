"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

export const loginUser = async (payload) => {
  const { email, password } = payload;

  const userCollections =  dbConnect(collectionNameObj.userCollections);
  const user = await userCollections.findOne({ email });

  const isPasswordOk = bcrypt.compare(user.password,password)

  if (!user || !isPasswordOk) {
    return { success: false, message: "Invalid credentials" };
  }

  return {
    success: true,
    message: "User logged in successfully",
    data: {
      _id: user._id.toString(),
      email: user.email,
      name: user.name,
    },
  };
};
