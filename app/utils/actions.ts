"use server";

import { redirect } from "next/navigation";
import prisma from "../utils/db";
import bcrypt from "bcryptjs";
import { IRegisterUserAction } from "../types/types";

// Create User Action
export async function registerUserAction(data: IRegisterUserAction) {
  "use server";

  const user = await prisma.user.create({
    data: {
      name: data.fullname,
      email: data.email,
      password: bcrypt.hashSync(data.password, 8),
      isAdmin: false,
    },
  });

  redirect("/login");
}
