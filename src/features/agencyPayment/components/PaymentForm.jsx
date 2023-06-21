import React from 'react'
import InputForm from '../../../components/InputForm'
import InputErrorMessage from '../../../components/InputErrorMessage'
import { useState } from 'react';

export default function PaymentForm({
    textConFirm,
    onIsAddMode,
    oldPayment,
}) {
    const initialInput = {
        key: ''
      };
      const [input, setInput] = useState(initialInput);
      const [error, setError] = useState({});
      const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };
  return (
    <form className='flex flex-col gap-6'>
        <div>
            <InputForm
                labelName="Name"
                name="currencyRate"
                placeholder=""
                value={input.key}
                onChange={handleChangeInput}
                isInvalid={error.price}
            />
            {error.price && <InputErrorMessage message={error.price} />}
        </div>
        <div>
            <InputForm
                labelName="Name"
                name="currencyRate"
                placeholder=""
                value={input.key}
                onChange={handleChangeInput}
                isInvalid={error.price}
            />
            {error.price && <InputErrorMessage message={error.price} />}
        </div>
        <div>
            <InputForm
                labelName="Name"
                name="currencyRate"
                placeholder=""
                value={input.key}
                onChange={handleChangeInput}
                isInvalid={error.price}
            />
            {error.price && <InputErrorMessage message={error.price} />}
        </div>
        <div className='flex gap-4'>
            <button type='submit' className='p-2 min-w-[100px] text-white bg-blue-600 rounded-sm w-fit'>Update</button>
        </div>
    </form>
  )
}
