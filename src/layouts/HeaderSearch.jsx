import ButtonYellowM from "../components/ButtonYellowM";
import LogoWhite from "../components/LogoWhite";

export default function HeaderSearch() {
  return (
    <div className=" bg-[url('/src/assets/pic/cover1.jpg')]  h-[700px] w-full flex flex-col text-center items-center py-16 bg-cover">
      <div className=" w-[70%] flex flex-col text-center items-center">
        <div className="text-2xl text-c-white1 font-bold fill-c-white1">
          <LogoWhite />
        </div>
        <div className="text-2xl text-c-white1 mt-5 stroke-black stroke-1">
          Find your rent in , Fit your rent out
        </div>
        <input
          className="px-10 py-4 text-lg rounded-full w-full mt-[15%] mb-10 ring-2 ring-c-gray1 outline-none focus:ring-c-blue1 hover:ring-4 hover:ring-c-blue4 transition-all duration-300"
          placeholder="searchbar"
        />

        <ButtonYellowM>ค้นหา</ButtonYellowM>
      </div>
    </div>
  );
}
