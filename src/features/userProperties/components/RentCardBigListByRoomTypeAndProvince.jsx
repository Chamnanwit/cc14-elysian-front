import RentCardBig from "../../../components/RentCardBig";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPropertiesAsync } from "../slice/userProperties";
import { Link } from "react-router-dom";
import BadgeGreen from "../../../components/BadgeGreen";
import BadgeYellow from "../../../components/BadgeYellow";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function RentCardBigListByRoomTypeAndProvince({
  areaRange,
  priceRange,
}) {
  let { state } = useLocation();
  //   console.log("search na ja", state.areaRange);
  //   console.log("search na ja pro", state.priceRange);

  console.log("testt1", state.areaRange);
  console.log("testt", state.priceRange);

  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้

  useEffect(() => {
    dispatch(userPropertiesAsync()); /// เอามาจาก slice
  }, []);

  const userPropertieslist = useSelector(
    (state) => state?.userProperties?.userProperties
  );

  const timestamp = {};
  const date = new Date(timestamp).toLocaleDateString();

  return (
    <>
      {userPropertieslist
        .filter((el) => {
          // Filter by room type and province
          if (state.roomtype && state.province) {
            return (
              el?.RoomType?.name === state.roomtype &&
              el?.SubDistrict?.District?.Province?.nameInThai === state.province
            );
          }
          // Filter by province
          else if (state.province) {
            return (
              el?.SubDistrict?.District?.Province?.nameInThai === state.province
            );
          }
          // Filter by room type
          else if (state.roomtype) {
            return el?.RoomType?.name === state.roomtype;
          }
          // No filters applied
          return true;
        })
        .filter((el) => {
          // Filter by area range
          if (state.areaRange) {
            const [minArea, maxArea] = state.areaRange.split(" > ");
            if (maxArea) {
              return (
                el?.totalArea >= parseFloat(minArea) &&
                el?.totalArea < parseFloat(maxArea)
              );
            } else {
              return el?.totalArea >= parseFloat(minArea);
            }
          }
          // No area range filter applied
          return true;
        })
        .filter((el) => {
          // Filter by price range
          if (state.priceRange) {
            const [minPrice, maxPrice] = state.priceRange.split(" > ");
            if (maxPrice) {
              return (
                el?.price >= parseFloat(minPrice) &&
                el?.price < parseFloat(maxPrice)
              );
            } else {
              return el?.price >= parseFloat(minPrice);
            }
          }
          // No price range filter applied
          return true;
        })

        .map((el) => (
          <Link to={`/rentdetail/${el?.id}`} key={el?.id}>
            <RentCardBig
              propName={el?.name}
              propDescription={el?.description}
              agencyName={el?.User?.firstName}
              propPrice={Number(el?.price).toLocaleString("th-TH", {
                style: "currency",
                currency: "THB",
              })}
              propRentPeriod={
                el?.rentPeriod === "MONTHLY" ? "เดือน" : "สัปดาห์"
              }
              propLocation={`${el?.SubDistrict?.nameInThai}, ${el?.SubDistrict?.District?.nameInThai}, ${el?.SubDistrict?.District?.Province?.nameInThai}`}
              agencyphone={el?.User?.phoneNumber}
              agencyemail={el?.User?.email || "00"}
              createTime={el?.createdAt?.slice(0, 10)}
              badge={el?.Optionals?.map((optional) => (
                <BadgeYellow key={optional?.id}>
                  {optional?.OptionalType?.name}
                </BadgeYellow>
              ))}
              rootype={<BadgeGreen>{el?.RoomType?.name}</BadgeGreen>}
            />
          </Link>
        ))}
    </>
  );
}
