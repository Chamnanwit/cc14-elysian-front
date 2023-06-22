import React from 'react'
import { useState } from 'react';
import InputErrorMessage from '../../../components/InputErrorMessage';
import InputForm from '../../../components/InputForm';

export default function AgencyProfileForm({
  textConFirm,
  onIsAddMode,
  oldProfile,
}) {
  const initialInput = {
    firstName: oldProfile?.firstName,
    lastName: oldProfile?.lastName,
    email: oldProfile?.email,
    taxId: oldProfile?.taxId,
    phone: oldProfile?.phone,

  };

  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <form className='mt-6'>
      <div className='flex justify-center'>
        <div className="bg-blue-600 rounded-full w-[90px] h-[90px] mb-6 border ring-offset-2 ring-2 cursor-pointer"></div>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <div>
                <InputForm
                    labelName="First name"
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
                <InputForm
                    labelName="Tax id"
                    name="taxId"
                    placeholder=""
                    value={input.taxId}
                    disabled={true}
                />
                {error.taxId && <InputErrorMessage message={error.taxId} />}
            </div>
            <div>
                <InputForm
                    labelName="Email"
                    name="email"
                    placeholder=""
                    value={input.email}
                    disabled={true}
                />
                {error.email && <InputErrorMessage message={error.email} />}
            </div>
            <div>
                <InputForm
                    labelName="Phone"
                    name="phone"
                    placeholder=""
                    value={input.phone}
                    disabled={true}
                />
                {error.phone && <InputErrorMessage message={error.phone} />}
            </div>
        </div>
        <div>
            <button type='submit' className='p-2 min-w-[80px] text-white bg-blue-600 rounded-sm w-fit'>Save</button>
        </div>
    </form>
  )
}
