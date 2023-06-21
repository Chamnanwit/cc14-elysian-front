import React, { useState } from 'react'
import InputForm from '../../../components/InputForm'
import InputErrorMessage from '../../../components/InputErrorMessage';

export default function PackageForm({
    textConFirm,
    onIsAddMode,
    oldPackage,
}) {
  const initialInput = {
    type: oldPackage?.type || '',
    price: oldPackage?.price || '',
    name: oldPackage?.name || '',
    expiration: oldPackage?.expiration || '',
    numberOfProperty: oldPackage?.numberOfProperty || '',
    numberOfTopProperty: oldPackage?.numberOfTopProperty || '',
    status: oldPackage?.status || ''
  };
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <form className='bg-white rounded-md px-6 pt-4'>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plan Type</label>
                <select id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="type">
                    <option disabled selected value>Choose type</option>
                    <option value="1">Premium</option>
                    <option value="2">Gold</option>
                </select>
                <div className='h-0 pb-2'> 
                    {error.type && (<InputErrorMessage message={error.type} />)}
                </div>
            </div>
            <div>
            <div>
                <InputForm
                    labelName="Plan Price"
                    name="price"
                    placeholder=""
                    value={input.price}
                    onChange={handleChangeInput}
                    isInvalid={error.price}
                />
                {error.price && <InputErrorMessage message={error.price} />}
                </div>
            </div>
            <div>
                <InputForm
                    labelName="Plan Name"
                    name="name"
                    placeholder=""
                    value={input.name}
                    onChange={handleChangeInput}
                    isInvalid={error.name}
                />
                {error.name && <InputErrorMessage message={error.name} />}
            </div>
            <div>
            <label htmlFor="expiration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiration</label>
                <select id="expiration" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="expiration">
                    <option disabled selected value>Choose type</option>
                    <option value="1">Monthly</option>
                    <option value="2">Yearly</option>
                    <option value="3">Lifetime</option>
                </select>
                <div className='h-0 pb-2'> 
                    {error.type && (<InputErrorMessage message={error.type} />)}
                </div>
            </div>
            <div>
                <div>
                    <InputForm
                        labelName="Number of property"
                        name="numberOfProperty"
                        placeholder=""
                        value={input.numberOfProperty}
                        onChange={handleChangeInput}
                        isInvalid={error.numberOfProperty}
                    />
                    {error.numberOfProperty && <InputErrorMessage message={error.numberOfProperty} />}
                </div>
            </div>
            <div>
                <div>
                    <InputForm
                        labelName="Number of top property"
                        name="numberOfTopProperty"
                        placeholder=""
                        value={input.numberOfTopProperty}
                        onChange={handleChangeInput}
                        isInvalid={error.numberOfTopProperty}
                    />
                    {error.numberOfTopProperty && <InputErrorMessage message={error.numberOfTopProperty} />}
                </div>
            </div>
            <div>
            <label htmlFor="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="status">
                    <option disabled selected value>Choose status</option>
                    <option value="US">Enable</option>
                    <option value="US">Disable</option>
                </select>
                <div className='h-0 pb-2'> 
                    {error.type && (<InputErrorMessage message={error.type} />)}
                </div>
            </div>
        </div>
        <div className='flex gap-4'>
            <button type='submit' className='p-2 min-w-[80px] text-white bg-blue-600 rounded-sm w-fit'>Save</button>
            <button type='submit' className='p-2 min-w-[80px] text-black bg-orange-200 rounded-sm w-fit' onClick={() => onIsAddMode(false)}>Cancel</button>
        </div>
        <div className='bg-white rounded-md px-6 pt-8'></div>
    </form>
  )
}
