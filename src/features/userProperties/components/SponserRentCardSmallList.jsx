import RentCard from "../../../components/RentCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPropertiesAsync } from "../slice/userProperties";
import Loading from "../../../components/Loading";
import SponserRentCard from "./SponserRentCard";
import PictureNone from "../../../components/PictureNone";

export default function SponserRentCardSmallList() {
  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้

  useEffect(() => {
    dispatch(userPropertiesAsync()); /// เอามาจาก slice
  }, []);

  const userPropertieslist = useSelector(
    (state) => state?.userProperties?.userProperties
  );
  const isLoading = useSelector((state) => state?.userProperties?.isLoading);
  /// (state) => state?.ชื่อหน้าจากในstore?.ชื่อจาก int stage ใน slice นั้น
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {userPropertieslist
        .filter((el) => {
          if (el?.User?.PurchaseHistories[0]?.orderStatus)
            return el?.User?.PurchaseHistories[0]?.orderStatus === "ACTIVE";
        })
        .filter((el) => {
          if (el?.User?.PurchaseHistories[0]?.pricingPlanId)
            return (
              el?.User?.PurchaseHistories[0]?.pricingPlanId == 3 ||
              el?.User?.PurchaseHistories[0]?.pricingPlanId == 7 ||
              el?.User?.PurchaseHistories[0]?.pricingPlanId == 2 ||
              el?.User?.PurchaseHistories[0]?.pricingPlanId == 9 ||
              el?.User?.PurchaseHistories[0]?.pricingPlanId == 6
            );
        })
        // .filter((el) => {
        //   if (el?.published) return el?.published === true;
        // })
        // .filter((el) => {
        //   if (el?.topStatus) return el?.topStatus === true;
        // })
        ?.map((el) => (
          <SponserRentCard
            key={el?.id}
            propName={el?.name}
            propDescription={el?.description}
            agencyName={el?.User?.firstName}
            propPrice={Number(el?.price).toLocaleString("th-TH", {
              style: "currency",
              currency: "THB",
            })}
            src={
              el?.Images[0]?.imageLink ||
              "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
            }
            propRentPeriod={
              el?.rentPeriod === "MONTHLY"
                ? "เดือน"
                : false || el?.rentPeriod === "YEARLY"
                ? "ปี"
                : "วัน"
            }
            propLocation={el?.SubDistrict?.District?.Province?.nameInThai}
            propArea={el.totalArea}
            link={el?.id}
          />
        ))}
    </>
  );
}
