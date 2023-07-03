import { useRef } from 'react';

import { useState } from 'react';
import FormButton from './FornButton';

export default function PictureForm({children, initialSrc, onSave, input }) {
  const inputEl = useRef();
  const [file, setFile] = useState(null);

  return (
    <div>
      <input
        type="file"
        className="hidden"
        name="profileImage"
        ref={inputEl}
        onChange={e => {
          if (e.target.files[0]) {
            onSave(e);
          }
        }}
      />
      <div className="flex justify-between items-center mb-4">
        <div>
          {file && (
            <>
              <FormButton
                onClick={async () => {
                  await onSave(file);
                  setFile(null);
                  inputEl.current.value = '';
                }}
              >
                Save
              </FormButton>
              <FormButton
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = '';
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          {/* <FormButton onClick={() => inputEl.current.click()}>Edit</FormButton> */}
        </div>
      </div>
      {children(input.profileImage ? URL.createObjectURL(input.profileImage) : initialSrc, () => inputEl.current.click())}
    </div>
  );
}
