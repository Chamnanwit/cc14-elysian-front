import React from 'react'
import HeaderAdmin from '../../../components/HeaderAdmin'
import DashboardItem from './DashboardItem'
import { FaShoppingCart} from 'react-icons/fa';
import { MdOutlineAttachMoney,} from 'react-icons/md';
import { BsFillBuildingsFill, BsPeopleFill } from 'react-icons/bs';

export default function DashboardContainer() {
  return (
    <>
        <HeaderAdmin topic="Dashboard" />
        <div className='flex flex-col gap-6 m-8 mt-0'>
            <div className='text-2xl font-medium'>Today</div>
            <div className=" grid grid-cols-4 gap-6 text-base">
                <DashboardItem bgColor="blue" title="Total Purchase"><FaShoppingCart fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="blue" title="Total Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="blue" title="Pending Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="blue" title="New User"><BsPeopleFill fill='#ffffff' size={28}/></DashboardItem>
            </div>

            <div className='text-2xl font-medium'>This month</div>
            <div className=" grid grid-cols-4 gap-6 text-base">
                <DashboardItem bgColor="green" title="Total Purchase"><FaShoppingCart fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="green" title="Total Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="green" title="Pending Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="green" title="New User"><BsPeopleFill fill='#ffffff' size={28}/></DashboardItem>
            </div>

            <div className='text-2xl font-medium'>This year</div>
            <div className=" grid grid-cols-4 gap-6 text-base">
                <DashboardItem bgColor="blue" title="Total Purchase"><FaShoppingCart fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="blue" title="Total Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="blue" title="Pending Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="blue" title="New User"><BsPeopleFill fill='#ffffff' size={28}/></DashboardItem>
            </div>

            <div className='text-2xl font-medium'>Total</div>
            <div className=" grid grid-cols-4 gap-6 text-base">
                <DashboardItem bgColor="green" title="Total Purchase"><FaShoppingCart fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="green" title="Total Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="green" title="Pending Earning"><MdOutlineAttachMoney fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="green" title="New User"><BsPeopleFill fill='#ffffff' size={28}/></DashboardItem>
            </div>

            <div className='text-2xl font-medium'>Property</div>
            <div className='grid grid-cols-4 gap-6 text-base'>
                <DashboardItem bgColor="blue" title="Own Property"><BsFillBuildingsFill fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="blue" title="Total Property"><BsFillBuildingsFill fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="blue" title="Total Property"><BsFillBuildingsFill fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="orange" title="Awaiting Property"><BsFillBuildingsFill fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="red" title="Awaiting Property"><BsFillBuildingsFill fill='#ffffff' size={28}/></DashboardItem>
                <DashboardItem bgColor="blue" title="Total Agent"><BsFillBuildingsFill fill='#ffffff' size={28}/></DashboardItem>
            </div>
        </div>
        
    </>
  )
}


