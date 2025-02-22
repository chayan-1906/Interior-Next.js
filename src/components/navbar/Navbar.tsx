'use client';

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    {
        id: 1,
        title: 'About',
        link: '#',
    },
    {
        id: 2,
        title: 'Services',
        link: '#',
    },
    {
        id: 3,
        title: 'Project',
        link: '#',
    },
    {
        id: 4,
        title: 'Contact',
        link: '#',
    },
];

const Navbar = () => {
    return (
        <motion.div initial={{y: -100}} animate={{y: 0}} transition={{duration: 0.5}} className={'container py-6 flex justify-between items-center'}>
            {/** logo section */}
            <div className='flex items-center gap-3'>
                <Image src={'/assets/images/logo.png'} alt={'logo'} width={400} height={400} className={'w-10'}/>
                <span className={'text-2xl font-bold'}>Interior</span>
            </div>

            {/** link section */}
            <div className={'hidden md:block space-x-12'}>
                {navLinks.map(({id, title, link}) => {
                    return (
                        <Link key={id} href={link} className={'mx-4 text-lg font-semibold'}>{title}</Link>
                    );
                })}
            </div>

            {/** button section */}
            <div>
                <button className={'primary-btn'}>Try For Free</button>
            </div>
        </motion.div>
    );
};

export default Navbar;
