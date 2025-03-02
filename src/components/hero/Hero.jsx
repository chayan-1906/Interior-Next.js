'use client';

import {motion} from "framer-motion";
import {SlideUp} from "@/animations/animate";
import Image from "next/image";

function Hero() {
    return (
        <div className={'container'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10'}>
                {/** text section */}
                <div className={'flex flex-col justify-center gap-7 text-center md:text-start px-10 pt-20 md:pt-0 md:pr-8 xl:pr-52'}>
                    <motion.h1 variants={SlideUp(0.2)} initial={'initial'} animate={'animate'} className={'text-4xl font-bold font-serif uppercase'}>
                        Sketch Luxury Interior Design
                    </motion.h1>
                    <motion.p variants={SlideUp(0.5)} initial={'initial'} animate={'animate'} className={'text-sm md:text-base text-gray-500'}>
                        Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.
                    </motion.p>
                    <div className={'flex flex-wrap justify-center gap-3'}>
                        <motion.button variants={SlideUp(0.8)} initial={'initial'} animate={'animate'} className={'primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'}>
                            Get started
                        </motion.button>
                        <motion.button variants={SlideUp(1.1)} initial={'initial'} animate={'animate'} className={'primary-btn uppercase'}>
                            Contact Us
                        </motion.button>
                    </div>
                </div>

                {/** images section */}
                <div className={'flex flex-col items-center justify-center'}>
                    <motion.div initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}}>
                        <Image src={'/assets/images/hero.png'} alt={'hero'} width={400} height={400} className={'w-[80%] md:w-[700px] object-cover'}/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
