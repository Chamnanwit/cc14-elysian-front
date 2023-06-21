export default function RentCard() {
  return (
    <div className="flex flex-col w-[270px] h-fit justify-start">
      <div className="flex justify-end w-[270px] py-2">
        <div className="text-sm text-c-gray2  p-1 px-3 rounded-xl hover:bg-c-gray1 hover:text-c-white1 active:scale-95 transition-all duration-200 cursor-pointer">
          Edit
        </div>
        <div className="text-sm text-c-gray2  p-1 px-3 rounded-xl hover:bg-c-gray1 hover:text-c-white1 active:scale-95 transition-all duration-200 cursor-pointer">
          Delete
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-2xl w-[270px] overflow-hidden items-center shadow-lg">
        <div>
          <img
            src="/src/assets/pic/pictest1.jpg"
            alt="pic test1"
            className="h-[180px] w-full"
          />
        </div>
        <div className="flex flex-col px-5 py-3 gap-1 w-full">
          <div className=" flex gap-2">
            <div className="text-xs text-c-white1 p-1 rounded-md bg-c-green3">
              สวน
            </div>
            <div className="text-xs text-c-white1 p-1 rounded-md bg-c-blue4">
              สระว่ายน้ำ
            </div>
            <div className="text-xs text-c-white1 p-1 rounded-md bg-c-orange1">
              ฟิสเนส
            </div>
          </div>
          <div className="overflow-auto h-12">
            เดอะออริจิ้นคอนโด - กลางสยามเมืองกรุง โวนไทย ใส่ไข่
          </div>
          <div className="text-xs text-c-gray2 h-12  overflow-auto">
            ในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร
            วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัล ในน้ำมีปลา ในนามีข้าว
            มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์ มีโปร วันเสาร์ วันศุกร์พบเด็ก
            มีๆรเจอกัลในน้ำมีปลา ในนามีข้าว มีเหล้าข้าวสารและขนม ลมเย็นกินเบียร์
            มีโปร วันเสาร์ วันศุกร์พบเด็ก มีๆรเจอกัล
          </div>
          <div className="text-xs text-c-gray2 ">by owner</div>
          <div className="text-c-gray3">฿11200 - 28000 / month</div>
        </div>
        <div className="flex justify-between w-full px-5 py-2 text-xs  text-c-gray2 bg-c-white1">
          <div>HATYAI</div>
          <div>0.45km</div>
        </div>
      </div>
      {/* <div className="flex flex-col bg-white rounded-2xl w-[280px] overflow-hidden items-center">
      <div>
        <img
          src="/src/assets/pic/pictest2.jpg"
          alt="pic test1"
          className="h-[180px]"
        />
      </div>
      <div>detail</div>
      <div>footer</div>
    </div> */}
    </div>
  );
}
