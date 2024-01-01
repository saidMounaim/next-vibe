import EditProfileForm from "@/app/components/EditProfileForm";
import { getUserByIdAction } from "@/app/utils/actions";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const EditProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");

  const userDetails = await getUserByIdAction(session?.id);

  return (
    <section className="h-[85vh] flex justify-center items-center">
      <div className="w-[350px] sm:max-w-full bg-[#11235A] flex flex-col rounded-lg items-center p-4">
        <h1 className="text-2xl font-bold text-white">Edit Profile</h1>
        {userDetails && <EditProfileForm userDetails={userDetails} />}
      </div>
    </section>
  );
};

export default EditProfilePage;
