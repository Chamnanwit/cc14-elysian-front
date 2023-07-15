import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { checkMeAsync, loginAsync } from "../features/auth/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { useNavigate } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import HeaderSearch from "../layouts/HeaderSearch";
import Loading from "../components/Loading";
const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const isLoading = useSelector(store.authre)
  const isLoading = useSelector((state) => state?.auth?.isLoading);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(checkMeAsync(user.email)).unwrap();
      console.log("check useremail.", user.email);
    }
  });

  const emailstatus = useSelector((state) => state.auth.emailStatus);
  console.log("emailstatus", emailstatus);

  useEffect(() => {
    if (emailstatus) {
      if (emailstatus === "Yes") {
        const email = user.email;
        const password = "123456";
        const input = { email, password };
        dispatch(loginAsync(input));
        console.log("go to dashboard");
        navigate("/");
      } else {
        console.log("Go to register");
        navigate("/register");
      }
    }
  }, [emailstatus, navigate]);

  //ส่งข้อมูลอีเมลไปเช็ค
  // const handleSubmitForm = async (e) => {
  //   try {
  //     e.preventDefault();
  //     await Dispatch(checkMeAsync(user.email)).unwrap();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // console.log(user);
  // {
  //   useEffect(() => {
  //     const fetchAccessToken = async () => {
  //       try {
  //         if (user)
  //         await Dispatch(checkMeAsync(user.email)).unwrap();
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //   });

  // useEffect(() => {
  //   const fetchAccessToken = async () => {
  //     try {
  //       const token = await getAccessTokenSilently();
  //       setAccessToken(token);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchAccessToken();
  // }, [getAccessTokenSilently]);

  return (
    // <Loading />

    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div className=" pb-10">
        <Navbar />
        <div className="h-full bg-c-white1">
          <HeaderSearch />
          {/* <Loading /> */}
        </div>
      </div>
    </div>
  );
};
//test การดึงtokenมาใช้งานจากgoogle ออฟชั่น

export default UserProfile;
