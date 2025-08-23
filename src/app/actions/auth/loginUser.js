

"use server";

import dbConnect from "@/Library/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  // connect DB
  const usersCollection = await dbConnect("users");

  // find user
  const user = await usersCollection.findOne({ email });
  if (!user) return null;

  // compare password
  const isPassOk = await bcrypt.compare(password, user.password);
  if (!isPassOk) return null;

  return user; // success
};
