import React, { useState } from "react";
import { TrashIcon } from "../../../icons";
import { HiEye } from "react-icons/hi";
import AgencyProfile from "./AgencyProfile";
import { agentAsync, deleteagentAsync, updateAgentAsync } from "../slice/adminviewagency-slice";
import { useDispatch } from "react-redux";

export default function AgentItem({ el }) {

  const dispatch = useDispatch();
  const [isViewMode, setIsViewMode] = useState(false);
  const [locked, setStatus] = useState(el.locked);

  const handleClickChangeStatus = async (e) => {
    await dispatch(updateAgentAsync({id:el.id, locked: !locked})).unwrap();
    await dispatch(agentAsync()).unwrap();
    setStatus(!locked);
};

  const handleClickDeleteBox = async () => {
    await dispatch(deleteagentAsync(el.id)).unwrap();
    await dispatch(agentAsync()).unwrap();
  };
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {el.id}
        </th>
        <td class="px-6 py-4">
          {el.firstName} {el.lastName}
        </td>
        <td class="px-6 py-4">{el.email}</td>
        <td class="px-6 py-4">
          <label class="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value={locked}
                className="sr-only peer"
                checked={locked}
                onChange={handleClickChangeStatus}
              />
            <div className="w-11 h-6 bg-red-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 tra"></div>
          </label>
        </td>

        <td class="px-6 py-4 flex gap-3">
          <div
            className="bg-blue-700 p-[7px] rounded-md cursor-pointer flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              setIsViewMode(true);
            }}
          >
            <HiEye fill="#ffffff" />
          </div>
          <div className="bg-red-700 p-[5px] rounded-md cursor-pointer" onClick={handleClickDeleteBox}>
            <TrashIcon />
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={5}>
          {isViewMode ? (
            <>
              <AgencyProfile el={el} />
            </>
          ) : (
            <></>
          )}
        </td>
      </tr>
    </>
  );
}
