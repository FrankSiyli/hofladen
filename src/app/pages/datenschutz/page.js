"use client"
import React from 'react'
import ArrowLeftSvg from '../../svgCollection/ArrowLeftSvg'
import Link from 'next/link'

const page = () => {
  return (
    <>
        <Link href="/"><ArrowLeftSvg/></Link>
      <div className='mt-32 flex justify-center border m-5 bg-appGrey/70 p-5 rounded-sm  text-appBlue'>
      <h2 className='text-2xl'>Datenschutz</h2></div>
    </>
  )
}

export default page
