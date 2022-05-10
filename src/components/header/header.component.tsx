import Image from 'next/image'
import React from 'react'
import mobiles from 'assets/images/image-mockups.png';
import pattern from 'assets/images/bg-intro-desktop.svg';

interface Props  {}
const Header:React.FC<Props> = () => {
  return (
    <section className='relative flex sm:flex-row flex-col-reverse justify-between  items-center w-full min-h-[100vh] pb-10 sm:h-[80vh] overflow-hidden'>
        <div className='sm:w-[400px] w-11/12 xl:ml-40 md:ml-20 sm:ml-10 text-center sm:text-left'>
            <h1 className='sm:text-5xl text-3xl text-[#2d314d]'>Next generation digital banking</h1>
            <p className='sm:my-10 my-5 text-[#9698a6]'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button className=' bg-gradient-to-r from-[#31d35c] to-[#2bb7da] w-[175px] h-[45px] text-white rounded-full'>Request Invite</button>
        </div>
        <section className='sm:w-1/2 sm:absolute relative right-0 sm:top-[-150px] top-10'>
            <div className='relative w-full'>
                  <div className='absolute sm:w-[130%] w-[150vw] sm:h-[100vh] h-[70vh] sm:top-[-100px] top-[-300px] right-[50%] sm:right-[-250px] translate-x-[50%] sm:translate-x-0'>
                      <Image src={pattern} alt="pattern" layout='fill' className=' object-contain w-full h-full' priority={true} />
                  </div>
                <div className='absolute sm:w-[100%] w-[90vw] h-[50vh] sm:h-[100vh] sm:right-[-100px] right-[50%] sm:top-0 top-[-100px] translate-x-[50%] sm:translate-x-0'><Image src={mobiles} alt="mobiles" layout='fill' className=' object-contain w-full h-full' priority={true}/></div>
            </div>
        </section>
    </section>
  )
}

export default Header
