import React from 'react'
import HeaderAdmin from '../../../components/HeaderAdmin'
import InputForm from '../../../components/InputForm'
import InputErrorMessage from '../../../components/InputErrorMessage'
import PaymentForm from './PaymentForm'

export default function PaymentContainer() {
  return (
    <>
      <HeaderAdmin topic="วิธีการจ่ายเงิน"/>
        <div className='flex gap-6 m-8 mt-0'>
          <div className='flex flex-col w-1/4'>
            <div className='py-2 px-6 bg-blue-600 rounded-md text-white'>Stripe</div>
          </div>
          <div className='w-3/4 border rounded-lg py-4 px-6'>
            <PaymentForm />
          </div>
          
        </div>
    </>
    )
}