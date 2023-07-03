import { useRef } from "react";

import { useState } from "react";
import FormButton from "./FornButton";

export default function PictureForm({ children, initialSrc, onSave, input }) {
  const inputEl = useRef();
  const [file, setFile] = useState(null);

  return (
    <div>
      <input
        type="file"
        className="hidden"
        name="profileImage"
        ref={inputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            onSave(e);
          }
        }}
      />
      <div className="flex justify-between items-center mb-4">
        <div>
          {file && (
            <>
              <button
                type="button"
                className="px-2.5 py-1.5 rounded-md text-blue-600 font-medium hover:bg-gray-100"
                onClick={async () => {
                  await onSave(file);
                  setFile(null);
                  inputEl.current.value = "";
                }}
              >
                Save
              </button>
              <FormButton
                onClick={async () => {
                  await onSave(file);
                  setFile(null);
                  inputEl.current.value = "";
                }}
              >
                Save
              </FormButton>
              <button
                type="button"
                className="px-2.5 py-1.5 rounded-md text-blue-600 font-medium hover:bg-gray-100"
                onClick={onClick}
              >
                Cancle
              </button>
              <FormButton
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = "";
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          {/* <FormButton onClick={() => inputEl.current.click()}>Edit</FormButton> */}
        </div>
      </div>
      {children(
        input.profileImage
          ? URL.createObjectURL(input.profileImage)
          : initialSrc,
        () => inputEl.current.click()
      )}
    </div>
  );
}
