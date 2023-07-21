import RentCard from "../../../components/RentCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPropertiesAsync } from "../slice/userProperties";
import Loading from "../../../components/Loading";
import PictureNone from "../../../components/PictureNone";

export default function RentCardSmallList() {
  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้

  useEffect(() => {
    dispatch(userPropertiesAsync()); /// เอามาจาก slice
  }, []);

  const userPropertieslist = useSelector(
    (state) => state?.userProperties?.userProperties
  );
  // console.log("888888888888888", userPropertieslist)

  const isLoading = useSelector((state) => state?.userProperties?.isLoading);
  /// (state) => state?.ชื่อหน้าจากในstore?.ชื่อจาก int stage ใน slice นั้น
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {userPropertieslist
        .filter((el) => {
          if (el?.published) return el?.published === true;
        })
        ?.map((el) => (
          <RentCard
            key={el?.id}
            propName={el?.name}
            propDescription={el?.description}
            agencyName={el?.User?.firstName}
            propPrice={Number(el?.price).toLocaleString("th-TH", {
              style: "currency",
              currency: "THB",
            })}
            propRentPeriod={el?.rentPeriod === "MONTHLY" ? "เดือน" : "สัปดาห์"}
            propLocation={el?.SubDistrict?.District?.Province?.nameInThai}
            propArea={el.totalArea}
            link={el?.id}
            src={
              el?.Images[0]?.imageLink ||
              "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
            }
          />
        ))}
    </>
  );
}
