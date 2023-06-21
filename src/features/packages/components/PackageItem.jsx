<<<<<<< HEAD
import React, { useState } from "react";
import { EditIcon, TrashIcon } from "../../../icons";
import PackageForm from "./PackageForm";

export default function PackageItem({ el }) {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <>
      {!isEditMode ? (
        <>
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.id}
                </th>
                <td class="px-6 py-4">{el.name}</td>
                <td class="px-6 py-4">฿ {el.price}</td>
                <td class="px-6 py-4">{el.expiration}</td>
                <td class="px-6 py-4 w-[180px]">
                  {el.status ? (
                    <div className="border rounded-full bg-green-600 flex justify-center items-center text-white py-1 max-w-[100px]">
                      Enable
                    </div>
                  ) : (
                    <div className="border rounded-full bg-gray-200 flex justify-center items-center text-white py-1 max-w-[100px]">
                      Disable
                    </div>
                  )}
                </td>
                <td class="px-6 py-4 flex gap-3">
              <div
                className="bg-blue-700 p-[5px] rounded-md cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditMode(true);
                }}
              >
                <EditIcon />
              </div>
              <div className="bg-red-700 p-[5px] rounded-md cursor-pointer">
                <TrashIcon />
              </div>
          </td>
          </tr>
        </>
      ) : (
        <>
        <tr>
          <td>
            <div className="mt-6 ml-6 bg-gray-300 w-[50px] flex justify-center">{el.id}</div>
          </td>
        </tr>
        <tr>
          <td colSpan="6">
          <PackageForm
            textConFirm={`Edit`}
            onIsAddMode={setIsEditMode}
            oldPackage={el}
            key={el.id}
          />
          <hr/>
          </td>
        </tr>
        </>
      )}
    </>
  );
}
=======
import React from 'react'

export default function PackageItem() {
  return (
    <div>
        
    </div>
  )
}
>>>>>>> cdc4f7f5a96877e95800f897cb2b1974cae167c8
