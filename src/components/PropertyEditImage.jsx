import React, { useState, useRef } from "react";

export default function PropertyEditImage({
  cls,
  files,
  setFiles,
  name,
  oldImage,
}) {
  // console.log("------>", oldImage);
  // console.log(cls);
  // oldImage = {Properter : {id : number}, imageLink:string}
  const inputRef = useRef();

  const handleFileChange = (e) => {
    // e.stopPropagation()
    //  e.stopPropagation()
    console.log("$$$$$", e.target.name);
    if (e.target.files.length) {
      const selectedFile = e.target.files[0];
      // console.log({ ...files }[name]);
      setFiles({ ...files, [e.target.name]: selectedFile });
    }
  };
  const onChangeImage = () => {
    console.log(inputRef.current);
    inputRef.current.click();
  };

  return (
    <button className="flex items-center justify-center w-full" type="button">
      {Object.keys(files).length > 0 && files[name] ? (
        <img
          src={URL.createObjectURL(files[name])}
          alt="Uploaded"
          onClick={onChangeImage}
        />
      ) : oldImage?.imageLink ? (
        <img src={oldImage.imageLink} alt="Old Image" onClick={onChangeImage} />
      ) : (
        <>
          <label
            onClick={onChangeImage}
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            type="button"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          </label>
        </>
      )}
      <input
        type="file"
        name={cls}
        ref={inputRef}
        className={`hidden ${cls}`}
        onChange={handleFileChange}
      />
    </button>
  );
}
