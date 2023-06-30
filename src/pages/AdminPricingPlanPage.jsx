import React from 'react'
import PackageContainer from '../features/packages/components/PackageContainer'
import SidebarAdmin from '../components/SidebarAdmin'

export default function AdminPricingPlanPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex ">
      <SidebarAdmin />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <PackageContainer />
      </div>
    </div>
  )
}
