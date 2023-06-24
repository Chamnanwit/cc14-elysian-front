import { CiLocationOn, CiEdit } from "react-icons/ci";
import { AiOutlineEye, AiTwotoneDelete } from "react-icons/ai";

export default function MyPropertyCard({ propName, propLocation }) {
  return (
    <div className="bg-purple-100 p-6 border border-purple-200 shadow-lg rounded-md flex items-center gap-6 justify-between">
      <div className="relative w-40 flex gap-4">
        <img
          className="max-w-full"
          src="https://datacraft.app/uploads/custom-images/property-thumb-2023-05-07-03-30-12-9655.webp"
          alt="Property" //รอmapรูป
        />
        <div className="absolute left-0 top-0 bg-green-500 text-white text-base font-medium px-4 py-1 rounded-r-md">
          Enable
          {/*รอ map status  */}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-yellow-400 rounded-md px-4 py-1 text-base font-medium">
          ปล่อยเช่า
        </div>
        <h3 className="text-2xl font-semibold">{propName}</h3>
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <p className="text-c-gray2">{propLocation}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <a
          href="#"
          className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center hover:bg-c-blue2 hover:text-c-white1"
        >
          <AiOutlineEye />
        </a>
        <button className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center hover:bg-c-green3 hover:text-c-white1">
          <CiEdit />
        </button>
        <button className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center hover:bg-c-red1 hover:text-c-white1">
          <AiTwotoneDelete />
        </button>
      </div>
    </div>
  );
}
