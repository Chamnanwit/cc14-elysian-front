import React from 'react'
import PackageContainer from '../features/packages/components/PackageContainer'
import PurchaseHistoryContainer from '../features/purchase-history/components/PurchaseHistoryContainer'

export default function AdminPage() {
  return (
    <div className='max-w-[1440px] mx-auto min-h-screen border flex'>
      <div className='w-1/4 border border-l'>

      </div>
      <div className='w-3/4 bg-[#F4F6FF] text-lg'>
        <PackageContainer />
        <PurchaseHistoryContainer />
      </div>
    </div>)
}
