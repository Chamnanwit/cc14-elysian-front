import React, { useEffect } from "react";
// import "draft-js/dist/Draft.css";
// import "draftail/dist/draftail.css";
import { useState, useRef  } from "react";
// import { EditorState } from "draft-js";
// import { DraftailEditor } from "draftail";
// import { stateToHTML } from "draft-js-export-html";
import InputErrorMessage from "../../../components/InputErrorMessage";
import InputForm from "../../../components/InputForm";
import Checkbox from "./Checkbox";
import validateCreateProperty from "../validators/validate-create-property";
import PropertyImage from "../../../components/PropertyImage";
import { creatImagePropperty } from "../../../api/property-api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPropertyAsync } from "../slice/createproperty-slice";
import { animityAsync } from "../../addanimity/slice/aminity-slice";
import AminityForm from "./AminityForm";

import { Editor } from '@tinymce/tinymce-react';

export default function PropertyForm({
  textConFirm,
  onIsAddMode,
  oldProperty,
}) {
  const initialInput = {
    price: oldProperty?.price || "",
    floor: oldProperty?.floor || "",
    totalArea: oldProperty?.totalArea || "",
    totalUnit: oldProperty?.totalUnit || "",
    totalBedroom: oldProperty?.totalBedroom || "",
    totalBathroom: oldProperty?.totalBathroom || "",
    totalKitchen: oldProperty?.totalKitchen || "",
    description: oldProperty?.description || "",
    latitude: oldProperty?.latitude || "99.999999",
    longitude: oldProperty?.longitude || "444.440000",
    rentPeriod: oldProperty?.rentPeriod || "",
    locked: oldProperty?.locked || true,
    published: oldProperty?.published || true,
    userId: oldProperty?.id || "",
    subDistrictId: oldProperty?.subDistrictId || "3",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(animityAsync());
  }, []);

  const animityRoomArrSearch = useSelector(
    (state) => state?.animity?.animityRoomFilter
  );
  const animityCommonArrSearch = useSelector(
    (state) => state?.animity?.animityCommonFilter
  );

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const onEditorStateChange = (newEditorState) => {
  //   setEditorState(newEditorState);
  // };



//-----------tiny mce


const editorRef = useRef(null);
// const log = () => {
//   if (editorRef.current) {
//     console.log(editorRef.current.getContent());
//   }
// };
//-----------tiny mce




  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  };
  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("------------>***", input);
      const result = await validateCreateProperty(input);

      const formdata = new FormData();
      // formdata.append("imageLink", file[0]);
      console.log("submit");
      const image = await creatImagePropperty(product.data.id, formdata);

      if (result) {
        return setError(result);
      }
      setError({});
    } catch (err) {
      console.log(err);
    }
    setError({});
    
    // console.log('ttttttny',editorRef.current.getContent());
    input.description =  editorRef.current.getContent()
    console.log('input with tiny mce',input)
    // input.description = stateToHTML(editorState.getCurrentContent());
    await dispatch(createPropertyAsync(input)).unwrap();
    navigate("/agent");
  };

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
                  <option key={el.id} value={el.engName}>
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
              <div>
                <InputForm
                  labelName="ละติจูด"
                  name="latitude"
                  placeholder=""
                  value={input.latitude}
                  onChange={handleChangeInput}
                  isInvalid={error.floor}
                />
                {error.latitude && (
                  <InputErrorMessage message={error.latitude} />
                )}
              </div>
            </div>
            <div>
              <div>
                <InputForm
                  labelName="longitude"
                  name="longitude"
                  placeholder=""
                  value={input.longitude}
                  onChange={handleChangeInput}
                  isInvalid={error.longitude}
                />
                {error.longitude && (
                  <InputErrorMessage message={error.longitude} />
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
        apiKey='beu31zgpl2iagusvmlxahjevllhs67h9eagoju5q81mqzahm'
        onInit={(evt, editor) => editorRef.current = editor}
        // initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'wordcount', 'emoticons', 'preview'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | emoticons | preview ',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />




            {/* <DraftailEditor
              editorState={editorState}
              onChange={onEditorStateChange}
              blockTypes={[
                { type: "header-one" },
                { type: "header-two" },
                { type: "header-three" },
                { type: "unstyled" },
                { type: "blockquote" },
                { type: "code" },
                { type: "unordered-list-item" },
                { type: "ordered-list-item" },
              ]}
              inlineStyles={[
                { type: "BOLD" },
                { type: "ITALIC" },
                { type: "UNDERLINE" },
                { type: "STRIKETHROUGH" },
                { type: "CODE" },
              ]}
            /> */}
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
              <PropertyImage cls="Image1" />
            </div>
            <div className="flex flex-col gap-2">
              <p>รูปภาพที่ 2</p>
              <PropertyImage cls="Image2" />
            </div>
            <div className="flex flex-col gap-2">
              <p>รูปภาพที่ 3</p>
              <PropertyImage cls="Image3" />
            </div>
            <div className="flex flex-col gap-2">
              <p>รูปภาพที่ 4</p>
              <PropertyImage cls="Image4" />
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="rounded-md overflow-hidden flex flex-col">
          <div className="bg-c-blue3 text-white text-xl py-4 px-6">
            สิ่งอำนวยความสะดวกภายในห้อง
          </div>
          <div>
            <form className=" bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between">
              {animityRoomArrSearch.map((el) => (
                <Checkbox el={el} key={el.id} />
              ))}
            </form>
          </div>
        </div>

        <div className="rounded-md overflow-hidden flex flex-col">
          <div className="bg-c-blue3 text-white text-xl py-4 px-6">
            สิ่งอำนวยความสะดวกส่วนกลาง
          </div>
          <div>
            <form className=" bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between">
              {animityCommonArrSearch.map((el) => (
                <Checkbox el={el} key={el.id} />
              ))}
            </form>
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
        <AminityForm />
      </>
    </form>
  );
}