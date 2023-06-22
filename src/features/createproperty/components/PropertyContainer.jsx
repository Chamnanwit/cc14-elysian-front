import React from 'react'
import HeaderAgent from '../../../components/HeaderAgent'
import BasicInformationForm from './BasicInformationForm'
import PropertyImageForm from './PropertyImageForm'
import AminityForm from './AminityForm'

export default function PropertyContainer() {
  return (
    <>
        <HeaderAgent topic="Create Property"/>
        <div className='flex flex-col gap-6 m-8 mt-0'>
            <BasicInformationForm />
            <PropertyImageForm />
            <AminityForm />
        </div>
    </>
  )
}