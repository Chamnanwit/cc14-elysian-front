import RentCard from "../../../components/RentCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPropertiesAsync } from "../slice/userProperties";

export default function RentCardSmallList() {
  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้

  useEffect(() => {
    dispatch(userPropertiesAsync()); /// เอามาจาก slice
  }, []);

  const userPropertieslist = useSelector(
    (state) => state?.userProperties?.userProperties
  );
  /// (state) => state?.ชื่อหน้าจากในstore?.ชื่อจาก int stage ใน slice นั้น
  return (
    <>
      {userPropertieslist.map((el) => (
        <RentCard
          propName={el?.name}
          propDescription={el?.description}
          agencyName={el?.User?.firstName}
          propPrice={el?.price}
          propRentPeriod={el?.rentPeriod === "MONTHLY" ? "เดือน" : "สัปดาห์"}
          propLocation={el?.SubDistrict?.District?.Province?.nameInThai}
          propNearBY=""
          link={el?.id}
        />
      ))}
    </>
  );
}
