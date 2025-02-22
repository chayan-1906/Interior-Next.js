import {motion} from "framer-motion";
import {SlideLeft} from "@/animations/animate";

const Brands = () => {
    return (
        <>
            <div className={'container py-14'}>
                <div className={'flex flex-wrap justify-center lg:justify-between gap-6'}>
                    {/** TODO: Replace img with next/image */}
                    <motion.img variants={SlideLeft(0.2)} initial={'initial'} whileInView={'animate'} src={'/assets/brand/amazon.png'} alt={'amazon'} className={'w-[110px] md:w-[200px]'}/>

                    {/** TODO: Replace img with next/image */}
                    <motion.img
                        variants={SlideLeft(0.4)}
                        initial={'initial'}
                        whileInView={'animate'}
                        src={'/assets/brand/bench.png'}
                        alt={'bench'}
                        className={'w-[110px] md:w-[200px]'}
                    />

                    {/** TODO: Replace img with next/image */}
                    <motion.img
                        variants={SlideLeft(0.6)}
                        initial={'initial'}
                        whileInView={'animate'}
                        src={'/assets/brand/facebook.png'}
                        alt={'facebook'}
                        className={'w-[110px] md:w-[200px]'}
                    />

                    {/** TODO: Replace img with next/image */}
                    <motion.img
                        variants={SlideLeft(0.8)}
                        initial={'initial'}
                        whileInView={'animate'}
                        src={'/assets/brand/morning.png'}
                        alt={'morning'}
                        className={'w-[110px] md:w-[200px]'}
                    />

                    {/** TODO: Replace img with next/image */}
                    <motion.img
                        variants={SlideLeft(1.0)}
                        initial={'initial'}
                        whileInView={'animate'}
                        src={'/assets/brand/reebok.png'}
                        alt={'reebok'}
                        className={'w-[110px] md:w-[200px]'}
                    />
                </div>
            </div>
        </>
    );
};

export default Brands;
