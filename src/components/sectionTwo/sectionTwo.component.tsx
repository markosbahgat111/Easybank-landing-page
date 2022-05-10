import Image from 'next/image'
import React from 'react'
import fireworks from 'assets/images/image-confetti.jpg';
import food from 'assets/images/image-restaurant.jpg';
import plane from 'assets/images/image-plane.jpg';
import money from 'assets/images/image-currency.jpg';

interface Props { }

const SectionTwo:React.FC<Props> = () => {
    const section_styles = "h-[450px] bg-white flex flex-col justify-start items-start shadow-lg rounded-lg overflow-hidden",
        inner_div_style = "h-[200px] p-6",
        span_styles = "text-[#9698a6] text-sm",
        h1_styles = "text-[#2d314d] text-xl my-3",
        p_styles = "text-[#9698a6]";
    const newsPosts = [
        {
            img: money,
            h1: "Receive Money in any currency with no fees"
        },
        {
            img: food,
            h1: "Treat yourself without worrying about money"
        },
        {
            img: plane,
            h1: "Take your Easybank card wherever you go"
        },
        {
            img: fireworks,
            h1: "Our invite-only Beta accounts are now live!"
        },
    ];
  return (
    <div className='min-h-[100vh] w-full bg-[#fafafa] flex flex-col justify-between sm:items-stretch items-center  py-32 px-5 sm:px-40 gap-32'>
        <h1 className='sm:text-5xl text-4xl text-[#2d314d]'>Latest Articles</h1>
        <div className='grid grid-cols-sectionTwo gap-10'>
            {newsPosts?.map((post, index) => (
                <section className={section_styles} key={index}>
                    <div className='relative w-[100%] h-[200px]'>
                        <Image src={post?.img} alt={post.h1} layout='fill' className='object-cover' />
                    </div>
                    <div className={inner_div_style}>
                        <span className={span_styles}>By Claire Robinson</span>
                        <h1 className={h1_styles}>{post.h1}</h1>
                        <p className={p_styles}>The world is getting smaller and we&apos;re becoming more mobile. So why should you be forced to only receive money in single ....</p>
                    </div>
                </section>
            ))}
        </div>
    </div>
  )
}

export default SectionTwo
