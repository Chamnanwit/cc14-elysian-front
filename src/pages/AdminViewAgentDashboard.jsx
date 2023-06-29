import React from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import AgencyProfile from '../features/agencyInformation/components/AgencyProfile'

export default function AdminViewAgentDashboard() {

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex">
      <SidebarAdmin />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <AgencyProfile/>
      </div>
    </div>
  )
}
