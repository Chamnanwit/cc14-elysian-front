import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { BiTime } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPropertiesByIdAsync } from "../features/userProperties/slice/userProperties";
import { useNavigate, useParams, Link } from "react-router-dom";

import AgencyCard from "../components/AgencyCard";

export default function RentDetailPage() {
  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้
  const { id } = useParams();

  useEffect(() => {
    dispatch(userPropertiesByIdAsync(id)); /// เอามาจาก slice
  }, [id]);

  const userPropertiesIdlist = useSelector(
    (state) => state?.userProperties?.userProperties
  );

  const el = { ...userPropertiesIdlist };

  console.log(userPropertiesIdlist);

  return (
    <div className=" w-full bg-c-white1 min-h-screen flex flex-col justify-between max-w-[1440px] m-auto">
      <div>
        <Navbar />

        <div>
          <div className="w-full flex justify-center pb-10 pt-16 text-xl font-semibold">
            {el?.name}
          </div>
          <div className="pb-10 shadow-xl">
            <div className="h-[330px] overflow-auto bg-c-gray3 flex justify-start gap-2 items-center">
              <img
                src="/src/assets/pic/pictest1.jpg"
                alt="pic test1"
                className="h-[300px] w-auto"
              />
              <img
                src="/src/assets/pic/pictest2.jpg"
                alt="pic test1"
                className="h-[300px] w-auto"
              />
              <img
                src="/src/assets/pic/pictest3.jpg"
                alt="pic test1"
                className="h-[300px] w-auto"
              />
              <img
                src="/src/assets/pic/mainpic.jpeg"
                alt="pic test1"
                className="h-[300px] w-auto"
              />
            </div>
          </div>
          <div className="flex w-full mt-10">
            <div className="flex-1 p-5 flex flex-col items-center gap-5">
              {/* <div className=" px-5  flex-[1] flex flex-col items-center justify-start gap-5 text-center">
      
            </div> */}
              <div className="flex flex-col w-full p-10 gap-2 items-center bg-white rounded-xl shadow-lg">
                <p>รายละเอียดห้อง</p>
                {/* <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                  <p>อาคาร</p>
                  <p>A</p>
                </div> */}
                <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                  <p>ประเภทห้อง</p>
                  <p>{el?.RoomType?.name}</p>
                </div>
                <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                  <p>ชั้น</p>
                  <p>{el?.floor}</p>
                </div>
                <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                  <p>ห้องนอน</p>
                  <p>{el?.totalBedroom || "-"} ห้อง</p>
                </div>

                <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                  <p>ห้องน้ำ</p>
                  <p>{el?.totalBathroom || "-"} ห้อง</p>
                </div>
                <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                  <p>ห้องครัว</p>
                  <p>{el?.totalKitchen || "-"} ห้อง</p>
                </div>
                <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                  <p>จำนวนห้องเช่า</p>
                  <p>{el?.totalUnit} ห้อง</p>
                </div>
                <div className="flex justify-between w-full text-c-gray2 border-b-1 border py-2 border-r-0 border-l-0 border-t-0">
                  <p>พื้นที่ห้อง</p>
                  <p>{el?.totalArea} ตร.ว.</p>
                </div>
              </div>
            </div>
            <div className="flex-[3] p-5 flex flex-col gap-5">
              <div className="flex justify-between text-c-gray3 gap-2">
                <div>
                  <div className="flex gap-2  text-c-gray2 pt-4">
                    <BiTime />
                    <p className="text-xs items-center">
                      {el?.createdAt?.slice(0, 10)}
                    </p>
                  </div>
                  <br />

                  <hr />
                  <br />
                  <div className="w-full text-2xl font-semibold">
                    {el?.name}
                  </div>
                  <div className=" text-c-blue1 text-xl py-5">
                    ราคาเช่า{" "}
                    {Number(el?.price).toLocaleString("th-TH", {
                      style: "currency",
                      currency: "THB",
                    })}{" "}
                    /{el.rentPeriod === "MONTHLY" ? "เดือน" : "สัปดาห์"}
                  </div>
                  {/* <div className=" text-sm text-c-gray2">
                    มัดจำ/ประกัน: 2 เดือน
                  </div>
                  <div className=" text-sm text-c-gray2">
                    จ่ายล่วงหน้า 2 เดือน
                  </div> */}
                  <div className="text-lg mt-5 text-c-gray2 flex gap-1">
                    <div>
                      <MdLocationOn />
                    </div>
                    <div>
                      {el?.SubDistrict?.nameInThai +
                        ", " +
                        el?.SubDistrict?.District?.nameInThai +
                        ", " +
                        el?.SubDistrict?.District?.Province?.nameInThai}
                    </div>
                  </div>
                </div>

                <AgencyCard
                  agencyfirstname={el?.User?.firstName}
                  agencylastname={el?.User?.lastName}
                  agencystatus={el?.User?.locked}
                  agencyphone={el?.User?.phoneNumber}
                  agencyemail={el?.User?.email || "00"}
                />
              </div>

              <div className="join join-vertical w-full rounded-none mb-10 h-fit">
                <div className="collapse collapse-arrow join-item border-b border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium text-c-gray3">
                    รายละเอียด
                  </div>
                  <div className="collapse-content">
                    <div dangerouslySetInnerHTML={{ __html: el.description }} />
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium text-c-gray3">
                    สิ่งอำนวยความสะดวก
                  </div>
                  <div className="collapse-content">
                    {el?.Optionals?.map((el) => (
                      <li className=" text-c-gray2">
                        {el?.OptionalType?.name}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
