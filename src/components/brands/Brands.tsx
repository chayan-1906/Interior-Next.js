'use client';

import {motion} from "framer-motion";
import {SlideLeft} from "@/animations/animate";
import Image from "next/image";

function Brands() {
    return (
        <>
            <div className={'container py-14'}>
                <div className={'flex flex-wrap justify-center lg:justify-between gap-6'}>
                    {/** amazon */}
                    <motion.div variants={SlideLeft(0.2)} initial={'initial'} whileInView={'animate'}>
                        <Image src={'/assets/brand/amazon.png'} alt={'amazon'} width={400} height={400} className={'w-[110px] md:w-[200px]'}/>
                    </motion.div>

                    {/** bench */}
                    <motion.div variants={SlideLeft(0.4)} initial={'initial'} whileInView={'animate'}>
                        <Image src={'/assets/brand/bench.png'} alt={'bench'} width={400} height={400} className={'w-[110px] md:w-[200px]'}/>
                    </motion.div>

                    {/** facebook */}
                    <motion.div variants={SlideLeft(0.6)} initial={'initial'} whileInView={'animate'}>
                        <Image src={'/assets/brand/facebook.png'} alt={'facebook'} width={400} height={400} className={'w-[110px] md:w-[200px]'}/>
                    </motion.div>

                    {/** morning */}
                    <motion.div variants={SlideLeft(0.8)} initial={'initial'} whileInView={'animate'}>
                        <Image src={'/assets/brand/morning.png'} alt={'facebook'} width={400} height={400} className={'w-[110px] md:w-[200px]'}/>
                    </motion.div>

                    {/** reebok */}
                    <motion.div variants={SlideLeft(1.0)} initial={'initial'} whileInView={'animate'}>
                        <Image src={'/assets/brand/reebok.png'} alt={'facebook'} width={400} height={400} className={'w-[110px] md:w-[200px]'}/>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Brands;
