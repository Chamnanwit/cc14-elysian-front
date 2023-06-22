import React from "react";
import { useState } from "react";
import InputForm from "../../../components/InputForm";

export default function BasicInformationForm({
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
    <div className="rounded-md overflow-hidden flex flex-col">
      <div className="bg-c-blue3 text-white text-xl py-4 px-6">
        Basic Information
      </div>
      <form className=" bg-white px-6 py-4">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="type"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Plan Type
            </label>
            <select
              id="type"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="type"
            >
              <option disabled selected value>
                Choose type
              </option>
              <option value="1">Premium</option>
              <option value="2">Gold</option>
            </select>
            <div className="h-0 pb-2">
              {error.type && <InputErrorMessage message={error.type} />}
            </div>
          </div>
          <div>
            <label
              htmlFor="type"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Plan Type
            </label>
            <select
              id="type"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="type"
            >
              <option disabled selected value>
                Choose type
              </option>
              <option value="1">Premium</option>
              <option value="2">Gold</option>
            </select>
            <div className="h-0 pb-2">
              {error.type && <InputErrorMessage message={error.type} />}
            </div>
            </div>

            <div>
              <InputForm
                labelName="First name"
                name="firstName"
                placeholder=""
                value={input.firstName}
                onChange={handleChangeInput}
                isInvalid={error.firstName}
              />
              {error.firstName && (
                <InputErrorMessage message={error.firstName} />
              )}
            </div>
          <div>
            <div>
              <InputForm
                labelName="Last name"
                name="lastName"
                placeholder=""
                value={input.lastName}
                onChange={handleChangeInput}
                isInvalid={error.lastName}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="Last name"
                name="lastName"
                placeholder=""
                value={input.lastName}
                onChange={handleChangeInput}
                isInvalid={error.lastName}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="Last name"
                name="lastName"
                placeholder=""
                value={input.lastName}
                onChange={handleChangeInput}
                isInvalid={error.lastName}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="Last name"
                name="lastName"
                placeholder=""
                value={input.lastName}
                onChange={handleChangeInput}
                isInvalid={error.lastName}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="Last name"
                name="lastName"
                placeholder=""
                value={input.lastName}
                onChange={handleChangeInput}
                isInvalid={error.lastName}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="Last name"
                name="lastName"
                placeholder=""
                value={input.lastName}
                onChange={handleChangeInput}
                isInvalid={error.lastName}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="Last name"
                name="lastName"
                placeholder=""
                value={input.lastName}
                onChange={handleChangeInput}
                isInvalid={error.lastName}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="Last name"
                name="lastName"
                placeholder=""
                value={input.lastName}
                onChange={handleChangeInput}
                isInvalid={error.lastName}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>
          </div>
          <div>
            <div>
              <InputForm
                labelName="Last name"
                name="lastName"
                placeholder=""
                value={input.lastName}
                onChange={handleChangeInput}
                isInvalid={error.lastName}
              />
              {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Description</div>
          <textarea className="w-full rounded-md border-gray-300" rows="4" />
        </div>
      </form>
    </div>
  );
}
