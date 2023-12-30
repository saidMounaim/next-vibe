import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="h-[85vh] flex justify-center items-center">
      <div className="w-[350px] sm:max-w-full bg-[#11235A] flex flex-col rounded-lg items-center p-4">
        <h1 className="text-2xl font-bold text-white">Login</h1>

        <div className="w-full flex flex-col mt-4">
          <div className="grid w-full items-center gap-y-2">
            <Label htmlFor="email" className="text-white text-md">
              Email Address:
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="name@example.com"
              className="w-full"
            />
          </div>
          <div className="grid w-full items-center gap-y-2 mt-3">
            <Label htmlFor="email" className="text-white text-md">
              Password:
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Password"
              className="w-full"
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
        </div>
      </div>
    </section>
  );
};

export default LoginPage;