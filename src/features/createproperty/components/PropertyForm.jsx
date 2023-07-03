import React, { useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useRef } from "react";

import InputErrorMessage from "../../../components/InputErrorMessage";
import InputForm from "../../../components/InputForm";
import validateCreateProperty from "../validators/validate-create-property";
import PropertyImage from "../../../components/PropertyImage";
import { creatImagePropperty } from "../../../api/property-api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPropertyAsync } from "../slice/createproperty-slice";
import { animityAsync } from "../../addanimity/slice/aminity-slice";
import AminityForm from "./AminityForm";
import GoogleMap from "../../../components/ShowGooglemap";

export default function PropertyForm({
  textConFirm,
  onIsAddMode,
  oldProperty,
  listProvice,
}) {
  const initialInput = {
    price: "",
    floor: "",
    totalArea: "",
    totalUnit: "",
    totalBedroom: "",
    totalBathroom: "",
    totalKitchen: "",
    description: "",
    latitude: "",
    longitude: "",
    rentPeriod: "",
    locked: false,
    published: true,
    userId: oldProperty?.id || "",
    subDistrictId: "",
  };

  const initialImageInput = {
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  };
  // console.log("initialImageInput--->", initialImageInput);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const [files, setFiles] = useState({});
  const [imageInput, setImageInput] = useState(initialImageInput);

  const selectProvice = listProvice;

  console.log({ files });

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubDistrict, setSelectedSubDistrict] = useState("");

  const handleProvinceChange = (event) => {
    const province = event.target.value;
    setSelectedProvince(province);
    setSelectedDistrict("");
    setSelectedSubDistrict("");
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setSelectedSubDistrict("");
  };

  const handleSubDistrictChange = (event) => {
    const subDistrict = event.target.value;
    setSelectedSubDistrict(subDistrict);
    setInput({ ...input, subDistrictId: subDistrict });
  };

  const getDistrictsByProvince = () => {
    const provinceData = selectProvice.find(
      (item) => item.nameInThai === selectedProvince
    );
    if (provinceData && provinceData.Districts) {
      return provinceData.Districts;
    }
    return [];
  };

  const getSubDistrictsByDistrict = () => {
    const provinceData = selectProvice.find(
      (item) => item.nameInThai === selectedProvince
    );
    if (provinceData && provinceData.Districts) {
      const districtData = provinceData.Districts.find(
        (item) => item.nameInThai === selectedDistrict
      );
      if (districtData && districtData.SubDistricts) {
        return districtData.SubDistricts;
      }
    }
    return [];
  };

  const [position, setPosition] = useState({});
  // console.log("position", position);

  const handleChangeMap = (newPosition) => {
    setPosition(newPosition);
  };
  const editorRef = useRef(null);

  useEffect(() => {
    dispatch(animityAsync());
  }, []);

  const handleLockChange = (event) => {
    setInput((prevInput) => ({
      ...prevInput,
      locked: event.target.value === "show",
    }));
  };

  const [inputcheck, setInputcheck] = useState({});

  const handleAminityFormChange = (inputcheck) => {
    setInputcheck(inputcheck);
  };

  const handleChangeImageInput = (e) => {
    setImageInput({ ...imageInput, [e.target.name]: e.target.files[0] });
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  };
  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      input.description = editorRef.current.getContent();
      // const result = await validateCreateProperty(input);
      // if (result) {
      //   return setError(result);
      // }
      // setError({});

      const property = {
        ...input,
        latitude: position.lat,
        longitude: position.lng,
      };

      // console.log("------------>***", inputcheck);
      const formdata = new FormData();
      // for (let image of [property.id, formdata, file[0]])
      formdata.append("property", JSON.stringify(property));
      formdata.append("imageLink", file[0]);
      formdata.append("otpionals", JSON.stringify(inputcheck));
      // console.log("------------>***", formdata);

      await dispatch(createPropertyAsync(formdata)).unwrap();

      //  const image = await creatImagePropperty(property.id, formdata);

      navigate("/agent");
    } catch (err) {
      console.log(err);
    }
    // console.log("------------>***", {
    //   ...input,
    //   latitude: position.lat,
    //   longitude: position.lng,
    // });
  };
  createPropertyAsync;

  const propertyType = [
    { id: 1, name: "สตูดิโอ" },
    { id: 2, name: "ห้องเพดานสูง" },
    { id: 3, name: "ห้องคู่" },
    { id: 4, name: "เพนท์เฮ้าส์" },
    { id: 5, name: "วิลล่า" },
  ];

  const period = [
    { id: 1, thaiName: "รายวัน", engName: "DAILY" },
    { id: 2, thaiName: "รายเดือน", engName: "MONTHLY" },
    { id: 3, thaiName: "รายปี", engName: "YEARLY" },
  ];

  return (
    <form className="flex flex-col gap-8" onSubmit={hdlSubmit}>
      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          ข้อมูลพื้นฐาน
        </div>
        <div className=" bg-white px-6 py-4">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <div>
                <InputForm
                  labelName="ชื่อโครงการ"
                  name="name"
                  placeholder=""
                  value={input.name}
                  onChange={handleChangeInput}
                  isInvalid={error.name}
                />
                {error.name && <InputErrorMessage message={error.name} />}
              </div>
            </div>
            <div>
              <InputForm
                labelName="ราคา"
                name="price"
                placeholder=""
                value={input.price}
                onChange={handleChangeInput}
                isInvalid={error.price}
              />
              {error.price && <InputErrorMessage message={error.price} />}
            </div>
            <div>
              <label
                htmlFor="roomTypeId"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                ประเภทที่พัก
              </label>
              <select
                id="roomTypeId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="roomTypeId"
                value={input.roomTypeId}
                onChange={handleChangeInput}
              >
                <option selected hidden value={""}>
                  เลือกประเภทที่พัก
                </option>
                {propertyType.map((el) =>
                  el.id === input.roomTypeId ? (
                    <option selected key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ) : (
                    <option key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  )
                )}
              </select>
              <div className="h-0 pb-2">
                {error.roomTypeId && (
                  <InputErrorMessage message={error.roomTypeId} />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="rentPeriod"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                ระยะเวลา
              </label>
              <select
                id="rentPeriod"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="rentPeriod"
                value={input.rentPeriod}
                onChange={handleChangeInput}
              >
                <option selected hidden value={""}>
                  เลือกระยะเวลา
                </option>
                {period.map((el) => (
                  <option key={el.id} value={el.Name}>
                    {el.thaiName}
                  </option>
                ))}
              </select>
              <div className="h-6 pb-2">
                {error.rentPeriod && (
                  <InputErrorMessage message={error.rentPeriod} />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="province"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                เลือกจังหวัด
              </label>
              <select
                id="province"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="province"
                value={selectedProvince}
                onChange={handleProvinceChange}
              >
                <option selected hidden value={""}>
                  เลือกจังหวัด
                </option>
                {listProvice.map((province) => (
                  <option key={province.id} value={province.nameInThai}>
                    {province.nameInThai}
                  </option>
                ))}
              </select>
              <div className="h-6 pb-2">
                {error.province && (
                  <InputErrorMessage message={error.province} />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="district"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                เลือกอำเภอ
              </label>
              <select
                id="district"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="district"
                value={selectedDistrict}
                onChange={handleDistrictChange}
                disabled={!selectedProvince}
              >
                <option selected hidden value={""}>
                  เลือกเขต
                </option>
                {getDistrictsByProvince().map((district) => (
                  <option key={district?.id} value={district.nameInThai}>
                    {district.nameInThai}
                  </option>
                ))}
              </select>
              <div className="h-6 pb-2">
                {error.district && (
                  <InputErrorMessage message={error.district} />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="subDistrict"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                ตำบล
              </label>
              <select
                id="subDistrict"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="subDistrictId"
                value={selectedSubDistrict}
                onChange={handleSubDistrictChange}
                disabled={!selectedDistrict}
              >
                <option selected hidden value={""}>
                  เลือกตำบล
                </option>
                {getSubDistrictsByDistrict().map((subDistrict) => (
                  <option key={subDistrict.id} value={subDistrict.id}>
                    {subDistrict.nameInThai}
                  </option>
                ))}
              </select>
              <div className="h-6 pb-2">
                {error.rentPeriod && (
                  <InputErrorMessage message={error.rentPeriod} />
                )}
              </div>
            </div>

            <div>
              <div>
                <InputForm
                  labelName="ชั้น"
                  name="floor"
                  placeholder=""
                  value={input.floor}
                  onChange={handleChangeInput}
                  isInvalid={error.floor}
                />
                {error.floor && <InputErrorMessage message={error.floor} />}
              </div>
            </div>

            <div className="">
              <GoogleMap
                location={position}
                handleChangeMap={handleChangeMap}
              />
            </div>

            <div>
              <div>
                <div>
                  <InputForm
                    labelName="ละติจูด"
                    name="latitude"
                    placeholder=""
                    value={position?.lat ? position.lat.toFixed(3) : ""}
                    onChange={handleChangeMap}
                    isInvalid={error.latitude}
                  />
                  {error.latitude && (
                    <InputErrorMessage message={error.latitude} />
                  )}
                </div>
              </div>
              <div>
                <div>
                  <InputForm
                    labelName="ลองจิจูด"
                    name="longitude"
                    placeholder=""
                    value={position?.lng ? position.lng.toFixed(3) : ""}
                    onChange={handleChangeMap}
                    isInvalid={error.longitude}
                  />
                  {error.longitude && (
                    <InputErrorMessage message={error.longitude} />
                  )}
                </div>
              </div>
            </div>

            <div>
              <div>
                <InputForm
                  labelName="พื้นที่ทั้งหมด"
                  name="totalArea"
                  placeholder=""
                  value={input.totalArea}
                  onChange={handleChangeInput}
                  isInvalid={error.totalArea}
                />
                {error.totalArea && (
                  <InputErrorMessage message={error.totalArea} />
                )}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="ห้องทั้งหมด"
                  name="totalUnit"
                  placeholder=""
                  value={input.totalUnit}
                  onChange={handleChangeInput}
                  isInvalid={error.totalUnit}
                />
                {error.totalUnit && (
                  <InputErrorMessage message={error.totalUnit} />
                )}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="จำนวนห้องนอน"
                  name="totalBedroom"
                  placeholder=""
                  value={input.totalBedroom}
                  onChange={handleChangeInput}
                  isInvalid={error.totalBedroom}
                />
                {error.totalBedroom && (
                  <InputErrorMessage message={error.totalBedroom} />
                )}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="จำนวนห้องน้ำ"
                  name="totalBathroom"
                  placeholder=""
                  value={input.totalBathroom}
                  onChange={handleChangeInput}
                  isInvalid={error.totalBathroom}
                />
                {error.totalBathroom && (
                  <InputErrorMessage message={error.totalBathroom} />
                )}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="จำนวนห้องครัว"
                  name="totalKitchen"
                  placeholder=""
                  value={input.totalKitchen}
                  onChange={handleChangeInput}
                  isInvalid={error.totalKitchen}
                />
                {error.totalKitchen && (
                  <InputErrorMessage message={error.totalKitchen} />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              รายละเอียดเพิ่มเติม
            </div>
            <Editor
              apiKey="beu31zgpl2iagusvmlxahjevllhs67h9eagoju5q81mqzahm"
              onInit={(evt, editor) => (editorRef.current = editor)}
              // initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: {
                  file: {
                    title: "File",
                    items:
                      "newdocument restoredraft | preview | export print | deleteallconversations",
                  },
                  edit: {
                    title: "Edit",
                    items:
                      "undo redo | cut copy paste pastetext | selectall | searchreplace",
                  },
                  view: {
                    title: "View",
                    items:
                      "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
                  },
                  insert: {
                    title: "Insert",
                    items:
                      "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
                  },
                  format: {
                    title: "Format",
                    items:
                      "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
                  },
                  tools: {
                    title: "Tools",
                    items:
                      "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
                  },
                  table: {
                    title: "Table",
                    items:
                      "inserttable | cell row column | advtablesort | tableprops deletetable",
                  },
                  help: { title: "Help", items: "help" },
                },
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "wordcount",
                  "emoticons",
                  "preview",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | emoticons | preview ",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            {error.description && (
              <InputErrorMessage message={error.description} />
            )}
          </div>
        </div>
      </div>

      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          รูปภาพห้องของคุณ
        </div>
        <div className=" bg-white px-6 py-4">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <p>รูปภาพที่ 1</p>
              <PropertyImage
                cls="Image1"
                onChange={handleChangeImageInput}
                name="image1"
                files={files}
                setFiles={setFiles}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>รูปภาพที่ 2</p>
              <PropertyImage
                cls="Image2"
                onChange={handleChangeImageInput}
                name="image2"
                files={files}
                setFiles={setFiles}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>รูปภาพที่ 3</p>
              <PropertyImage
                cls="Image3"
                onChange={handleChangeImageInput}
                name="image3"
                files={files}
                setFiles={setFiles}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>รูปภาพที่ 4</p>
              <PropertyImage
                cls="Image4"
                onChange={handleChangeImageInput}
                name="image4"
                files={files}
                setFiles={setFiles}
              />
            </div>
          </div>
        </div>
      </div>

      <>
        <AminityForm onInputChange={handleAminityFormChange} />
        <div className="rounded-md overflow-hidden flex flex-col">
          <div className="bg-c-blue3 text-white text-xl py-4 px-6">
            ตั้งค่าห้องเช่า
          </div>
          <div>
            <label
              htmlFor="option"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white p-5"
            >
              แสดงห้องเช่าทันที
            </label>
            <select
              id="option"
              name="option"
              className="bg-gray-50 border p-5 mx-5 w-[50%] border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={input.locked ? "show" : "hide"}
              onChange={handleLockChange}
            >
              <option value="show">แสดง</option>
              <option value="hide ">ไม่แสดง</option>
            </select>
          </div>
        </div>

        <div className="flex">
          <button
            type="submit"
            className="p-2 min-w-[80px] text-white bg-yellow-400 rounded-md w-full"
          >
            สร้างห้องเช่า
          </button>
        </div>
      </>
    </form>
  );
}
