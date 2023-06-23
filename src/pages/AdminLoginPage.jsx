import ButtonYellowM from "../components/ButtonYellowM";
import InputBar from "../components/InputBar";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

export default function AdminLoginPage() {
  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />
        <div className=" bg-[url('/src/assets/pic/headerbg.jpg')]  h-[790px] w-full flex flex-col text-center items-center py-16 transition-all duration-200">
          <form className="mt-14 w-[35%] h-fit flex flex-col text-center items-center gap-5 p-10 rounded-xl bg-c-green4 bg-opacity-30 backdrop-blur-sm">
            <p className=" text-lg text-c-white1 font-semibold">ADMIN LOGIN</p>
            <InputBar>Email</InputBar>
            <InputBar>Password</InputBar>

            <ButtonYellowM>เข้าสู่ระบบ</ButtonYellowM>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
