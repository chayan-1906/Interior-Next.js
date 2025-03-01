import Image from "next/image";
import Link from "next/link";
import {FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

function Footer() {
    return (
        <footer>
            <div className={'container py-11'}>
                {/*<div className={'grid grid-cols-1 md:grid-cols-2 bg-red-400'}>*/}
                <div className={'flex justify-between gap-8'}>
                    {/** company info */}
                    <div className={'space-y-4 font-semibold w-full'}>
                        <div className={'flex items-center space-x-3'}>
                            <Image src={'/assets/images/logo.png'} alt={'logo'} width={400} height={400} className={'size-6'}/>
                            <p className={'text-2xl font-semibold'}>Interior</p>
                        </div>
                        <p className={''}>Greater Noida, Uttar Pradesh, India</p>
                        <p>@ 2025, TCJ All rights reserved</p>
                    </div>

                    {/** footer link */}
                    <div className={'flex justify-between w-full gap-5'}>
                        <div className={'space-y-4'}>
                            <h1 className={'text-xl font-semibold'}>About Us</h1>
                            <ul className={'text-sm space-y-4'}>
                                <li><Link href={'#'}>Our Story</Link></li>
                                <li><Link href={'#'}>Designer</Link></li>
                                <li><Link href={'#'}>Craftmanship</Link></li>
                                <li><Link href={'#'}>Sustainability</Link></li>
                                <li><Link href={'#'}>Designer</Link></li>
                            </ul>
                        </div>
                        <div className={'space-y-4'}>
                            <h1 className={'text-xl font-semibold'}>Support</h1>
                            <ul className={'text-sm space-y-4'}>
                                <li><Link href={'#'}>FAQ's</Link></li>
                                <li><Link href={'#'}>Shipping & Returns</Link></li>
                                <li><Link href={'#'}>Care Guide</Link></li>
                                <li><Link href={'#'}>Guarantee</Link></li>
                            </ul>
                        </div>
                        <div className={'space-y-4'}>
                            <h1 className={'text-xl font-semibold'}>Contact Us</h1>
                            <ul className={'text-sm space-y-4'}>
                                <li className={'flex items-center space-x-3'}>
                                    <span><FaPhone/></span>
                                    <Link href={'#'}>+911234567890</Link>
                                </li>
                                <li className={'flex items-center space-x-3'}>
                                    <span><MdEmail/></span>
                                    <Link href={'mailto:contact@tcj.com'}>Email</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/** bottom section */}
                <p className={'text-center text-sm font-semibold border-t-2 pt-5 mt-5'}>@ 2025, TCJ All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
