import Image from 'next/image'
import React from 'react'
import PRD from '../public/skills/html.png'
import CSS from '../public/skills/css.png'
import Angular from '../public/skills/logo4.png'
import REACT from '../public/skills/react.png'
import Boot from '../public/skills/bootstrap5.jpeg'
import Tail from '../public/skills/tailwind.png'
import GitHub from '../public/skills/github1.png'
import Postman from '../public/skills/channels4_profile.jpg'
import Next from '../public/skills/nextjs.png'
import JS from '../public/skills/javascript.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
       <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
          <h2 className='py-4'>What I Can Do</h2>
          <div  className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={PRD}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                   </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={CSS}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                   </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={Tail}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                   </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={Boot}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>Bootstrap</h3>
                   </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={REACT}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>REACT</h3>
                   </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={Next}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>NEXT</h3>
                   </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={JS}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>JavaScript</h3>
                   </div>
                </div>
            </div>

            {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={Angular}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>Angular</h3>
                   </div>
                </div>
            </div> */}

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={GitHub}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>GitHub</h3>
                   </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                   <div className='m-auto'>
                    <Image
                    src={Postman}
                    alt='PRD'
                    width={64}
                    height={64}
                    />
                   </div>
                   <div className='flex flex-col items-center justify-center'>
                    <h3>PostMan</h3>
                   </div>
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Skills