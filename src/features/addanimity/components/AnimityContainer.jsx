import React from 'react'
import HeaderAdmin from '../../../components/HeaderAdmin'
import InputForm from '../../../components/InputForm'
import AnimityItem from './AnimityItem'
import { useState } from 'react'
import AnimityForm from './AnimityForm'

export default function AnimityContainer() {
    const [isAddModeROOM, setIsAddModeROOM] = useState(false)
    const [isAddModeCOMMON, setIsAddModeCOMMON] = useState(false)
    const data = [
        {id: 1, name: "เครื่องปรับอากาศ", type: "ROOM"},
        {id: 2, name: "TV", type: "ROOM"},
        {id: 3, name: "ตู้เย็น", type: "ROOM"},
        {id: 4, name: "เครื่องทำน้ำอุ่น", type: "ROOM"},
        {id: 5, name: "เครื่องซักผ้า", type: "ROOM"},
        {id: 6, name: "สระว่ายน้ำ", type: "COMMON"},
        {id: 7, name: "ฟิตเนส", type: "COMMON"},
        {id: 8, name: "สวน", type: "COMMON"},
        {id: 9, name: "ครัว", type: "COMMON"},
        {id: 10, name: "Co-working Space", type: "COMMON"},
    ]

    const dataRoom = data.filter(el => el.type==="ROOM")
    const dataCommon = data.filter(el => el.type==="COMMON")

  return (
    <>
        <HeaderAdmin topic="สิ่งอำนวยความสะดวก" />
        <div className="bg-white rounded-md m-8 px-8 pt-6 pb-8 mt-0">
        <div className="flex items-baseline gap-4 justify-between mb-6">
          <div className='underline'>ภายในห้อง</div>
          <div className="flex items-baseline gap-4">
            <div>Search:</div>
            <div className="100px text-md"><InputForm /></div>
          </div>
        </div>
        {isAddModeROOM? <div><AnimityForm textConFirm={`Add`} onIsAddMode={setIsAddModeROOM} type="ROOM"/></div> : <button type='button' className='p-2 min-w-[ุ100px] mb-8 text-white bg-blue-600 rounded-md w-fit' onClick={() => setIsAddModeROOM(true)}>+ เพิ่ม</button>}
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg text-lg">
          <table class="w-full text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-5">
                  SN
                </th>
                <th scope="col" class="px-6 py-5">
                  Aminity
                </th>
                <th scope="col" class="px-6 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dataRoom.map((el) => (
                <AnimityItem key={el.id} el={el} />
              ))}
            </tbody>
          </table>
        </div>
        </div>
        <div className="bg-white rounded-md m-8 px-8 pt-6 pb-8 mt-0">
        <div className="flex items-baseline gap-4 justify-between mb-6">
          <div className='underline'>ส่วนกลาง</div>
          <div className="flex items-baseline gap-4">
            <div>Search:</div>
            <div className="100px text-md"><InputForm /></div>
          </div>
        </div>
        {isAddModeCOMMON? <div><AnimityForm textConFirm={`Add`} onIsAddMode={setIsAddModeCOMMON} type="ROOM"/></div> : <button type='button' className='p-2 min-w-[100px] mb-8 text-white bg-blue-600 rounded-md w-fit' onClick={() => setIsAddModeCOMMON(true)}>+ เพิ่ม</button>}
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg text-lg">
          <table class="w-full text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-5">
                  SN
                </th>
                <th scope="col" class="px-6 py-5">
                  Aminity
                </th>
                <th scope="col" class="px-6 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dataCommon.map((el) => (
                <AnimityItem key={el.id} el={el} />
              ))}
            </tbody>
          </table>
        </div>
        </div>
    </>
  )
}
