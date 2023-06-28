import React from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import AgencyProfile from '../features/agencyInformation/components/AgencyProfile'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { agentByIdAsync } from '../features/agencyInformation/slice/adminviewagency-slice';
import { useNavigate } from 'react-router-dom';

export default function AdminViewAgentDashboard() {
  const dispatch = useDispatch(); /// ประกาศเพื่อดึงค่ามาใช้
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(agentByIdAsync(id)); /// เอามาจาก slice
  }, [id]);

  const userDetails = useSelector((state) => state?.adminViewAgent?.agentList);

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex">
      <SidebarAdmin />
      <div className="w-3/4 flex flex-col bg-[#F4F6FF] text-lg border-r">
        <AgencyProfile el={userDetails}/>
      </div>
    </div>
  )
}
