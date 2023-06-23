import React from 'react'
import InputForm from '../../../components/InputForm';
import InputErrorMessage from '../../../components/InputErrorMessage';
import { useState } from 'react';

export default function AnimityForm({
    textConFirm,
    onIsAddMode,
    oldAnimity,
}) {

    const initialInput = {
        name: oldAnimity?.name || ""
    };

    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

  return (
    <>
        {oldAnimity?
        <td className='pl-6 py-2' colSpan={2}> 
        <form className='flex flex-col gap-4 items-baseline'>
        <div>
            <InputForm
                labelName=""
                name="name"
                placeholder=""
                value={input.name}
                onChange={handleChangeInput}
                isInvalid={error.name}
            />
            {error.name && <InputErrorMessage message={error.name} />}
        </div>
        <div className='flex gap-4'>
            <button type='submit' className='p-1 min-w-[80px] text-white bg-blue-600 rounded-md w-fit'>Save</button>
            <button type='submit' className='p-1 min-w-[80px] text-white bg-red-700 rounded-md w-fit' onClick={() => onIsAddMode(false)}>Cancel</button>
        </div>
        </form></td>
        :
        <div className="bg-white rounded-md pt-6 pb-8 mt-0">
            <form className='flex flex-col gap-4'>
                <div>
                    <InputForm
                        labelName="สิ่งอำนวยความสะดวก"
                        name="name"
                        placeholder=""
                        value={input.name}
                        onChange={handleChangeInput}
                        isInvalid={error.name}
                    />
                    {error.name && <InputErrorMessage message={error.name} />}
                </div>
                <div className='flex gap-4'>
                    <button type='submit' className='p-1 min-w-[80px] text-white bg-blue-600 rounded-md w-fit'>Save</button>
                    <button type='submit' className='p-1 min-w-[80px] text-white bg-red-700 rounded-md w-fit' onClick={() => onIsAddMode(false)}>Cancel</button>
                </div>
            </form>
        </div>
        }
    </>
  )
}
