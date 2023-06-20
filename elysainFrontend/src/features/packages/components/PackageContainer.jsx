import React, { useState } from 'react'
import PackageItem from './PackageItem'
import PackageForm from './PackageForm'
import HeaderAdmin from '../../../components/HeaderAdmin'

export default function PackageContainer() {
    const [isAddMode, setIsAddMode] = useState(false)
    const data = [
        {id: 1, name: "Free", price: 0, expiration: "Monthly", status: 1},
        {id: 2, name: "Gold", price: 49.99, expiration: "yearly", status: 1},
        {id: 3, name: "Premium", price: 99.99, expiration: "Monthly", status: 1},
    ]
  return (
        <>
            <HeaderAdmin topic="Pricing Plan"/>
                {isAddMode? <div className='m-8'><PackageForm textConFirm={`Add`} onIsAddMode={setIsAddMode} /></div> : <button type='button' className='mx-8 p-2 min-w-[120px] my-8 text-white bg-blue-600 rounded-sm w-fit' onClick={() => setIsAddMode(true)}>+ Add New</button>}
                <div className="bg-white rounded-md m-8 p-8 mt-0">
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
