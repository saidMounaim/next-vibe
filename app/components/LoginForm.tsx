"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LoginSchema } from "@/app/utils/validator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (result?.ok) {
        toast({
          className: "bg-green-700 text-md text-white font-medium",
          title: "User has been logged in successfully",
        });
        router.push("/user/profile");
        router.refresh();
      }
      if (result?.error) {
        toast({
          className: "bg-red-700 text-md text-white font-medium",
          title: result?.error,
        });
      }
    } catch (err: any) {
      toast({
        className: "bg-red-700 text-md text-white font-medium",
        title: err.message,
      });
    }
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
            Login
          </Button>
        </div>
        <div className="w-full mt-5">
          <p className="text-white text-md text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#7ED7C1]">
              Register
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
