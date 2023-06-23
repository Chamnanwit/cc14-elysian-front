import React, { useState } from 'react'
import InputForm from '../../../components/InputForm'
import InputErrorMessage from '../../../components/InputErrorMessage';
import store from "../../../store";

export default function PackageForm({
    textConFirm,
    onIsAddMode,
    pricingPlanType,
    expirationType,
    lockedType,
    oldPackage,
}) {
    
  const initialInput = {
    planType: oldPackage?.planType || '',
    price: oldPackage?.price || '',
    name: oldPackage?.name || '',
    expiration: oldPackage?.expiration || '',
    limit: oldPackage?.limit || '',
    numberOfTop: oldPackage?.numberOfTop || '',
    locked: oldPackage?.locked || ''
  };
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(input)
    // const result = validatePackage(input);
    // if (result) {
    //     return setError(result);
    // }
    // setError({});
    if (!oldPackage) {
      await dispatch(createPricingPlanAsync(input)).unwrap();
      store.dispatch(pricingPlanAsync());  // สั่งให้ fetch post list ไหม่ หลัง กด ตกลง  โดยส่งไปบอก Store ให้ Store ไปบบอก component PostList
      onIsAddMode(false);
    } else if(oldPackage) {
    //   await dispatch(updatePricingPlanAsync(oldModel.id, input))
    //   store.dispatch(pricingPlanAsync());
    //   onIsAddMode(false);
    }
  };
  return (
    <form className='bg-white rounded-md px-6 pt-4' onSubmit={handleSubmitForm}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="planType" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">ประเภทแพ็คเกจ</label>
                <select id="planType" class="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="planType" onChange={handleChangeInput}>
                    <option disabled selected value>เลือกประเภท</option>
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
            <label htmlFor="expiration" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">รูปแบบแพ็คเกจ</label>
                <select id="expiration" class="border text-lg border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="expiration" onChange={handleChangeInput}>
                    <option disabled selected value>เลือกรูปแบบ</option>
                    {expirationType.map(el => (el.type === input.expiration)? <option selected key={el.id} value={el.type}>{el.thaiType}</option> : <option key={el.id} value={el.type}>{el.thaiType}</option>)}
                </select>
                <div className='h-0 pb-2'> 
                    {error.type && (<InputErrorMessage message={error.type} />)}
                </div>
            </div>
            <div>
                <div>
                    <InputForm
                        labelName="จำนวนประกาศแบบธรรมดา"
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
                        labelName="จำนวนประกาศแบบจัดอันดับ"
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
            <label htmlFor="locked" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">สถานะ</label>
                <select id="locked" class="border text-lg border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="locked" onChange={handleChangeInput}>
                    <option disabled selected value>เลือกสถานะ</option>
                    {lockedType.map(el => (el.type === input.locked)? <option selected key={el.id} value={el.type}>{el.thaiType}</option> : <option key={el.id} value={el.type}>{el.thaiType}</option>)}
                </select>
                <div className='h-0 pb-2'> 
                    {error.locked && (<InputErrorMessage message={error.locked} />)}
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