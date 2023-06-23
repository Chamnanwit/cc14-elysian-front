import { ImBin2 } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

export default function RentCard({
  propName,
  propDescription,
  agencyName,
  propPrice,
  propRentPeriod,
  propLocation,
  propNearBY,
}) {
  // const MockData = [
  //   {
  //       "id": 10,
  //       "name": "job3",
  //       "price": "1003.00",
  //       "floor": 3,
  //       "totalArea": 3,
  //       "totalUnit": 300,
  //       "totalBedroom": 3,
  //       "totalBathroom": 3,
  //       "totalKitchen": 3,
  //       "description": "ccc",
  //       "latitude": "99.999999",
  //       "longitude": "444.440000",
  //       "rentPeriod": "MONTHLY",
  //       "locked": false,
  //       "published": false,
  //       "userId": 1,
  //       "roomTypeId": 2,
  //       "subDistrictId": 3
  //   },
  //   {
  //       "id": 11,
  //       "name": "job3",
  //       "price": "1003.00",
  //       "floor": 3,
  //       "totalArea": 3,
  //       "totalUnit": 300,
  //       "totalBedroom": 3,
  //       "totalBathroom": 3,
  //       "totalKitchen": 3,
  //       "description": "ccc",
  //       "latitude": "99.999999",
  //       "longitude": "444.440000",
  //       "rentPeriod": "MONTHLY",
  //       "locked": false,
  //       "published": false,
  //       "userId": 1,
  //       "roomTypeId": 2,
  //       "subDistrictId": 3
  //   },
  //   {
  //       "id": 12,
  //       "name": "job3",
  //       "price": "1003.00",
  //       "floor": 3,
  //       "totalArea": 3,
  //       "totalUnit": 300,
  //       "totalBedroom": 3,
  //       "totalBathroom": 3,
  //       "totalKitchen": 3,
  //       "description": "ccc",
  //       "latitude": "99.999999",
  //       "longitude": "444.440000",
  //       "rentPeriod": "MONTHLY",
  //       "locked": false,
  //       "published": false,
  //       "userId": 1,
  //       "roomTypeId": 2,
  //       "subDistrictId": 3
  //   },
  //   {
  //       "id": 13,
  //       "name": "job3",
  //       "price": "1003.00",
  //       "floor": 3,
  //       "totalArea": 3,
  //       "totalUnit": 300,
  //       "totalBedroom": 3,
  //       "totalBathroom": 3,
  //       "totalKitchen": 3,
  //       "description": "ccc",
  //       "latitude": "99.999999",
  //       "longitude": "444.440000",
  //       "rentPeriod": "MONTHLY",
  //       "locked": false,
  //       "published": false,
  //       "userId": 1,
  //       "roomTypeId": 2,
  //       "subDistrictId": 3
  //   },
  //   {
  //       "id": 14,
  //       "name": "job3",
  //       "price": "1003.00",
  //       "floor": 3,
  //       "totalArea": 3,
  //       "totalUnit": 300,
  //       "totalBedroom": 3,
  //       "totalBathroom": 3,
  //       "totalKitchen": 3,
  //       "description": "ccc",
  //       "latitude": "99.999999",
  //       "longitude": "444.440000",
  //       "rentPeriod": "MONTHLY",
  //       "locked": false,
  //       "published": false,
  //       "userId": 1,
  //       "roomTypeId": 2,
  //       "subDistrictId": 3
  //   },
  //   {
  //       "id": 15,
  //       "name": "job3",
  //       "price": "1003.00",
  //       "floor": 3,
  //       "totalArea": 3,
  //       "totalUnit": 300,
  //       "totalBedroom": 3,
  //       "totalBathroom": 3,
  //       "totalKitchen": 3,
  //       "description": "ccc",
  //       "latitude": "99.999999",
  //       "longitude": "444.440000",
  //       "rentPeriod": "MONTHLY",
  //       "locked": false,
  //       "published": false,
  //       "userId": 1,
  //       "roomTypeId": 2,
  //       "subDistrictId": 3
  //   },
  //   {
  //       "id": 16,
  //       "name": "job3",
  //       "price": "1003.00",
  //       "floor": 3,
  //       "totalArea": 3,
  //       "totalUnit": 300,
  //       "totalBedroom": 3,
  //       "totalBathroom": 3,
  //       "totalKitchen": 3,
  //       "description": "ccc",
  //       "latitude": "99.999999",
  //       "longitude": "444.440000",
  //       "rentPeriod": "MONTHLY",
  //       "locked": false,
  //       "published": false,
  //       "userId": 1,
  //       "roomTypeId": 2,
  //       "subDistrictId": 3
  //   },
  //   {
  //       "id": 17,
  //       "name": "job3",
  //       "price": "1003.00",
  //       "floor": 3,
  //       "totalArea": 3,
  //       "totalUnit": 300,
  //       "totalBedroom": 3,
  //       "totalBathroom": 3,
  //       "totalKitchen": 3,
  //       "description": "ccc",
  //       "latitude": "99.999999",
  //       "longitude": "444.440000",
  //       "rentPeriod": "MONTHLY",
  //       "locked": false,
  //       "published": false,
  //       "userId": 1,
  //       "roomTypeId": 2,
  //       "subDistrictId": 3
  //   }
  // ]

  // const [course, setCourse] = useState([]);
  // const { user } = useAuth();
  // // const [course, setCourse] = useState([]);

  // const hdlRemove = (index) => {
  //   const list = [...course];
  //   // console.log(list[1].id);
  //   deleteCourse(list[index].id);
  //   list.splice(index, 1);
  //   setCourse(list);
  //   // console.log(list);
  // };

  // // const hdlRemove

  // useEffect(() => {
  //   getAllCourse().then((rs) => {
  //     console.log(rs.data);
  //     setCourse(rs.data);
  //   });
  // }, []);

  // {MockData.map((el, index) => (

  //   ))}

  return (
    <div className="flex flex-col w-[270px] h-fit justify-start">
      {/* edit delete text */}
      <div className="flex justify-end w-[270px] py-2">
        <div className="text-sm text-c-gray2  p-1 px-3 rounded-xl hover:bg-c-gray1 hover:text-c-white1 active:scale-95 transition-all duration-200 cursor-pointer">
          Edit
        </div>
        <div className="text-sm text-c-gray2  p-1 px-3 rounded-xl hover:bg-c-gray1 hover:text-c-white1 active:scale-95 transition-all duration-200 cursor-pointer">
          Delete
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-2xl w-[270px] overflow-hidden items-center shadow-lg transition-all hover:scale-105  duration-500 cursor-pointer">
        <a href="/rentdetail">
          <div>
            <img
              src="/src/assets/pic/pictest1.jpg"
              alt="pic test1"
              className="h-[180px] w-full"
            />
          </div>
          <div className="flex flex-col px-5 py-3 gap-1 w-full">
            <div className=" flex gap-2">
              <div className="text-[6pt] text-c-white1 p-1 rounded-md bg-c-blue2 text-center h-auto align-middle my-auto ">
                สวน
              </div>
              <div className="text-[6pt] text-c-white1 p-1 rounded-md bg-c-blue2  text-center h-auto align-middle my-auto ">
                สระว่ายน้ำ
              </div>
              <div className="text-[6pt] text-c-white1 p-1 rounded-md bg-c-blue2  text-center h-auto align-middle my-auto ">
                ฟิสเนส
              </div>
              {/* <div className="text-xs text-c-white1 p-1 rounded-md bg-c-blue4">
              สระว่ายน้ำ
            </div>
            <div className="text-xs text-c-white1 p-1 rounded-md bg-c-orange1">
              ฟิสเนส
            </div> */}
            </div>
            <div className="flex align-middle  items-center overflow-hidden h-10 text-sm text-c-gray3">
              {propName}
            </div>
            <div className="text-[6pt] text-c-gray2 h-12  overflow-y-auto">
              {propDescription}
            </div>
            <div className="flex justify-between"></div>
            <div className="text-xs text-c-gray2 ">{agencyName}</div>
            <div className="text-c-gray3 text-sm">
              ฿{propPrice} / {propRentPeriod}
            </div>
          </div>

          <div className="flex justify-between w-full px-5 py-2 text-xs  text-c-gray2 bg-c-white1">
            <div className="text-xs text-c-gray2 flex gap-1">
              <div>
                <MdLocationOn />
              </div>
              <div> {propLocation || "ที่อยู๋"}</div>
            </div>
            <div>{propNearBY || "0.45km"}</div>
          </div>
        </a>

        <div className="flex justify-between w-full px-5 py-2 text-xs  text-c-gray2 bg-c-white1 border">
          {/* <button className=" hover:scale-125 hover:text-c-red1 active:scale-95 transition-all duration-200">
            <ImBin2 />
          </button>
          <button className="  hover:scale-125 hover:text-c-red1 active:scale-95 transition-all duration-200">
            <BsPencilSquare />
          </button> */}

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-c-blue1"></div>
            <span class="ml-3 text-lg font-medium text-c-blue1 dark:text-gray-300 ">
              <AiFillEye />
            </span>
          </label>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-c-yellow1"></div>
            <span class="ml-3 text-lg font-medium text-c-yellow2 dark:text-gray-300">
              <FaCrown />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
