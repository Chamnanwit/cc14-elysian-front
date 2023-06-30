import React from 'react'
import AgencyContainer from '../features/agencyInformation/components/AgencyContainer'
import SidebarAdmin from '../components/SidebarAdmin'

export default function AdminViewAgentPage() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex ">
      <SidebarAdmin />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <AgencyContainer />
      </div>
    </div>
  )
}
