'use client';

import {motion} from "framer-motion";
import {SlideUp} from "@/animations/animate";
import Image from "next/image";

function Banner() {
    return (
        <div>
            <div className={'container py-14'}>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-10'}>
                    {/** image section */}
                    <div className={'flex flex-col justify-center'}>
                        <motion.div initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}}>
                            <Image src={'/assets/images/banner.png'} alt={'banner'} width={400} height={400} className={'w-[95%] md:w-full mx-auto'}/>
                        </motion.div>
                    </div>

                    {/** text section */}
                    <div className={'space-y-5 flex flex-col justify-center xl:max-w-[500px]'}>
                        <motion.h1 variants={SlideUp(0.2)} initial={'initial'} whileInView={'animate'} className={'text-4xl font-bold font-serif'}>
                            We believe that a team makes any project better
                        </motion.h1>
                        <motion.p variants={SlideUp(0.4)} initial={'initial'} whileInView={'animate'} className={'text-gray-500 text-sm leading-7'}>
                            We believe great design thrives on collaboration. Our team-driven approach ensures every project is enhanced with creativity, expertise, and precision. By working together,
                            we craft interiors that are functional, stylish, and uniquely tailored to your vision.
                        </motion.p>
                        <div>
                            <motion.button variants={SlideUp(0.6)} initial={'initial'} whileInView={'animate'} className={'primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6C6C6C]'}>
                                Discover Now
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
