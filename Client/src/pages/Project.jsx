import React from 'react'
import CallToAction from '../components/CallToAction'

export default function Project() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-400'>My all project is on Web developer which is built on MERN Stack and built on HTML, CSS, and JavaScript!</p>
      <CallToAction/>
    </div>
  )
}
