import { useState } from "react";
import { useSelector } from "react-redux";
import Checkbox from "./Checkbox";

export default function AminityEditForm({
  textConFirm,
  onIsAddMode,
  oldProperty,
  onInputChange,
}) {
  const animityRoomArrSearch = useSelector(
    (state) => state?.animity?.animityRoomFilter
  );
  const animityCommonArrSearch = useSelector(
    (state) => state?.animity?.animityCommonFilter
  );
  console.log("----->", oldProperty);

  // Get the IDs of the optional types in the oldProperty array
  // const oldPropertyIds = oldProperty?.Optional?.map(
  //   (prop) => prop.optionalTypeId
  // );

  // const initialInput = oldPropertyIds.reduce((inputObj, id) => {
  //   return { ...inputObj, [id]: true };
  // }, {});

  const [inputcheck, setInputcheck] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    if (e.target.checked) {
      setInputcheck((prevInput) => ({
        ...prevInput,
        [e.target.name]: e.target.checked,
      }));
    } else {
      const { [e.target.name]: _, ...updatedInput } = inputcheck;
      setInputcheck(updatedInput);
    }

    onInputChange(inputcheck);
  };

  return (
    <>
      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          สิ่งอำนวยความสะดวกภายในห้อง
        </div>
        <div>
          <form
            className="bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between"
            onClick={handleChangeInput}
          >
            {animityRoomArrSearch.map((el) => (
              <Checkbox el={el} key={el?.id} checked={inputcheck[el?.id]} />
            ))}
          </form>
        </div>
      </div>

      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
          สิ่งอำนวยความสะดวกส่วนกลาง
        </div>
        <div>
          <form
            className="bg-white px-6 py-2 grid grid-cols-5 justify-content: space-between"
            onClick={handleChangeInput}
          >
            {animityCommonArrSearch.map((el) => (
              <Checkbox el={el} key={el?.id} checked={inputcheck[el?.id]} />
            ))}
          </form>
        </div>
      </div>
    </>
  );
}
