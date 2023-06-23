import React, { useState } from 'react'
import PackageItem from './PackageItem'
import PackageForm from './PackageForm'
import HeaderAdmin from '../../../components/HeaderAdmin'
import InputForm from '../../../components/InputForm'

export default function PackageContainer() {
    const [isAddMode, setIsAddMode] = useState(false)
    const data = [
        {id: 1, planType: "FREE", name: "Free", price: 0, expiration: "WEEKLY", limit: 5, numberOfTop: 0, status: "ENABLE"},
        {id: 2, planType: "GOLD", name: "Gold", price: 49.99, expiration: "MONTHLY", limit: 20, numberOfTop: 5, status: "ENABLE"},
        {id: 3, planType: "PREMIUM", name: "Premium", price: 99.99, expiration: "WEEKLY", limit: 50, numberOfTop: 10, status: "DISABLE"},
    ]
  return (
        <>
            <HeaderAdmin topic="แพ็คเกจ"/>
                {isAddMode? <div className='m-8 mt-0'><PackageForm textConFirm={`Add`} onIsAddMode={setIsAddMode} /></div> : <button type='button' className='mx-8 p-2 min-w-[80px] mb-8 text-white bg-blue-600 rounded-sm w-fit' onClick={() => setIsAddMode(true)}>+ เพิ่ม</button>}
                <div className="bg-white rounded-md m-8 px-8 pt-6 mt-0">
                    <div className="flex items-baseline gap-4 justify-end mb-6">
                        <div>Search:</div>
                        <div className="100px text-md"><InputForm /></div>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg text-lg">
                    <table class="w-full text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-5">
                                SN
                                </th>
                                <th scope="col" class="px-6 py-5">
                                Plan Name
                                </th>
                                <th scope="col" class="px-6 py-5">
                                Price
                                </th>
                                <th scope="col" class="px-6 py-5">
                                Expiration
                                </th>
                                <th scope="col" class="px-6 py-5">
                                Status
                                </th>
                                <th scope="col" class="px-6 py-5">
                                Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.map( el => <PackageItem key={el.id} el={el}/>)}
                        </tbody>
                    </table>
                    </div>
                </div>
        </>
  )
}
