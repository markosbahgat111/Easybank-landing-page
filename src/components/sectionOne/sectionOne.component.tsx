import Image from 'next/image'
import React from 'react'
import banking from 'assets/images/icon-online.svg';
import budgeting from 'assets/images/icon-budgeting.svg';
import onBoarding from 'assets/images/icon-onboarding.svg';
import api from 'assets/images/icon-api.svg';

interface Props { }

const SectionOne:React.FC<Props> = () => {
const h1_Styles = 'my-8 text-2xl text-[#2d314d]',
            p_styles = 'text-[#9698a6] text-lg';

  return (
    <div className='bg-[#f3f4f6] min-h-[80vh] flex flex-col justify-between items-center text-center sm:text-left sm:items-start w-full py-20 px-5 sm:px-32 sm:gap-32 gap-16'>
        <div>
            <h1 className='text-5xl text-[#2d314d] mb-10'>Why choose Easybank ?</h1>
            <p className='sm:text-xl text-md text-[#9698a6]'>We leverage Open Banking to turn your bank account into your financial hub.<br/> Control your finances like never before.</p>
        </div>
        <div className='grid grid-cols-sectionOne w-full gap-10'>
            <section>
                <Image src={banking} alt="online banking" width={60} height={60}/>
                <h1 className={h1_Styles}>Online Banking</h1>
                <p className={p_styles}>Our modern we and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </section>
            <section>
                <Image src={budgeting} alt="Simple Budgeting" width={60} height={60}/>
                <h1 className={h1_Styles}>Simple Budgeting</h1>
                <p className={p_styles}>See exactly where your money goes each month. Receive notification when you&apos;re close to hitting your limits.</p>
            </section>
            <section>
                <Image src={onBoarding} alt="Fast onBoarding" width={60} height={60}/>
                <h1 className={h1_Styles}>Fast Onboarding</h1>
                <p className={p_styles}>we dont do branches. open our account in minutes online and start taking control of your finances right away.</p>
            </section>
            <section>
                <Image src={api} alt="online banking" width={60} height={60}/>
                <h1 className={h1_Styles}>Online Banking</h1>
                <p className={p_styles}>Manage your savings. Investments. pension, and much more from one account, Tracking your money has never been easier.</p>
            </section>
        </div>
    </div>
  )
}

export default SectionOne;
