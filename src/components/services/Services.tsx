'use client';

import {FaVectorSquare} from "react-icons/fa";
import {FaPenToSquare} from "react-icons/fa6";
import {BiSolidDollarCircle} from "react-icons/bi";
import Link from "next/link";
import {motion} from "framer-motion";
import {SlideUp} from "@/animations/animate";

const serviceCardsData = [
    {
        id: 1,
        title: 'Luxury Facilities',
        description: 'Experience top-tier amenities designed for comfort and elegance, featuring state-of-the-art infrastructure, premium interiors, and world-class services tailored to your needs.',
        icon: <FaVectorSquare/>,
        link: '#',
        delay: 0.2,
    },
    {
        id: 2,
        title: 'Quality Products',
        description: 'We offer high-quality, durable, and reliable products crafted with precision, ensuring superior performance, longevity, and customer satisfaction.',
        icon: <FaPenToSquare/>,
        link: '#',
        delay: 0.4,
    },
    {
        id: 3,
        title: 'Affordable Price',
        description: 'Get the best value for your money with competitive pricing, ensuring premium quality without breaking your budget.',
        icon: <BiSolidDollarCircle/>,
        link: '#',
        delay: 0.6,
    },
];

function Services() {
    return (
        <div className={'container py-20'}>
            {/** heading title */}
            <div className={'space-y-2 text-center max-w-[350px] mx-auto mb-8'}>
                <motion.h1 variants={SlideUp(0.2)} initial={'initial'} whileInView={'animate'} className={'text-3xl font-bold font-serif'}>What we provide</motion.h1>
                <motion.p variants={SlideUp(0.4)} initial={'initial'} whileInView={'animate'} className={'text-gray-500 text-sm'}>
                    Bring your dream home to life with one-on-one design help & hand picked products
                </motion.p>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-3 gap-5'}>
                {/** card section */}
                {serviceCardsData.map(({id, title, description, icon, link, delay}) => (
                    <motion.div key={id} variants={SlideUp(delay)} initial={'initial'} whileInView={'animate'}
                                className={'flex flex-col justify-between group border-[1px] border-black/30 p-6 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6C6C6C]'}>
                        <div className={'space-y-4'}>
                            <span className={'inline-block text-xl border-[1px] border-black group-hover:border-white rounded-full p-4'}>{icon}</span>
                            <p className={'text-2xl font-bold'}>{title}</p>
                            <p className={'text-gray-500 text-xs'}>{description}</p>
                        </div>
                        <Link href={link} className={'inline-block w-fit border-b border-black group-hover:border-white'}>Learn More</Link>
                    </motion.div>
                ))}

            </div>
        </div>
    );
}

export default Services;
