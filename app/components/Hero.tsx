import Image from "next/image";
import bgHero from "../../public/bg.jpeg";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <section
      className={`h-[100vh] w-full flex flex-col justify-center bg-[#11235A] relative`}
    >
      <Image
        src={bgHero}
        alt="Bg hero"
        fill
        className="object-cover -z-0 opacity-40"
      />
      <div className="lg:max-w-6xl mx-auto w-full py-3 lg:py-0 flex flex-col mt-5 relative z-10">
        <h1 className="w-full lg:w-[690px] text-6xl text-white font-bold">
          We will help you find your Wonderful home
        </h1>
        <HeroSearch />
      </div>
    </section>
  );
};

export default Hero;
