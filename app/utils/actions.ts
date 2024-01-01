"use server";

import { redirect } from "next/navigation";
import prisma from "../utils/db";
import bcrypt from "bcryptjs";
import { ILoginUserAction, IRegisterUserAction } from "../types/types";

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

// Get User By ID
export async function getUserByIdAction(id: string) {
  "use server";

  const user = await prisma.user.findFirst({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      mobile: true,
      image: true,
    },
  });

  return user;
}
