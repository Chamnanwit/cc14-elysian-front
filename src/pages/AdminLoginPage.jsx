import ButtonYellowM from "../components/ButtonYellowM";
import InputBar from "../components/InputBar";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCards } from "react-icons/tb";
import { MdPassword } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

export default function AdminLoginPage() {
  const initialInput = {
    password: "",
    email: "",
  };

  const [error, setError] = useState({});
  const [input, setInput] = useState({ initialInput });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegistration(input);
      if (result) {
        return setError(result);
      }
      setError({});
    } catch (err) {
      console.log(err);
    }

    const { email, password } = input;
    register({
      email: email,
      password: password,
    })
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />

        <div className=" bg-[url('/src/assets/pic/cover1.jpg')]  h-[700px] w-full flex flex-col text-center items-center py-16 bg-cover">
          <form
            className="mt-14 w-[35%] h-fit flex flex-col text-center items-center gap-5 p-10 rounded-xl bg-c-white1 bg-opacity-50 backdrop-blur-sm"
            onSubmit={hdlSubmit}
          >
            <p className=" text-lg text-c-gray3 font-semibold">ADMIN LOGIN</p>
            <InputBar
              value={input.email}
              name="email"
              onChange={hdlChangeInput}
              isInvalid={error.email}
            >
              Email
            </InputBar>
            <InputBar
              value={input.password}
              name="password"
              onChange={hdlChangeInput}
              isInvalid={error.password}
            >
              Password
            </InputBar>

            <ButtonYellowM type="submit">เข้าสู่ระบบ</ButtonYellowM>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
