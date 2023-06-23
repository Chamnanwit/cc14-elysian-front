import React, { useState } from 'react'
import InputForm from '../../../components/InputForm'
import InputErrorMessage from '../../../components/InputErrorMessage';

export default function PackageForm({
    textConFirm,
    onIsAddMode,
    oldPackage,
}) {
    const pricingPlanType = [
        { id: 1, type: "FREE" },
        { id: 2, type: "GOLD" },
        { id: 3, type: "PREMIUM" },
    ];

    const expirationType = [
        {id: 1, type: "WEEKLY", thaiType: "รายสัปดาห์"},
        {id: 2, type: "MONTHLY", thaiType: "รายเดือน"},
    ]

    const statusType = [
        {id: 1, type: "ENABLE"},
        {id: 2, type: "DISABLE"},
    ]
  const initialInput = {
    planType: oldPackage?.planType || '',
    price: oldPackage?.price || '',
    name: oldPackage?.name || '',
    expiration: oldPackage?.expiration || '',
    limit: oldPackage?.limit || '',
    numberOfTop: oldPackage?.numberOfTop || '',
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
                <label htmlFor="planType" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">ประเภทแพ็คเกจ</label>
                <select id="planType" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="planType">
                    <option disabled selected value>Choose type</option>
                    {pricingPlanType.map(el => (el.type === input.planType)? <option selected key={el.id} value={el.type}>{el.type}</option> : <option key={el.id} value={el.type}>{el.type}</option>)}
                </select>
                <div className='h-0 pb-2'> 
                    {error.type && (<InputErrorMessage message={error.type} />)}
                </div>
            </div>
            <div>
                <InputForm
                    labelName="ชื่อแพ็คเกจ"
                    name="name"
                    placeholder=""
                    value={input.name}
                    onChange={handleChangeInput}
                    isInvalid={error.name}
                />
                {error.name && <InputErrorMessage message={error.name} />}
            </div>
            <div>
                <div>
                <InputForm
                    labelName="ราคา"
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
            <label htmlFor="expiration" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">ระยะเวลา</label>
                <select id="expiration" class="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="expiration">
                    <option disabled selected value>Choose type</option>
                    {expirationType.map(el => (el.type === input.expiration)? <option selected key={el.id} value={el.type}>{el.thaiType}</option> : <option key={el.id} value={el.type}>{el.thaiType}</option>)}
                </select>
                <div className='h-0 pb-2'> 
                    {error.type && (<InputErrorMessage message={error.type} />)}
                </div>
            </div>
            <div>
                <div>
                    <InputForm
                        labelName="Number of property"
                        name="limit"
                        placeholder=""
                        value={input.limit}
                        onChange={handleChangeInput}
                        isInvalid={error.limit}
                    />
                    {error.limit && <InputErrorMessage message={error.limit} />}
                </div>
            </div>
            <div>
                <div>
                    <InputForm
                        labelName="Number of top property"
                        name="numberOfTop"
                        placeholder=""
                        value={input.numberOfTop}
                        onChange={handleChangeInput}
                        isInvalid={error.numberOfTop}
                    />
                    {error.numberOfTop && <InputErrorMessage message={error.numberOfTop} />}
                </div>
            </div>
            <div>
            <label htmlFor="status" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">สถานะ</label>
                <select id="status" class="bg-gray-50 border text-lg border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="status">
                    <option disabled selected value>Choose status</option>
                    {statusType.map(el => (el.type === input.status)? <option selected key={el.id} value={el.type}>{el.type}</option> : <option key={el.id} value={el.type}>{el.type}</option>)}
                </select>
                <div className='h-0 pb-2'> 
                    {error.type && (<InputErrorMessage message={error.type} />)}
                </div>
            </div>
        </div>
        <div className='flex gap-4'>
            <button type='submit' className='p-2 min-w-[80px] text-white bg-blue-600 rounded-md w-fit'>Save</button>
            <button type='submit' className='p-2 min-w-[80px] text-white bg-red-700 rounded-md w-fit' onClick={() => onIsAddMode(false)}>Cancel</button>
        </div>
        <div className='bg-white rounded-md px-6 pt-8'></div>
    </form>
  )
}
