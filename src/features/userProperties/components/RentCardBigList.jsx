import RentCardBig from "../../../components/RentCardBig";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPropertiesAsync } from "../slice/userProperties";
import { Link } from "react-router-dom";

export default function RentCardBigList() {
  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้

  useEffect(() => {
    dispatch(userPropertiesAsync()); /// เอามาจาก slice
  }, []);

  const userPropertieslist = useSelector(
    (state) => state?.userProperties?.userProperties
  );
  return (
    <>
      {userPropertieslist.map((el) => (
        <Link to={`/rentdetail/${el.id}`}>
          <RentCardBig
            propName={el.name}
            propDescription={el.description}
            agencyName={el.User.firstName}
            propPrice={el.price}
            propRentPeriod={el.rentPeriod === "MONTHLY" ? "เดือน" : "สัปดาห์"}
            propLocation={
              el.SubDistrict.nameInThai +
              ", " +
              el.SubDistrict.District.nameInThai +
              ", " +
              el.SubDistrict.District.Province.nameInThai
            }
            agencyNum={el.User.phoneNumber}
            agencyMail={el.User.email || "00"}
            createTime={el.createdAt}
          />
        </Link>
      ))}
    </>
  );
}
