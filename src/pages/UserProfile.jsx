import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setAccessToken(token);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAccessToken();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Access Token: {accessToken}</p>
      {/* แสดงข้อมูลผู้ใช้ หรือทำงานอื่น ๆ ที่ต้องการสิทธิ์การเข้าถึง */}
    </div>
  );
};
//test การดึงtokenมาใช้งานจากgoogle ออฟชั่น

export default UserProfile;
