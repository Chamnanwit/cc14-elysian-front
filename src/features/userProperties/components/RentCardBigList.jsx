import RentCardBig from "../../../components/RentCardBig";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPropertiesAsync } from "../slice/userProperties";
import { Link } from "react-router-dom";
import BadgeGreen from "../../../components/BadgeGreen";
import BadgeYellow from "../../../components/BadgeYellow";
import PictureNone from "../../../components/PictureNone";

export default function RentCardBigList() {
  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้

  useEffect(() => {
    dispatch(userPropertiesAsync()); /// เอามาจาก slice
  }, []);

  const userPropertieslist = useSelector(
    (state) => state?.userProperties?.userProperties
  );

  // const timestamp = {};
  // const date = new Date(timestamp)?.toLocaleDateString();

  return (
    <>
      {userPropertieslist?.map((el) => (
        <Link to={`/rentdetail/${el?.id}`}>
          <RentCardBig
            src={el?.Images}
            propName={el?.name}
            propDescription={el?.description}
            agencyName={el?.User?.firstName}
            propArea={el.totalArea}
            propPrice={Number(el?.price).toLocaleString("th-TH", {
              style: "currency",
              currency: "THB",
            })}
            propRentPeriod={el?.rentPeriod === "MONTHLY" ? "เดือน" : "สัปดาห์"}
            propLocation={
              el?.SubDistrict?.nameInThai +
              ", " +
              el?.SubDistrict?.District?.nameInThai +
              ", " +
              el?.SubDistrict?.District?.Province?.nameInThai
            }
            agencyphone={el?.User?.phoneNumber}
            agencyemail={el?.User?.email || "00"}
            createTime={el?.createdAt?.slice(0, 10)}
            badge={el?.Optionals?.map((el) => (
              <BadgeYellow>{el?.OptionalType?.name}</BadgeYellow>
            ))}
            rootype={<BadgeGreen>{el?.RoomType?.name}</BadgeGreen>}
          />
        </Link>
      ))}
    </>
  );
}
