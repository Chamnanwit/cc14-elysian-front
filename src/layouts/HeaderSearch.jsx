import ButtonYellowM from "../components/ButtonYellowM";

export default function HeaderSearch() {
  return (
    <div className=" bg-[url('/src/assets/pic/headerbg.jpg')]  h-[700px] w-full flex flex-col text-center items-center py-16">
      <div className=" w-[70%] flex flex-col text-center items-center">
        <div className="text-2xl text-c-white1 font-bold">LOGO</div>
        <div className="text-2xl text-c-white1 mt-5">
          Find your rent in , Fit your rent out
        </div>
        <input
          className="px-10 py-4 text-lg rounded-full w-full mt-[25%] mb-10 ring-2 ring-c-gray1 outline-none focus:ring-c-blue1 hover:ring-4 hover:ring-c-blue4 transition-all duration-300"
          placeholder="searchbar"
        />

        <ButtonYellowM>ค้นหา</ButtonYellowM>
      </div>
    </div>
  );
}
