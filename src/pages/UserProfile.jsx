import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { checkMeAsync } from "../features/auth/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(checkMeAsync(user.email)).unwrap();
      console.log(user.email);
    }
  });

  const emailstatus = useSelector((state) => state.auth.emailStatus);

  console.log("--------*-*-*>", emailstatus);

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
    isAuthenticated && (
      <div>
        {/* isAuthenticated {console.log("--------------->", user)} */}
        <p>User email: {user.email}</p>
        {/* แสดงข้อมูลผู้ใช้หรือทำงานอื่น ๆ ที่ต้องการสิทธิ์การเข้าถึง */}
      </div>
    )
  );
};
//test การดึงtokenมาใช้งานจากgoogle ออฟชั่น

export default UserProfile;
