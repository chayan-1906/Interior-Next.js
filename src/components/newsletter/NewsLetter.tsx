'use client';

import {motion} from "framer-motion";
import {SlideUp} from "@/animations/animate";

function NewsLetter() {
    return (
        <div className={'max-w-[500px] mx-auto space-y-5 py-14'}>
            <motion.h1 variants={SlideUp(0.2)} initial={'initial'} whileInView={'animate'} className={'text-3xl font-bold font-serif text-center'}>Subscribe to our Newsletter</motion.h1>
            <motion.p variants={SlideUp(0.4)} initial={'initial'} whileInView={'animate'} className={'max-w-[300px] mx-auto text-gray-500 text-sm text-center'}>
                Stay inspired with the latest interior design trends, tips, and exclusive offers! Subscribe to our newsletter for expert insights, stunning decor ideas, and fresh inspirations
                delivered straight to your inbox. Transform your space—one email at a time!
            </motion.p>

            {/** form */}
            <motion.div variants={SlideUp(0.6)} initial={'initial'} whileInView={'animate'} className={'flex !mt-10 justify-center'}>
                <input type={'email'} placeholder={'Enter your email...'} className={'px-4 py-4 ring-1 ring-gray-300'}/>
                <button className={'bg-black text-white px-6 py-4 uppercase'}>Subscribe</button>
            </motion.div>
        </div>
    );
}

export default NewsLetter;
