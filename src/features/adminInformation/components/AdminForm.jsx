import React from "react";
import { useState } from "react";
import InputErrorMessage from "../../../components/InputErrorMessage";
import InputForm from "../../../components/InputForm";
import validateRegisterAdmin from '../validators/validate-admin';
import { registerAdminAsync } from "../../auth/slice/authSlice";
import { useDispatch } from "react-redux";
import { adminInformationAsync } from "../slice/admin-slice";

export default function AdminForm({
  textConFirm,
  onIsAddMode,
}) {
  const initialInput = {
    firstName: "",
    lastName: "",
    email: "",
    taxId: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch()
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();   
    const result = validateRegisterAdmin(input);
    if (result) {
        return setError(result);
    }
    setError({});
    await dispatch(registerAdminAsync({...input, role: "ADMIN", locked: false})).unwrap();
    await dispatch(adminInformationAsync()).unwrap();
    onIsAddMode(false);
  };

  return (
    <form className="bg-white rounded-md px-8 py-8" onSubmit={handleSubmitForm}>
      <div className="grid gap-8 mb-6 md:grid-cols-2">
        <div>
          <div>
            <InputForm
              labelName="ชื่อ"
              name="firstName"
              placeholder=""
              value={input.firstName}
              onChange={handleChangeInput}
              isInvalid={error.firstName}
            />
            {error.firstName && <InputErrorMessage message={error.firstName} />}
          </div>
        </div>
        <div>
          <div>
            <InputForm
              labelName="นามสกุล"
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
          <InputForm
            labelName="อีเมล"
            name="email"
            placeholder=""
            value={input.email}
            onChange={handleChangeInput}
            isInvalid={error.email}
          />
          {error.email && <InputErrorMessage message={error.email} />}
        </div>
        <div>
          <InputForm
            labelName="เลขบัตรประชาชน"
            name="taxId"
            placeholder=""
            value={input.taxId}
            onChange={handleChangeInput}
            isInvalid={error.taxId}
          />
          {error.taxId && <InputErrorMessage message={error.taxId} />}
        </div>
        <div>
          <InputForm
            labelName="เบอร์โทรศัพท์"
            name="phoneNumber"
            placeholder=""
            value={input.phoneNumber}
            onChange={handleChangeInput}
            isInvalid={error.phoneNumber}
          />
          {error.phoneNumber && <InputErrorMessage message={error.phoneNumber} />}
        </div>
      </div>
      <div className="grid gap-8 mb-6 md:grid-cols-2">
        <div>
          <div>
            <InputForm
              labelName="รหัสผ่าน"
              name="password"
              placeholder=""
              value={input.password}
              onChange={handleChangeInput}
              isInvalid={error.password}
            />
            {error.password && <InputErrorMessage message={error.password} />}
          </div>
        </div>
        <div>
          <div>
            <InputForm
              labelName="ยืนยันรหัสผ่าน"
              name="confirmPassword"
              placeholder=""
              value={input.confirmPassword}
              onChange={handleChangeInput}
              isInvalid={error.confirmPassword}
            />
            {error.confirmPassword && <InputErrorMessage message={error.confirmPassword} />}
          </div>
        </div>
      </div>
      <div className='flex gap-4'>
        <button type='submit' className='p-2 min-w-[80px] text-white bg-blue-600 rounded-md w-fit'>Save</button>
        <button type='submit' className='p-2 min-w-[80px] text-white bg-red-700 rounded-md w-fit' onClick={() => onIsAddMode(false)}>Cancel</button>
      </div>
    </form>
  );
}
