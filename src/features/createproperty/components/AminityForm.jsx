import React from "react";
import { useState } from "react";
import InputForm from "../../../components/InputForm";

export default function AminityForm({
  textConFirm,
  onIsAddMode,
  oldProperty,
}) {
  const initialInput = {};
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="rounded-md overflow-hidden flex flex-col">
        <div className="bg-c-blue3 text-white text-xl py-4 px-6">
            Aminities
        </div>
        <form className=" bg-white px-6 py-4">
          
        </form>
      </div>
    </>
  );
}