import React from 'react'
import PackageContainer from '../features/packages/components/PackageContainer'
import PurchaseHistoryContainer from '../features/purchase-history/components/PurchaseHistoryContainer'
import AgencyContainer from '../features/agencyInformation/components/AgencyContainer'
import DashboardContainer from '../features/dashboard/components/DashboardContainer'
import PaymentContainer from '../features/agencyPayment/components/PaymentContainer'
import AdminContainer from '../features/adminInformation/AdminContainer'
import AgencyProfile from '../features/agencyInformation/components/AgencyProfile'

export default function AdminPage() {
  const dataAgent = [
    {id: 1, firstName: "John", lastName: "Doe", email: "j1@gmail.com", status: 1},
    {id: 2, firstName: "June", lastName: "Doe", email: "j2@gmail.com", status: 1},
    {id: 3, firstName: "Jane", lastName: "Doe", email: "j3@gmail.com", status: 0},
  ]

  const dataAdmin = [
    {id: 1, firstName: "John", lastName: "Doe", email: "admin1@gmail.com", status: 1},
    {id: 2, firstName: "Jane", lastName: "Doe", email: "admin2@gmail.com", status: 1},
    {id: 3, firstName: "June", lastName: "Doe", email: "admin3@gmail.com", status: 0},
  ]

  return (
    <div className='max-w-[1440px] mx-auto min-h-screen border flex'>
      <div className='w-1/4 border border-l'>

      </div>
      <div className='w-3/4 bg-[#F4F6FF] text-lg'>
        <PackageContainer />
        <PurchaseHistoryContainer />
        <DashboardContainer />
        <PaymentContainer />
        <AdminContainer data={dataAdmin} />
        <AgencyContainer data={dataAgent}/>
        <AgencyProfile />
      </div>
    </div>)
}
