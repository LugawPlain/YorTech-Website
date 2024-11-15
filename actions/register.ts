"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password, name } = validatedFields.data;

  console.log("Sign-up name: ", name);
  console.log("Sign-up email: ", email);
  console.log("Sign-up password: ", password);

  const hashPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "email already in use" };
  }
  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  return { success: "Account Created !" };
};
