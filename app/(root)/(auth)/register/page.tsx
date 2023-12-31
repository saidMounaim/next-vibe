import RegisterForm from "@/app/components/RegisterForm";

const RegisterPage = () => {
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
