import React from 'react'
import AdminContainer from '../features/adminInformation/components/AdminContainer'
import SidebarAdmin from '../components/SidebarAdmin'

export default function AdminListPage() {
  const dataAdmin = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "admin1@gmail.com",
      status: 1,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "admin2@gmail.com",
      status: 1,
    },
    {
      id: 3,
      firstName: "June",
      lastName: "Doe",
      email: "admin3@gmail.com",
      status: 0,
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex ">
      <SidebarAdmin />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <AdminContainer data={dataAdmin}/>
      </div>
    </div>
  )
}
