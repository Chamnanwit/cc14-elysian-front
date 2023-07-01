import ButtonYellowM from "../components/ButtonYellowM";
import LogoWhite from "../components/LogoWhite";
import MainSearchBar from "../features/search/components/mainSearchBar";

export default function HeaderSearch() {
  return (
    <div className=" bg-[url('/src/assets/pic/cover1.jpg')]  h-[700px] w-full flex flex-col text-center items-center py-16 bg-cover">
      <div className=" w-[70%] h-full justify-start flex flex-col text-center items-center gap-10">
        <div className="flex flex-col flex-1 gap-2  justify-start items-center">
          <div className="text-2xl text-c-white1 font-bold fill-c-white1">
            <LogoWhite />
          </div>
          <div className="text-2xl text-c-white1 mt-5 stroke-black stroke-1">
            Find your rent in , Fit your rent out
          </div>
        </div>
        <div className="flex-[2] w-full">
          <MainSearchBar />
        </div>
      </div>
    </div>
  );
}
