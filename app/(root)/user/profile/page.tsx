import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import defaultAvatar from "../../../../public/avatar.png";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");

  return (
    <section className="lg:max-w-5xl mx-auto w-full py-3 lg:py-0 flex flex-col lg:flex-row mt-5">
      <div className="flex flex-col flex-1 mt-5">
        <div className="text-4xl text-[#11235A] font-bold">My Properties</div>
      </div>
      <div className="lg:max-w-[320px] mx-auto w-full flex flex-col mt-5">
        <div className="flex items-center gap-x-4 mt-2">
          <div className="relative w-[115px] h-[115px] rounded-md overflow-hidden">
            <Image src={defaultAvatar} alt="Avatar" fill />
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-[#11235A] font-bold text-2xl">Said MOUNAIM</h3>
            <h4 className="text-[#11235A] font-medium text-1xl mt-3">
              +222 222 222
            </h4>
            <h4 className="text-[#11235A] font-medium text-1xl">
              saidmounaim@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
