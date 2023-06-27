import React from 'react'
import InputForm from '../../../components/InputForm';
import InputErrorMessage from '../../../components/InputErrorMessage';
import { useState } from 'react';
import validateAminity from '../validators/validate-animity';
import { animityAsync, createAnimityAsync, updateAnimityAsync } from '../slice/aminity-slice';
import { useDispatch } from 'react-redux';

export default function AnimityForm({
    textConFirm,
    onIsAddMode,
    oldAnimity,
    type
}) {

    const initialInput = {
        name: oldAnimity?.name || ""
    };

    const dispatch = useDispatch()
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const result = validateAminity(input);
        if (result) {
            return setError(result);
        }
        setError({});
        if (!oldAnimity) {
            if(type==="ROOM") {
                await dispatch(createAnimityAsync({...input, type: "ROOM"})).unwrap();
                await dispatch(animityAsync());
            }

            if(type==="COMMON") {
                await dispatch(createAnimityAsync({...input, type: "COMMON"})).unwrap();
                await dispatch(animityAsync());
            }
            onIsAddMode(false);
        } else if(oldAnimity) {
            if(type==="ROOM") {
                await dispatch(updateAnimityAsync({id:oldAnimity.id, ...input, type: "ROOM"})).unwrap();
                await dispatch(animityAsync());
            }

            if(type==="COMMON") {
                await dispatch(updateAnimityAsync({id:oldAnimity.id, ...input, type: "COMMON"})).unwrap();
                await dispatch(animityAsync());
            }
            onIsAddMode(false);
        }
      };

  return (
    <>
        {oldAnimity?
        <td className='pl-6' colSpan={2}> 
        <form className='flex gap-[50px] items-baseline' onSubmit={handleSubmitForm}>
            <div className='h-[68px] pt-1 w-[350px]'>
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
        <div className="bg-white rounded-md pb-8 mt-0">
            <form className='flex gap-4 items-baseline' onSubmit={handleSubmitForm}>
                <p>สิ่งอำนวยความสะดวก:</p>
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
            </form>
        </div>
        }
    </>
  )
}
