import Image from 'next/image'
import React from 'react'
import logo from 'assets/images/logo.svg';

interface Props {}

const Footer:React.FC<Props> = () => {
  return (
    <div className='w-full min-h-[30vh] bg-[#2d314d] xl:px-40 sm:px-10 flex md:flex-row flex-col items-center justify-between py-10 gap-10 md:gap-0'>
        <div className='flex items-center md:gap-12 lg:gap-40 gap-10 h-full md:flex-row flex-col'>
            <section className='w-fit flex flex-col items-center justify-between md:h-[15vh] h-20'>
                <h1 className='text-4xl text-white font-bold'>Easybank</h1>
                <div className='flex items-center gap-5'>
                    <i className="fa-brands fa-facebook-square text-white fa-xl"></i>
                    <i className="fa-brands fa-youtube text-white fa-xl"></i>
                    <i className="fa-brands fa-instagram text-white fa-xl"></i>
                    <i className="fa-brands fa-pinterest text-white fa-xl"></i>
                    <i className="fa-brands fa-twitter text-white fa-xl"></i>
                </div>
            </section>
            <section className='flex md:flex-row flex-col items-center justify-between md:gap-10 lg:gap-28 gap-10'>
                <ul className='flex flex-col  gap-5 text-white md:items-start items-center'>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <ul className='flex flex-col md:items-start items-center gap-5 text-white'>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
            </section>
        </div>
        <section className='flex flex-col md:items-end items-center gap-5'>
            <button className=' bg-gradient-to-r from-[#31d35c] to-[#2bb7da] w-[175px] h-[45px] text-white rounded-full'>Request Invite</button>
            <h3 className='text-[#9698a6] whitespace-nowrap'>© Easybank. All Rights Reserved</h3>
        </section>
    </div>
  )
}

export default Footer
