'use client'
import Image from "next/image"
import Link from "next/link"

import Logo1 from "../../public/n_logo1.png"
import Logo2 from "../../public/n_logo2.png"
import WhiteLogo from "../../public/accomate_logo_white.png"
import WhiteLogo2 from "../../public/n_accomate_white.png"
import CircleIcon from "../../public/n_accomate_circle.png"

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaBars, FaChevronDown, FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline, IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { MdGroups } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { FaHandshakeAngle } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { HiBuildingStorefront } from "react-icons/hi2";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Sidebar = ({ toogle, setToogle }) => {

    const [d1, setD1] = useState(false);
    const [d2, setD2] = useState(false);
    const path = usePathname();
    const navitems = [
        { name: "Home", link: "/" },
        { name: 'About Us', link: '/about' },
        {
            name: 'Services', link: '/services/australia',
            dropdown: [
                { name: 'Accounts Payable Services', link: '/services/accounts-payable-services' },
                { name: 'Account Reconciliation Services', link: '/services/accounts-reconciliation-services' },
                { name: 'Accounts Receivable Services', link: '/services/accounts-receivable-services' },
                { name: 'Bookkeeping Services', link: '/services/bookkeeping-services' },
                { name: 'Data Entry Services', link: '/services/data-entry' },
                { name: 'Financial Reporting Services', link: '/services/financial-reporting-services' },
            ]
        },
        { name: "Data Security", link: "/data-security" },
        { name: "Blogs", link: "https://blog.accomate.au/" },
        { name: "Career", link: "/career" },
    ];

    const isActive = (href) => {
        return path == href;
    };

    return (
        <div className="">
            <div className={`space-y-4 px-6 py-4 bg-white lg:hidden ${toogle ? 'translate-x-0 transition-transform duration-700 ease-in-out transform' : 'translate-x-full transition-transform duration-700 ease-in-out transform'} fixed z-40 right-0 top-0 h-full w-[70%] md:w-1/2 shadow-lg z-50 overflow-y-auto`}>

                <IoClose onClick={() => setToogle(false)} className="focus:outline-none absolute top-3 right-4 h-8 w-8" />
                <div className="w-full">
                    <Image
                        src={CircleIcon}
                        alt="circle icon"
                        className="w-[50%] h-auto flex justify-center mx-auto"
                    />
                </div>

                <div className="space-y-4">
                    {navitems.map((i, index) => {
                        return (
                            <div key={index} className="w-full border-b pb-2 flex">
                                <div className="w-full">

                                    <div className="w-fit relative flex items-center my-auto">
                                        <a href={i.link} className="hover:text-[#1B2D9F] duration-300 text-nowrap">
                                            <span className="flex items-center my-auto">
                                                {i.name}
                                            </span>
                                        </a>

                                        <span className={`absolute -bottom-2 h-1 transform ${isActive(i.link) ? 'w-full h-[2px] scale-x-100' : 'scale-x-0'} bg-[#1B2D9F] transition-transform duration-200 ease-out origin-center hover:scale-x-100`}>
                                        </span>
                                    </div>

                                    {i.name == 'Services' && d1 ?
                                        <div className="text-sm space-y-2 pl-1 pt-3">
                                            {i.dropdown.map((a, x) => {
                                                return (
                                                    <div key={x}>
                                                        <a href={a.link} className={`${isActive(a.link) ? 'text-[#1B2D9F]' : 'text-black'} text-nowrap block hover:text-[#1B2D9F] hover:pl-1 duration-300 pb-1 mt-1 ${index !== i.dropdown.length - 1 ? 'border-b border-[#9F8D1B]' : ''}`}>
                                                            {a.name}
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </div> : ''}

                                </div>
                                {i.name == 'Services' ? 
                                <button onClick={() => setD1(!d1)} className="flex justify-end shrink-0">
                                    <FaChevronDown />
                                </button> : ''}
                            </div>
                        )
                    })}
                    <div className="flex justify-center mx-auto my-2">
                        <a href="/contact" className="hover:scale-[110%] duration-300 text-white bg-[#1B2D9F]  px-5 py-2 rounded-full shadow-lg">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="flex justify-between">
                    <a href="#" className="rounded-full p-2 border-2 border-[#1B2D9F] shadow text-[#1B2D9F] hover:border-[#1B2D9F] hover:scale-[110%] hover:bg-[#1B2D9F] hover:text-white duration-300">
                        <FaFacebookF className="text-lg" />
                    </a>
                    <a href="#" className="rounded-full p-2 border-2 border-[#1B2D9F] shadow text-[#1B2D9F] hover:border-[#1B2D9F] hover:scale-[110%] hover:bg-[#1B2D9F] hover:text-white duration-300">
                        <FaInstagram className="text-lg" />
                    </a>
                    <a href="#" className="rounded-full p-2 border-2 border-[#1B2D9F] shadow text-[#1B2D9F] hover:border-[#1B2D9F] hover:scale-[110%] hover:bg-[#1B2D9F] hover:text-white duration-300">
                        <FaLinkedinIn className="text-lg" />
                    </a>
                    <a href="#" className="rounded-full p-2 border-2 border-[#1B2D9F] shadow text-[#1B2D9F] hover:border-[#1B2D9F] hover:scale-[110%] hover:bg-[#1B2D9F] hover:text-white duration-300">
                        <FaXTwitter className="text-lg" />
                    </a>
                </div>
            </div>
            <div onClick={() => setToogle(false)} className={`bg-transparent lg:hidden ${toogle ? 'translate-x-0 transition-transform duration-700 ease-in-out transform' : 'translate-x-full transition-transform duration-700 ease-in-out transform'} fixed z-40 right-0 top-0 h-full w-full shadow-lg z-40`}>
            </div>
        </div>
    )
}

export const Navbar = () => {

    const path = usePathname();
    const [sticky, setSticky] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [toogle, setToogle] = useState(false);
    const navitems = [
        { name: "Home", link: "/" },
        { name: 'About Us', link: '/about' },
        {
            name: 'Services', link: '/services/australia',
            dropdown: [
                { name: 'Accounts Payable Services', link: '/services/accounts-payable-services' },
                { name: 'Account Reconciliation Services', link: '/services/accounts-reconciliation-services' },
                { name: 'Accounts Receivable Services', link: '/services/accounts-receivable-services' },
                { name: 'Bookkeeping Services', link: '/services/bookkeeping-services' },
                { name: 'Data Entry Services', link: '/services/data-entry' },
                { name: 'Financial Reporting Services', link: '/services/financial-reporting-services' },
            ]
        },
        { name: "Data Security", link: "/data-security" },
        { name: "Blogs", link: "https://blog.accomate.au/" },
        { name: "Career", link: "/career" },
    ];

    const isActive = (href) => {
        return path == href;
    };


    const handlescroll = () => {

        if (window.scrollY > 100) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handlescroll);
        return () => {
            window.removeEventListener('scroll', handlescroll);
        }
    }, []);


    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div className={``}>
            <div className={`p-5 lg:py-6 lg:px-8 bg-[#1B2D9F]`}>
                <div className="flex items-center my-auto w-full justify-between">

                    {/* Logo */}
                    <div className="flex items-center md:w-[80%] lg:w-[35%]">
                        <a href="/">
                            <Image
                                src={WhiteLogo}
                                alt="Accomate Logo"
                                className="h-4 w-auto md:h-5 md:w-auto"
                                priority={true}
                            />
                        </a>
                    </div>

                    {/* Desktop Items */}
                    <div className="hidden lg:flex items-center justify-end space-x-8 lg:w-[65%]">

                        {navitems.map((i, index) => {
                            return (
                                <div key={index} className="w-fit text-lg relative">
                                    <a
                                        onMouseEnter={i.name == "Services" ? () => setDropdown(true) : i.name == "Company" ? () => setDropdown2(true) : () => { }}
                                        onMouseLeave={i.name == "Services" ? () => setDropdown(false) : i.name == "Company" ? () => setDropdown2(false) : () => { }}
                                        href={i.link} className={`text-white hover:underline-animation text-nowrap`}>
                                        <span className="flex items-center my-auto">
                                            {i.name} <FiChevronDown className={`ml-1 text-white ${i.name == "Services" || i.name == "Company" ? '' : 'hidden'} flex-shrink-0`} />
                                        </span>
                                    </a>
                                    <span
                                        onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                        onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                        className={`absolute bottom-0 h-1 transform ${isActive(i.link) ? 'w-full h-[2px] scale-x-100' : 'scale-x-0'} bg-white transition-transform duration-200 ease-out origin-center hover:scale-x-100`}></span>
                                    {dropdown && i.name == "Services" ?
                                        <div
                                            onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                            onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                            className="w-auto -left-1 border border-gray-300 absolute top-7 bg-white px-4 py-2 shadow-lg z-50 rounded-lg">

                                            {i.dropdown.map((d, index) => {
                                                return (
                                                    <a key={index} href={d.link} className={`${isActive(d.link) ? 'text-[#1B2D9F]' : 'text-black'} text-nowrap block hover:text-[#1B2D9F] hover:pl-1 duration-300 pb-1 mt-1 ${index !== i.dropdown.length - 1 ? 'border-b border-[#9F8D1B]' : ''}`}>
                                                        {d.name}
                                                    </a>
                                                )
                                            })}
                                        </div> : ''}
                                </div>
                            )
                        })}

                        <a href="/contact" className="text-nowrap hover:scale-[110%] duration-300 text-[#1B2D9F] bg-white px-5 py-2 rounded-full shadow-lg">
                            Contact Us
                        </a>
                    </div>

                    {/* Hamburger */}
                    <div className="flex justify-end w-auto lg:hidden">
                        <FaBars className=" text-white text-xl" onClick={() => setToogle(true)} />
                    </div>
                </div>
            </div>

            {/* Sticky */}
            <div className={`${sticky ? 'fixed top-0 left-0 w-full z-50 shadow-lg ' : 'hidden'} p-5 lg:py-6 lg:px-8 bg-white`}>
                <div className="flex items-center my-auto w-full justify-between">

                    {/* Logo */}
                    <div className="flex items-center md:w-[80%] lg:w-[35%]">
                        <a href="/">
                            <Image
                                src={Logo1}
                                alt="Accomate Logo"
                                className="h-4 w-auto md:h-5 md:w-auto"
                                priority={true}
                            />
                        </a>
                    </div>

                    {/* Desktop Items */}
                    <div className="hidden lg:flex items-center justify-end space-x-8 lg:w-[65%]">

                        {navitems.map((i, index) => {
                            return (
                                <div key={index} className="w-fit text-lg relative overflow-x-visible">
                                    <a
                                        onMouseEnter={i.name == "Services" ? () => setDropdown(true) : i.name == "Company" ? () => setDropdown2(true) : () => { }}
                                        onMouseLeave={i.name == "Services" ? () => setDropdown(false) : i.name == "Company" ? () => setDropdown2(false) : () => { }}
                                        href={i.link}
                                        className={`${isActive(i.link) ? 'text-[#1B2D9F]' : ''}  hover:underline-animation2 text-nowrap`}>
                                        <span className="flex items-center my-auto">
                                            {i.name} <FiChevronDown className={`ml-1 ${i.name == "Services" || i.name == "Company" ? '' : 'hidden'} flex-shrink-0`} />
                                        </span>
                                    </a>
                                    <span
                                        onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                        onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                        className={`absolute bottom-0 h-1 transform ${isActive(i.link) ? 'w-full h-[2px] scale-x-100' : 'scale-x-0'} bg-[#1B2D9F] transition-transform duration-200 ease-out origin-center hover:scale-x-100`}>
                                    </span>

                                    {dropdown && i.name == "Services" ?
                                        <div
                                            onMouseEnter={i.name == "Services" ? () => setDropdown(true) : () => { }}
                                            onMouseLeave={i.name == "Services" ? () => setDropdown(false) : () => { }}
                                            className="w-auto -left-1 border border-gray-300 absolute top-7 bg-white px-4 py-2 shadow-lg z-50 rounded-lg">

                                            {i.dropdown.map((d, index) => {
                                                return (
                                                    <a key={index} href={d.link} className={`${isActive(d.link) ? 'text-[#1B2D9F]' : 'text-black'} text-nowrap block hover:text-[#1B2D9F] hover:pl-1 duration-300 pb-1 mt-1 ${index !== i.dropdown.length - 1 ? 'border-b border-[#9F8D1B]' : ''}`}>
                                                        {d.name}
                                                    </a>
                                                )
                                            })}
                                        </div> : ''}
                                </div>
                            )
                        })}

                        <a href="/contact" className="text-nowrap hover:scale-[110%] duration-300 text-white bg-[#1B2D9F]  px-5 py-2 rounded-full shadow-lg">
                            Contact Us
                        </a>
                    </div>

                    {/* Hamburger */}
                    <div className="flex justify-end w-auto lg:hidden">
                        <FaBars className=" text-[#1B2D9F] text-xl" onClick={() => setToogle(true)} />
                    </div>
                </div>
            </div>
            <Sidebar toogle={toogle} setToogle={setToogle} />
        </div>
    )
}

export const Footer = () => {
    return (
        <div className="px-5 lg:px-8 pt-14 pb-10 bg-gray-900 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:flex w-full md:space-x-3 space-y-4 lg:space-y-0">
                {/* About */}
                <div className="lg:w-[40%] space-y-4">
                    <Image
                        src={WhiteLogo2}
                        alt="Accomate Logo"
                        className="h-28 w-auto"
                    />
                    <div className="">
                        Accomate Global is a powerhouse of skilled
                        CAs & CPAs with diverse industry expertise
                        in Private Equity, Venture Capital,
                        Technology, Financial Service, Real Estate,
                        Insurance, Healthcare, and Manufacturing.
                    </div>
                    <div className="flex items-center my-auto space-x-5">
                        <a href="#" className="rounded-full p-2 border-2 border-white shadow text-white hover:border-[#1B2D9F] hover:scale-[110%] hover:bg-[#1B2D9F] hover:text-white duration-300">
                            <FaFacebookF className="text-lg" />
                        </a>
                        <a href="#" className="rounded-full p-2 border-2 border-white shadow text-white hover:border-[#1B2D9F] hover:scale-[110%] hover:bg-[#1B2D9F] hover:text-white duration-300">
                            <FaInstagram className="text-lg" />
                        </a>
                        <a href="#" className="rounded-full p-2 border-2 border-white shadow text-white hover:border-[#1B2D9F] hover:scale-[110%] hover:bg-[#1B2D9F] hover:text-white duration-300">
                            <FaLinkedinIn className="text-lg" />
                        </a>
                        <a href="#" className="rounded-full p-2 border-2 border-white shadow text-white hover:border-[#1B2D9F] hover:scale-[110%] hover:bg-[#1B2D9F] hover:text-white duration-300">
                            <FaXTwitter className="text-lg" />
                        </a>
                    </div>
                </div>
                {/* Useful Links */}
                <div className="w-full lg:w-[30%] md:flex md:justify-center md:mx-auto">
                    <div className="">
                        <div className="font-semibold text-xl text-[#9F8D1B]">
                            Useful Links
                        </div>
                        <div className="pl-2 mt-4 grid grid-cols-1 gap-2">
                            <a href="/privacy-policy" className="hover:text-blue-500 duration-300">
                                Privacy Policy
                            </a>
                            <a href="/terms-conditions" className="hover:text-blue-500 duration-300">
                                Terms & Conditions
                            </a>
                            <a href="/disclaimer" className="hover:text-blue-500 duration-300">
                                Disclaimer
                            </a>
                            <a href="/contact" className="hover:text-blue-500 duration-300">
                                Support
                            </a>
                        </div>
                    </div>
                </div>
                {/* Contact Us */}
                <div className="w-full lg:w-[30%] lg:flex lg:justify-center lg:mx-auto">
                    <div className="w-full">
                        <div className="font-semibold text-xl text-[#9F8D1B]">
                            Contact Us
                        </div>
                        <div className="mt-4 pl-2 grid grid-cols-1 gap-2">
                            <a href="mailto:australia@accomateglobal.com" className="flex items-center my-auto hover:text-blue-500 duration-300">
                                <MdOutlineEmail className="flex-shrink-0 mr-2 text-xl" />
                                australia@accomateglobal.com
                            </a>
                            <a href="tel:+61 433197164" className="flex items-center my-auto hover:text-blue-500 duration-300">
                                <IoCallOutline className="flex-shrink-0 mr-2 text-xl" />
                                +61 433197164
                            </a>
                            <a href="https://maps.app.goo.gl/gkFKMoX17dB4D8Md6" target="_blank" className="flex hover:text-blue-500 duration-300">
                                <IoLocationOutline className="flex-shrink-0 mr-2 text-xl mt-1" />
                                203/2 Infinity Drive Truganina, VIC, Australia, 3029
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="flex justify-center mx-auto border-t border-gray-500 pt-10 text-center mt-6">
                <span className="text-center">
                    © 2024 Accomate Global. Developed by&nbsp;<a href="https://anriyo.com" target="_blank" className="font-semibold">Anriyo</a>.
                </span>
            </div>
        </div>
    )
}

export const Clients = () => {

    const path = usePathname();

    return (
        <div className="bg-gray-200 px-8 py-14 space-y-12">
            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="300" className="font-semibold text-3xl flex justify-center mx-auto text-center leading-relaxed">
                Clients We Help Thrive
            </div>

            {/* <div className="flex justify-center mx-auto text-center lg:w-[80%] mt-6 mb-10">
                Accomate Global is dedicated to providing outsourcing services to various clientele and then in horizontal line add above clientel with different icons if possible.
            </div> */}

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-5">

                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" className="space-y-4 hover:scale-[110%] duration-300">
                    <div className="flex justify-center mx-auto rounded-full p-3 bg-[#1B2D9F] text-white w-fit">
                        <MdGroups className="flex justify-center mx-auto h-10 md:h-12 w-auto" />
                    </div>
                    <div className="text-center flex justify-center mx-auto font-semibold text-lg md:text-xl">
                        Individual
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="300" className="space-y-4 hover:scale-[110%] duration-300">
                    <div className="flex justify-center mx-auto rounded-full p-3 bg-[#1B2D9F] text-white w-fit">
                        <CgOrganisation className="flex justify-center mx-auto h-10 md:h-12 w-auto" />
                    </div>
                    <div className="text-center flex justify-center mx-auto font-semibold text-lg md:text-xl">
                        Company
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500" className="space-y-4 hover:scale-[110%] duration-300">
                    <div className="flex justify-center mx-auto rounded-full p-3 bg-[#1B2D9F] text-white w-fit">
                        <FaHandshakeAngle className="flex justify-center mx-auto h-10 md:h-12 w-auto" />
                    </div>
                    <div className="text-center flex justify-center mx-auto font-semibold text-lg md:text-xl">
                        Trust
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="700" className="space-y-4 hover:scale-[110%] duration-300">
                    <div className="flex justify-center mx-auto rounded-full p-3 bg-[#1B2D9F] text-white w-fit">
                        <TbMoneybag className="flex justify-center mx-auto h-10 md:h-12 w-auto" />
                    </div>
                    <div className="text-center flex justify-center mx-auto font-semibold text-lg md:text-xl">
                        SMSF
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="900" className="space-y-4 hover:scale-[110%] duration-300">
                    <div className="flex justify-center mx-auto rounded-full p-3 bg-[#1B2D9F] text-white w-fit">
                        <HiBuildingStorefront className="flex justify-center mx-auto h-10 w-auto" />
                    </div>
                    <div className="text-center flex justify-center mx-auto font-semibold text-lg md:text-xl">
                        Small Businesses
                    </div>
                </div>

            </div>
        </div>

    )
}

export const Lordicon = ({ src, trigger, style }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.lordicon.com/lordicon.js';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <lord-icon
            src={src}
            trigger={trigger}
            style={style}
        />
    )
}

export const Breadcrumb = () => {

    const path = usePathname();

    return (
        <div className="h-[45vh] w-full relative">
            <Image
                src={'/banner1.jpg'}
                alt="Banner"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority={true}
            />
            <div className="absolute w-full h-full bg-[#00000084] top-0 left-0 flex justify-center items-center m-auto">

                <div className="space-y-3">
                    <div data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="100" className="text-white font-semibold text-[2.3rem] md:text-[3.5rem] text-center px-4">
                        {
                            path == '/about' ? 'About Us' :
                                path == '/team' ? 'Our Team' :
                                    path == '/contact' ? 'Contact Us' :
                                        path == '/data-security' ? 'Data Security' :
                                            path == '/career' ? 'Career' :
                                                path == '/services' ? 'services' :
                                                    path == '/services/usa' ? 'USA' :
                                                        path == '/services/canada' ? 'Canada' :
                                                            path == '/services/australia' ? 'Services' :
                                                                path == '/services/accounts-payable-services' ? 'Accounts Payable Services' :
                                                                    path == '/services/accounts-reconciliation-services' ? 'Accounts Reconciliation Services' :
                                                                        path == '/services/accounts-receivable-services' ? 'Accounts Receivable Services' :
                                                                            path == '/services/bookkeeping-services' ? 'Bookkeeping Services' :
                                                                                path == '/services/data-entry' ? 'Data Entry Services' :
                                                                                    path == '/services/financial-reporting-services' ? 'Financial Reporting Service' :
                                                                                        ''}
                    </div>
                    {/* <div className="text-white text-center text-lg">
                        Home
                        {
                            path == '/about' ? ' / company / about' :
                                path == '/team' ? ' / company / team' :
                                    path == '/contact' ? ' / contact' :
                                        path == '/data-security' ? ' / data-security' :
                                            path == '/career' ? ' / career' :
                                                path == '/services' ? ' / services' :
                                                    path == '/services/usa' ? ' / services / USA' :
                                                        path == '/services/canada' ? ' / services / Canada' :
                                                            path == '/services/australia' ? ' / services / Australia' :
                                                                ''}
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export const Fixbtn = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {

        const check = () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", check);

        return () => {
            window.removeEventListener("scroll", check);
        }
    }, []);

    return (
        <a href="https://api.whatsapp.com/send/?phone=919016200968&text&type=phone_number&app_absent=0" target="_blank">
            <button className={`z-50 fixed bottom-4 right-6 shadow-lg rounded-full bg-green-500 text-white p-3 text-3xl hover:scale-[110%] duration-300`}>
                <FaWhatsapp className="" />
            </button>
        </a>
    )
}