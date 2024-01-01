"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EditProfileSchema } from "@/app/utils/validator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const EditProfileForm = ({ userDetails }: any) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof EditProfileSchema>>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      image: "",
      fullname: userDetails.name,
      email: userDetails.email,
      mobile: userDetails.mobile || "",
    },
  });

  async function onSubmit(data: z.infer<typeof EditProfileSchema>) {
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
        <div className="grid w-full items-center gap-y-2 ">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-md">Avatar:</FormLabel>
                <FormControl>
                  <Input type="file" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full items-center gap-y-2 mt-3">
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
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-md">Mobile:</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Mobile"
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
            Update
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditProfileForm;
