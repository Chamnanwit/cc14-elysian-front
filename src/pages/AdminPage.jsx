import React from 'react'
import PackageContainer from '../features/packages/components/PackageContainer'
import PurchaseHistoryContainer from '../features/purchase-history/components/PurchaseHistoryContainer'
import AgencyContainer from '../features/agencyInformation/components/AgencyContainer'
import DashboardContainer from '../features/dashboard/components/DashboardContainer'

export default function AdminPage() {
  const dataActive = [
    {id: 1, name: "John", email: "j1@gmail.com", status: 1},
    {id: 2, name: "Jane", email: "j2@gmail.com", status: 1},
    {id: 3, name: "June", email: "j3@gmail.com", status: 1},
  ]

  const dataInActive = [
    {id: 1, name: "John", email: "j1@gmail.com", status: 0},
    {id: 2, name: "Jane", email: "j2@gmail.com", status: 0},
    {id: 3, name: "June", email: "j3@gmail.com", status: 0},
  ]
  return (
    <div className='max-w-[1440px] mx-auto min-h-screen border flex'>
      <div className='w-1/4 border border-l'>

      </div>
      <div className='w-3/4 bg-[#F4F6FF] text-lg'>
        <PackageContainer />
        <PurchaseHistoryContainer />
        <AgencyContainer data={dataActive}/>
        <AgencyContainer data={dataInActive}/>
        <DashboardContainer />
      </div>
    </div>)
}
