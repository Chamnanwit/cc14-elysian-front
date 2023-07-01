import { useDispatch } from "react-redux";
import ButtonYellowM from "../components/ButtonYellowM";
import InputBar from "../components/InputBar";
import InputErrorMessage from "../components/InputErrorMessage";
import { loginAsync } from "../features/auth/slice/authSlice";
import validateLogin from "../features/auth/validators/validate-login";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const initialInput = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(loginAsync(input)).unwrap();
      navigate("/admin/dashboard")
      
    } catch (err) {
      console.log(err);
    }


  //   const { email, password } = input;
  //   register({
  //     email: email,
  //     password: password,
  //   })
  //     .then((rs) => {
  //       console.log(rs);
  //     })
  //     .catch((err) => console.log(err));
  };

  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col max-w-[1440px] m-auto">
      <div className="h-screen">
        <Navbar />
        {/* <div className="bg-slate-500 h"></div> */}
        <div className=" bg-[url('/src/assets/pic/cover1.jpg')]  h-full w-full flex flex-col items-center justify-center bg-cover">
          <form
            className=" w-[35%] h-fit flex flex-col items-center gap-7 p-10 rounded-xl bg-c-white1 bg-opacity-50 backdrop-blur-sm"
            onSubmit={hdlSubmit}
          >
            <p className=" text-lg text-c-gray3 font-semibold">ADMIN LOGIN</p>
            <div className="flex flex-col gap-1">
              <InputBar
                value={input.email}
                name="email"
                onChange={hdlChangeInput}
                isInvalid={error.email}
              >
                Email
              </InputBar>
              <div className='h-0 pl-5'>
                <InputErrorMessage message={error.email} />
              </div>
            </div>
            <div>
            <InputBar
              value={input.password}
              name="password"
              onChange={hdlChangeInput}
              isInvalid={error.password}
            >
              Password
            </InputBar>
            {error.password && (
               <div className='h-0 pl-5'>
                <InputErrorMessage message={error.password} />
              </div>
            )}
            </div>
            

            <ButtonYellowM type="submit">เข้าสู่ระบบ</ButtonYellowM>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
