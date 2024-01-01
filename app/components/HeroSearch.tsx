import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, SearchIcon } from "lucide-react";

const HeroSearch = () => {
  const classNameInput =
    "bg-transparent rounded-none border-transparent focus:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 !outline-none text-white font-medium placeholder:text-gray-400 text-1xl";

  return (
    <div className="w-full p-5 bg-[#11235A] rounded-md mt-7">
      <div className="flex items-center flex-col lg:flex-row">
        <div className="flex flex-col gap-y-2 w-full">
          <Label htmlFor="keyword" className="text-white font-bold text-1xl">
            Keyword:
          </Label>
          <div className="flex items-center bg-[#0c183ce9] py-2 px-4">
            <SearchIcon className="text-gray-400 w-5 h-5" />
            <Input
              type="text"
              id="keyword"
              placeholder="Search your keyword"
              className={classNameInput}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <Label htmlFor="location" className="text-white font-bold text-1xl">
            Location:
          </Label>
          <div className="flex items-center bg-[#0c183ce9] py-2 px-4">
            <MapPin className="text-gray-400 w-5 h-5" />
            <Input
              type="text"
              id="location"
              placeholder="City, state"
              className={classNameInput}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Button
          variant="ghost"
          className="bg-[#7ED7C1] text-white hover:bg-[#5aa391] transition hover:text-white py-3 px-5 flex items-center gap-x-4 text-1xl"
        >
          <SearchIcon className="w-5 h-5 text-white" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default HeroSearch;
