import React from 'react'
import Image from 'next/image';
import propertyImg from '../public/projects/reward-app.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Reward = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={propertyImg}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'> Reward App</h2>
        <h3>React JS / Bootstrap / Antd</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
          This app was built using React JS. It has two compactment
          the admin user, and the client user. The admin user is able 
          to see and view each client transaction deatils. While the
          client is able to create and run a campaign for her business.
          Also, there is a chart that shows amount spent, distribution
          and reward. 
          The admin and client has the ability to see successful and 
          failed transaction report as well.
        </p>
        <a
          href='#'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8'>Code</button>
        </a>
        <a
          href='https://reward-engine.terragonbase.com/#/user/signin'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4'>Demo</button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> React JS
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Bootstrap
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Antd
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Javascript
            </p>
          </div>
        </div>
      </div>
      <Link href='/#projects'>
        <p className='underline cursor-pointer bg-blue-700 rounded w-[50px] text-center text-white shadow-xl shadow-blue-600'>Back</p>
      </Link>
    </div>
  </div>
  )
}

export default Reward