"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { RegisterSchema } from "@/app/utils/validator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { registerUserAction } from "../utils/actions";
import { useToast } from "@/components/ui/use-toast";
import { IRegisterUserAction } from "../types/types";

const RegisterForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof RegisterSchema>) {
    await registerUserAction(data);
    toast({
      className: "bg-green-700 text-md text-white font-medium",
      title: "User registered successfully",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col mt-4"
      >
        <div className="grid w-full items-center gap-y-2">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-md">Full Name:</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full items-center gap-y-2 mt-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-md">Email:</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full items-center gap-y-2 mt-3">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-md">Password:</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full mt-4">
          <Button className="w-full bg-[#7ED7C1] text-white text-md transition hover:bg-[#7ED7C1]/80">
            Regsiter
          </Button>
        </div>
        <div className="w-full mt-5">
          <p className="text-white text-md text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-[#7ED7C1]">
              Login
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
