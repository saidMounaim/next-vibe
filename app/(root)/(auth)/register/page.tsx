import RegisterForm from "@/app/components/RegisterForm";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/");

  return (
    <section className="h-[85vh] flex justify-center items-center">
      <div className="w-[350px] sm:max-w-full bg-[#11235A] flex flex-col rounded-lg items-center p-4">
        <h1 className="text-2xl font-bold text-white">Register</h1>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
