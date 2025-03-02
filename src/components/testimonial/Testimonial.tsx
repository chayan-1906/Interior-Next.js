'use client';

import Image from "next/image";
import {motion} from "framer-motion";
import {SlideLeft, SlideUp} from "@/animations/animate";

const testimonialData = [
    {
        id: 1,
        name: 'John Doe',
        designation: 'Designer',
        img: 'https://i.pravatar.cc/300?img=3',
        quote: 'Absolutely stunning designs! The team transformed my living space into a modern yet cozy haven. Their attention to detail and professionalism exceeded my expectations. Highly recommended!',
        delay: 0.2,
    },
    {
        id: 2,
        name: 'Alex',
        designation: 'Developer',
        img: 'https://i.pravatar.cc/300?img=11',
        quote: 'Fantastic experience from start to finish! They understood my vision and brought it to life flawlessly. The materials, colors, and layout were perfectly chosen. Truly top-notch service!',
        delay: 0.4,
    },
    {
        id: 3,
        name: 'George',
        designation: 'Manager',
        img: 'https://i.pravatar.cc/300?img=13',
        quote: 'Exceptional interior work! My home now feels more elegant and functional. The designers were creative, responsive, and committed to perfection. Couldn’t be happier with the results!',
        delay: 0.6,
    },
];

function Testimonial() {
    return (
        <div className={'container py-14'}>
            {/** heading title */}
            <div className={'space-y-4 text-center max-w-[550px] mx-auto mb-8'}>
                <motion.h1 variants={SlideUp(0.2)} initial={'initial'} whileInView={'animate'} className={'text-3xl font-bold font-serif'}>Words from our customers</motion.h1>
                <motion.p variants={SlideUp(0.4)} initial={'initial'} whileInView={'animate'} className={'text-gray-500 text-sm'}>Bring your dream home to life with one-on-one design help & hand picked
                    products
                </motion.p>
            </div>

            {/** testimonial cards */}
            <div className={'bg-black p-12 rounded-md'}>
                <div className={'grid grid-cols-1 md:grid-cols-3 gap-10'}>
                    {testimonialData.map(({id, name, designation, img, quote, delay}) => (
                        <div key={id} className={'border-[1px] border-gray-500 p-5 rounded-md text-white group hover:bg-white duration-300'}>
                            {/** upper section */}
                            <motion.div variants={SlideLeft(delay)} initial={'initial'} whileInView={'animate'} className={'flex justify-center items-center gap-5'}>
                                <Image src={img} alt={name} width={200} height={200} className={'w-16 rounded-full'}/>
                                <div className={''}>
                                    <p className={'text-sm font-bold font-serif group-hover:text-black'}>{name}</p>
                                    <p className={'text-gray-400 text-xs'}>{designation}</p>
                                    <div className={'text-xs mt-2'}>⭐️⭐️⭐️⭐️⭐️</div>
                                </div>
                            </motion.div>

                            {/** bottom section */}
                            <div className={'mt-5 border-t-2 border-gray-500/40 pt-5'}>
                                <p className={'text-sm text-gray-300 group-hover:text-black'}>{quote}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
