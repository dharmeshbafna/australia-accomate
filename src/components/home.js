'use client'
import { useState, useEffect } from "react"
import Image from "next/image"

import CircleIcon from "../../public/n_accomate_circle.png"

import AboutImg from "../../public/team.jpg"
import newimage from "../../public/newabout.jpg"
import Banner1 from "../../public/banner1.jpg"
import Banner2 from "../../public/banner2.jpg"
import USA from "../../public/usa.webp"
import Canada from "../../public/circular_canada.jpg"
import Australia from "../../public/circular_australia.jpg"

// softwares
import CCH from "../../public/software/cch.png"
import Drake from "../../public/software/DrakeSoftware.png"
import Myob from "../../public/software/myob.png"
import Ultratax from "../../public/software/ultratax.png"
import Taxcycle from "../../public/software/taxcycle.jpg"

import Quickbooks from "../../public/software/quickbooks.png"
import Xero from "../../public/software/xero.png"
import Certified from "../../public/software/certified.png"
import BGL from "../../public/software/bgl.png"
import SalesTrekker from "../../public/software/salestrekker.png"
import Xodo from "../../public/software/xodo.png"
import Afg from "../../public/software/afg.png"
import Infinity from "../../public/software/infinity.jpg"
import Proconnect from "../../public/software/proconnect.jpg"
import Broker from "../../public/software/broker.jpg"

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { GrDocumentText } from "react-icons/gr";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa"
import { BsFileEarmarkFont, BsFileEarmarkCheck } from "react-icons/bs";
import { PiUsersThree } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { FaHandshakeAngle } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { HiBuildingStorefront } from "react-icons/hi2";

import { Lordicon } from "./other"

export const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();

    const slides = [
        {
            image: "/banner3.jpg",
            title: "Let's grow together",
            description: `Accomate Global serves as a seamless extension of our client's team. When our clients outsource their 
            work to us, they benefit from the expertise of highly experienced CPAs while saving on operational costs, 
            leading to increased efficiency and profitability.`
        },
        {
            image: "/banner1.jpg",
            title: "Small Business Potential Unleashed",
            description: `Is the burden of accounting and taxation slowing down your business growth?​
            With Accomate Global's Outsourcing Solutions, you can focus on your core business. Our team of 
            experienced professionals will save you time, money, and stress while ensuring compliance with financial 
            regulations.`
        },
        {
            image: "/banner2.jpg",
            title: "Transform your mortgage broking business",
            description: `Rip the benefit of an experienced loan processor at 40-50% of your staffing cost.​
            Mortgage processing usually demands efficiency, accuracy, and compliance. Let us handle 
            the complex and tedious task while you concentrate on your business growth.`
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        autoplay: true,
        autoplaySpeed: 5000,
        waitForAnimate: false,
        fade: true,
        pauseOnHover: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="absolute bottom-[10%] right-[35%] md:bottom-auto md:top-1/2 md:right-4 z-20 rounded-full text-white p-2 border-2 border-white rounded-full hover:scale-[110%] duration-300"
                onClick={onClick}>
                <FaChevronRight className="text-lg duration-300" />
            </button>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="absolute bottom-[10%] left-[35%] md:bottom-auto md:top-1/2 md:left-4 z-20 rounded-full text-white p-2 border-2 border-white rounded-full hover:scale-[110%] duration-300"
                onClick={onClick}>
                <FaChevronLeft className="text-lg duration-300" />
            </button>
        );
    }

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="100" className="overflow-x-hidden relative">
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="h-[90vh] md:h-[60vh] lg:h-[90vh] w-full relative">
                        <Image
                            src={slide.image}
                            priority={true}
                            objectFit="cover"
                            layout="fill"
                        />

                        {/* layer */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[#0000005d]"></div>

                        {/* Text */}
                        <div className={`px-5 md:px-16 lg:px-0 space-y-6 absolute top-[30%] lg:left-20 lg:w-1/2 transition-all duration-1000 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                            <div className="font-semibold text-white text-2xl md:text-4xl leading-relaxed md:leading-[3rem]">
                                {slide.title}
                            </div>

                            <div className="md:text-lg text-white leading-relaxed">
                                {slide.description}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export const About = () => {


    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div className="px-5 md:px-8 py-10 min-h-[100vh] flex items-center my-auto w-full relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 lg:gap-3 w-full z-10">

                <div className="flex justify-center items-center m-auto">
                    <div className="w-fit relative">
                        <Image
                            src={newimage}
                            alt="About Image"
                            className="w-full md:w-auto md:h-80 h-auto drop-shadow-xl"
                        />
                        <div className="drop-shadow-lg absolute w-full h-auto md:w-full md:h-80 bg-[#9f8e1b5c] -bottom-5 -left-5 -z-10"></div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="100" className="flex items-center my-auto">
                    <div>
                        <div className="font-semibold text-3xl">
                            About Us 
                        
                        </div>
                        <div className="my-4 leading-relaxed">
                            Accomate Global Pty Ltd is the brainchild of industry veterans with decades of experience in accounting, taxation, and financial services. Established with a mission to provide Australian businesses with tailored, high-quality financial solutions, we are proud to serve both established firms and small business entrepreneurs.
                            <br /><br />
                            Our core expertise lies in offering comprehensive accounting and taxation services. We help businesses streamline their financial operations, ensuring compliance with Australian regulations while optimizing tax strategies and improving financial accuracy.
                        </div>
                        <a href="/about" className="hover:bg-[#1B2D9F] duration-300 w-fit text-lg flex px-5 py-2 rounded-full text-white bg-[#9F8D1B] shadow-lg">
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute -right-10 -top-10 p-20 rounded-full bg-[#1b2d9f5b]"></div>
            <div className="absolute -left-10 -bottom-5 py-20 px-10 rounded-lg bg-[#1b2d9f5b]"></div>
        </div>
    )
}

export const Services = () => {

    const [hoverd, setHovered] = useState(true);
    const [type, setType] = useState('australia');
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1500,
        slides: {
            origin: 'center',
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    origin: 'auto',
                    perView: 1.6,
                    spacing: 16,
                },
            },
            '(min-width: 1024px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 32,
                },
            },
        },
    });
    const [sliderRef1, slider1] = useKeenSlider({
        loop: true,
        duration: 1500,
        slides: {
            origin: 'center',
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    origin: 'auto',
                    perView: 1.25,
                    spacing: 16,
                },
            },
            '(min-width: 1024px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 32,
                },
            },
        },
    });
    const [sliderRef2, slider2] = useKeenSlider({
        loop: true,
        duration: 1500,
        slides: {
            origin: 'center',
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    origin: 'auto',
                    perView: 1.25,
                    spacing: 16,
                },
            },
            '(min-width: 1024px)': {
                slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 32,
                },
            },
        },
    });

    const usaservices = [
        {
            icon: '/book.json',
            head: 'Accounting',
            desc: `At Accomate, we pride ourselves on offering offshore accountancy services tailored to meet the unique needs of each 
            client. Offshore bookkeeping services can save your business valuable time and money compared to hiring an in-house 
            bookkeeper.`,
            head2: 'Our accounting services include:',
            list: [
                'Bookkeeping and bank reconciliations',
                'Payroll processing (T4 &T5)',
                'Accounts payable and receivable management'
            ]
        },
        {
            icon: '/doc.json',
            head: 'Financial Statement Compilation',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            head2: 'Our financial statements compilation services include:',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            icon: '/zoom.json',
            head: 'Audit & Assurance',
            desc: 'Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain financial transparency and meet stringent regulatory requirements. Partner with our team of skilled auditors, for your peace of mind and a successful financial journey',
            head2: 'Our audit & assurance services including but not limited to:',
            list: [
                'Financial statement audits',
                'Internal control assessment and evaluations',
                'Risk assessments and Compliance audits'
            ]
        },
        {
            icon: '/privacy-policy.json',
            head: 'Tax Compilation',
            desc: `When tax filing deadlines approach, the rush can leave business owners and CPAs feeling overwhelmed. That's where Accomate steps in to shoulder the pressure. Our team of tax experts is well-versed in all the nitty-gritty details of US tax rules and stays up-to-date with IRS changes. By outsourcing your tax preparation, you can focus on your core business activities.`,
            head2: 'Our comprehensive tax services include:',
            list: [
                'Individual returns such as Form 1040, 1040NR, 1041',
                'Foreign investments compliances (Form 5471, 8865)',
                'Preparation of federal and state schedule K-1 reporting for investors',
            ]
        },
        {
            icon: '/home.json',
            head: 'Mortgage Broking',
            desc: `Grow your mortgage book faster and more efficiently 
            Accomte Global works with mortgage brokers, to support their operations, from processing the initial application through to mortgage discharge from the relevant authority.
            Reduce costs and gain experienced loan processors
            `,
            head2: 'Our mortgage broking services include:',
            list: [
                'Data entry and document verification',
                'Serviceability analysis',
                'Ordering property valuation',
                'Online Application and lodgment'
            ]
        },
    ];

    const canadaservices = [
        {
            icon: '/book.json',
            head: 'Accounting',
            desc: `At Accomate, we pride ourselves on offering offshore accountancy services tailored to meet the unique needs of each 
            client. Offshore bookkeeping services can save your business valuable time and money compared to hiring an in-house 
            bookkeeper.`,
            head2: 'Our accounting services include:',
            list: [
                'Data entry',
                'Payroll processing (T4 &T5)',
                'Accounts payable / receivable management'
            ]
        },
        {
            icon: '/payroll.json',
            head: 'Payroll Processing',
            desc: 'Our services are designed to meet the various needs of businesses and accounting professionals. By outsourcing payroll preparation to Accomate, you can focus on your business while we handle inefficiencies, reporting, and cost-cutting.',
            head2: 'Our payroll services include:',
            list: [
                'Payroll accounting and prompt processing and filing',
                'Annual filing of T4 and T5 slips for all employees',
                'Payroll Tax management and compliance'
            ]
        },
        {
            icon: '/doc.json',
            head: 'Financial Statement Compilation',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            head2: 'Our financial statements compilation services for corporates and trusts includes preparation of:',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            icon: '/zoom.json',
            head: 'Audit & Assurance',
            desc: 'Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain financial transparency and meet stringent regulatory requirements. Partner with our team of skilled auditors, for your peace of mind and a successful financial journey',
            head2: 'Our audit & assurance services including but not limited to:',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries'
            ]
        },
        {
            icon: '/privacy-policy.json',
            head: 'Tax Compilation',
            desc: `When tax filing deadlines approach, the rush can leave business owners and CPAs feeling overwhelmed. That's where Accomate steps in to shoulder the pressure. Our team of tax experts is well-versed in all the nitty-gritty details of US tax rules and stays up-to-date with IRS changes. By outsourcing your tax preparation, you can focus on your core business activities.`,
            head2: 'Our comprehensive tax services include:',
            list: [
                'Preparation and filing of GST returns',
                'Payroll Tax management and filings',
                'Tax guidance and Tax Planning',
            ]
        },
    ];

    const australiaservices = [
        {
            icon: '/book.json',
            head: 'Accounting',
            desc: `At Accomate, we pride ourselves on offering offshore accountancy services tailored to meet the unique needs of each 
            client. Offshore bookkeeping services can save your business valuable time and money compared to hiring an in-house 
            bookkeeper.`,
            head2: 'Our accounting services include:',
            list: [
                'Data entry',
                'Bank reconciliation',
                'Accounts payable / receivable management'
            ]
        },
        {
            icon: '/doc.json',
            head: 'Financial Statement Compilation',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            head2: 'Our financial statements compilation services for corporates and trusts includes preparation of:',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            icon: '/zoom.json',
            head: 'Audit & Assurance',
            desc: 'Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain financial transparency and meet stringent regulatory requirements. Partner with our team of skilled auditors, for your peace of mind and a successful financial journey',
            head2: 'Our audit & assurance services including but not limited to:',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries',
            ]
        },
        {
            icon: '/privacy-policy.json',
            head: 'Tax Compilation',
            desc: `When tax filing deadlines approach, the rush can leave business owners and CPAs feeling overwhelmed. That's where Accomate steps in to shoulder the pressure. Our team of tax experts is well-versed in all the nitty-gritty details of US tax rules and stays up-to-date with IRS changes. By outsourcing your tax preparation, you can focus on your core business activities.`,
            head2: 'Our comprehensive tax services include:',
            list: [
                'Tax guidance and Tax Planning',
                'Managing PAYG Tax / Payroll Taxation',
                'Preparation of Business Activity Statements (Bases)',
            ]
        },
        {
            icon: '/pig.json',
            head: 'Managing SMSF',
            desc: `Even though, SMSF provides excellent control of funds transfer after retirement, developing and managing SMSF compliance requirements is not only challenging but also time-consuming. 
            However, Our highly experienced fund advisors work closely with you to help you with end-to-end SMSF administration services
            `,
            head2: 'Below are the services we provide for SMSF:',
            list: [
                'SMSF accounting',
                'Ensuring Compliance with regulations',
                'Preparation of SMSF Tax Returns',
                'Preparation of audit workpapers',
            ]
        },
        {
            icon: '/home.json',
            head: 'Mortgage Broking',
            desc: `Grow your mortgage book faster and more efficiently 
            Accomte Global works with mortgage brokers, to support their operations, from processing the initial application through to mortgage discharge from the relevant authority.
            Reduce costs and gain experienced loan processors
            `,
            head2: 'Our mortgage broking services include:',
            list: [
                'Data entry and document verification',
                'Serviceability analysis',
                'Ordering property valuation',
                'Online Application and lodgment'
            ]
        },
    ];

    const handleNext = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider.current) {
            slider.current.next();
        }
    };

    const handlePrev = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider.current) {
            slider.current.prev();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider && slider.current && hoverd) {
                slider.current.next();
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [slider, hoverd]);

    const handleNext1 = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider1.current) {
            slider1.current.next();
        }
    };

    const handlePrev1 = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider1.current) {
            slider1.current.prev();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider1 && slider1.current && hoverd) {
                slider1.current.next();
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [slider1, hoverd]);

    const handleNext2 = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider2.current) {
            slider2.current.next();
        }
    };

    const handlePrev2 = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (slider2.current) {
            slider2.current.prev();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider2 && slider2.current && hoverd) {
                slider2.current.next();
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [slider2, hoverd]);

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div className="px-6 md:px-8 py-16 bg-gray-100">
            {/* <div className="text-[#1B2D9F] flex justify-center mx-auto text-center">Our Services</div> */}
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="font-semibold text-3xl flex justify-center mx-auto text-center">
                Our Services
            </div>

            <div className="mt-10 ">

                {/* Country */}
                {/* <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="flex justify-center items-center m-auto pb-10">
                    <div className="w-full lg:w-1/2 block md:flex items-center my-auto space-y-5 md:space-y-0 md:space-x-5">
                        <button onClick={() => setType('usa')} className={`${type == 'usa' ? 'bg-[#1B2D9F] text-white' : ''} w-[70%] rounded-full flex justify-center items-center m-auto border-2 border-[#1B2D9F] hover:scale-[110%] duration-300`}>
                            <div className="bg-white p-1 rounded-full border-r-2 border-[#1B2D9F]">
                                <Image
                                    src={USA}
                                    alt="USA"
                                    className="h-10 w-10 rounded-full "
                                />
                            </div>
                            <div className="flex justify-center mx-auto text-center text-lg">
                                USA
                            </div>
                        </button>
                        <button onClick={() => setType('canada')} className={`${type == 'canada' ? 'bg-[#1B2D9F] text-white' : ''} w-[70%] rounded-full flex justify-center items-center m-auto border-2 border-[#1B2D9F] hover:scale-[110%] duration-300`}>
                            <div className="bg-white p-1 rounded-full border-r-2 border-[#1B2D9F]">
                                <Image
                                    src={Canada}
                                    alt="Canada"
                                    className="h-10 w-10 rounded-full "
                                />
                            </div>
                            <div className="flex justify-center mx-auto text-center text-lg">
                                Canada
                            </div>
                        </button>
                        <button onClick={() => setType('australia')} className={`${type == 'australia' ? 'bg-[#1B2D9F] text-white' : ''} w-[70%] rounded-full flex justify-center items-center m-auto border-2 border-[#1B2D9F] hover:scale-[110%] duration-300`}>
                            <div className="bg-white p-1 rounded-full border-r-2 border-[#1B2D9F]">
                                <Image
                                    src={Australia}
                                    alt="Australia"
                                    className="h-10 w-10 rounded-full "
                                />
                            </div>
                            <div className="flex justify-center mx-auto text-center text-lg">
                                Australia
                            </div>
                        </button>
                    </div>
                </div> */}

                {/* Services */}
                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500" className="px-4 relative">
                    {type == 'usa' ?
                        <div ref={sliderRef} className="keen-slider">

                            {usaservices.map((i, index) => {

                                const truncateText = (text, maxLength) => {
                                    if (text.length <= maxLength) return text;
                                    return text.substring(0, maxLength) + ' ...';
                                };
                                return (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setHovered(false)}
                                        onMouseLeave={() => setHovered(true)}
                                        className="keen-slider__slide rounded-lg shadow-lg cursor-pointer">
                                        <blockquote className="bg-white w-full border border-gray-400 rounded-lg shadow-lg px-3 py-5 h-full flex ">
                                            <div className="space-y-4 flex flex-col justify-between items-center relative w-full">

                                                <div className="flex justify-center mx-auto">
                                                    <Lordicon
                                                        src={i.icon}
                                                        trigger="loop"
                                                        style={{ width: '100px', height: '100px' }}
                                                    />
                                                </div>

                                                <div className="text-center font-semibold text-[#1B2D9F] text-xl flex justify-center mx-auto">
                                                    {i.head}
                                                </div>

                                                {/* <div className="font-semibold flex justify-start">
                                                    {i.head2}
                                                </div> */}

                                                <div className="flex leading-relaxed">
                                                    {truncateText(i.desc, 100)}
                                                </div>

                                                <ul className="w-full list-disc pl-4">
                                                    {i.list.slice(0, 3).map((j, ind) => (
                                                        <li key={ind}>
                                                            {truncateText(j, 15)}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <a href="/services/usa" className="w-fit hover:bg-[#1B2D9F] duration-300 bg-[#9F8D1B] text-white px-5 py-2 rounded-full shadow-lg flex justify-center mx-auto">
                                                    Read More
                                                </a>
                                            </div>
                                        </blockquote>
                                    </div>

                                )
                            })}

                        </div> :
                        type == 'canada' ?
                            <div ref={sliderRef1} className="keen-slider">

                                {canadaservices.map((i, index) => {

                                    const truncateText = (text, maxLength) => {
                                        if (text.length <= maxLength) return text;
                                        return text.substring(0, maxLength) + ' ...';
                                    };
                                    return (
                                        <div
                                            key={index}
                                            onMouseEnter={() => setHovered(false)}
                                            onMouseLeave={() => setHovered(true)}
                                            className="keen-slider__slide rounded-lg shadow-lg cursor-pointer">
                                            <blockquote className="bg-white w-full border border-gray-400 rounded-lg shadow-lg px-3 py-5 h-full flex ">
                                                <div className="space-y-4 flex flex-col justify-between items-center relative w-full">

                                                    <div className="flex justify-center mx-auto">
                                                        <Lordicon
                                                            src={i.icon}
                                                            trigger="loop"
                                                            style={{ width: '100px', height: '100px' }}
                                                        />
                                                    </div>

                                                    <div className="text-center font-semibold text-[#1B2D9F] text-xl flex justify-center mx-auto">
                                                        {i.head}
                                                    </div>

                                                    {/* <div className="font-semibold flex justify-start">
                                                        {i.head2}
                                                    </div>

                                                    <ul className="w-full list-disc pl-4">
                                                        {i.list.map((j) => (
                                                            <li>
                                                                {j}
                                                            </li>
                                                        ))}
                                                    </ul> */}

                                                    <div className="flex">
                                                        {truncateText(i.desc, 100)}
                                                    </div>

                                                    <ul className="w-full list-disc pl-4">
                                                        {i.list.slice(0, 3).map((j, ind) => (
                                                            <li key={ind}>
                                                                {truncateText(j, 15)}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <a href="/services/canada" className="w-fit hover:bg-[#1B2D9F] duration-300 bg-[#9F8D1B] text-white px-5 py-2 rounded-full shadow-lg flex justify-center mx-auto">
                                                        Read More
                                                    </a>
                                                </div>
                                            </blockquote>
                                        </div>

                                    )
                                })}

                            </div> :
                            type == 'australia' ?
                                <div ref={sliderRef2} className="keen-slider">

                                    {australiaservices.map((i, index) => {

                                        const truncateText = (text, maxLength) => {
                                            if (text.length <= maxLength) return text;
                                            return text.substring(0, maxLength) + ' ...';
                                        };

                                        return (
                                            <div
                                                key={index}
                                                onMouseEnter={() => setHovered(false)}
                                                onMouseLeave={() => setHovered(true)}
                                                className="keen-slider__slide rounded-lg shadow-lg cursor-pointer">
                                                <blockquote className="bg-white w-full border border-gray-400 rounded-lg shadow-lg px-3 py-5 h-full flex ">
                                                    <div className="space-y-4 flex flex-col justify-between items-center relative w-full">

                                                        <div className="flex justify-center mx-auto">
                                                            <Lordicon
                                                                src={i.icon}
                                                                trigger="loop"
                                                                style={{ width: '100px', height: '100px' }}
                                                            />
                                                        </div>

                                                        <div className="text-center font-semibold text-[#1B2D9F] text-xl flex justify-center mx-auto">
                                                            {i.head}
                                                        </div>

                                                        {/* <div className="font-semibold flex justify-start">
                                                            {i.head2}
                                                        </div>

                                                        <ul className="w-full list-disc pl-4">
                                                            {i.list.map((j) => (
                                                                <li>
                                                                    {j}
                                                                </li>
                                                            ))}
                                                        </ul> */}

                                                        <div className="flex leading-relaxed">
                                                            {truncateText(i.desc, 100)}
                                                        </div>

                                                        <ul className="w-full list-disc pl-4">
                                                            {i.list.slice(0, 3).map((j, ind) => (
                                                                <li key={ind}>
                                                                    {truncateText(j, 15)}
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        <a href="/services/australia" className="w-fit hover:bg-[#1B2D9F] duration-300 bg-[#9F8D1B] text-white px-5 py-2 rounded-full shadow-lg flex justify-center mx-auto">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </blockquote>
                                            </div>

                                        )
                                    })}

                                </div>
                                : ''}


                    {/* Prev Button */}
                    <button onClick={type == 'usa' ? () => handlePrev() : type == 'canada' ? () => handlePrev1() : () => handlePrev2()} className=" absolute -left-6 top-1/2 p-2 bg-white border-2 border-[#1B2D9F] text-[#1B2D9F] rounded-full">
                        <FaChevronLeft />
                    </button>

                    {/* Next Button */}
                    <button onClick={type == 'usa' ? () => handleNext() : type == 'canada' ? () => handleNext1() : () => handleNext2()} className=" absolute -right-6 top-1/2 p-2 bg-white border-2 border-[#1B2D9F] text-[#1B2D9F] rounded-full">
                        <FaChevronRight />
                    </button>
                </div>

            </div>
        </div>
    )
}

export const Software = () => {

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div className="px-5 md:px-8 py-16 lg:min-h-[100vh] flex items-center my-auto w-full">
            <div className="lg:grid grid-cols-2 gap-3 w-full">

                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="flex items-center my-auto">
                    <div className="space-y-8 lg:space-y-6">
                        <div className="font-semibold text-3xl leading-relaxed">
                            We prioritize adaptability, agility, and unwavering reliability.
                        </div>

                        {/* SM Circular animate */}
                        <div className="md:hidden w-full flex justify-center items-center m-auto">
                            <div className="relative p-14 rounded-full">

                                <div className="relative p-12 rounded-full">

                                    <div className="relative p-10 rounded-full">

                                        <div className="relative hover:scale-[110%] duration-300 cursor-pointer z-40">
                                            <Image
                                                src={CircleIcon}
                                                alt="Main Icon"
                                                className="h-12 w-auto shadow-md rounded-full "
                                            />
                                        </div>

                                        {/* ====== First Circle ======= */}
                                        <div className="absolute top-0 left-0 border-dashed border-2 border-gray-400 w-full h-full rounded-full">
                                            <div className="relative w-full h-full rounded-full rotate-animation">
                                                <div className="rounded-full h-10 w-10 shadow-lg bg-white p-2 flex items-center border border-gray-300 absolute top-0 left-0">
                                                    <Image
                                                        src={Afg}
                                                        alt="Main Icon"
                                                        className="h-auto w-auto bg-white flex items-center my-auto"
                                                    />
                                                </div>
                                                <div className="rounded-full h-10 w-10 shadow-lg bg-white p-2 border border-gray-300 absolute bottom-0 right-0">
                                                    <Image
                                                        src={Xodo}
                                                        alt="Main Icon"
                                                        className="h-auto w-auto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* ======== Second Circle ======== */}
                                    <div className="absolute top-0 left-0  w-full h-full border-dashed border-2 border-gray-400 rounded-full">
                                        <div className="relative w-full h-full rotate-animation2">
                                            <div className="rounded-full h-12 w-12 shadow-lg bg-white p-2 flex items-center border border-gray-300 absolute -top-5 left-1/2 ">
                                                <Image
                                                    src={Infinity}
                                                    alt="Main Icon"
                                                    className="h-auto w-auto bg-white"
                                                />
                                            </div>
                                            <div className="rounded-full h-12 w-12 shadow-lg bg-white p-2 flex items-center border border-gray-300 absolute -bottom-5 right-1/2 ">
                                                <Image
                                                    src={Proconnect}
                                                    alt="Main Icon"
                                                    className="h-auto w-auto bg-white"
                                                />
                                            </div>
                                            <div className="rounded-full h-12 w-12 shadow-lg bg-white p-3 border border-gray-300 absolute bottom-1/2 -right-5 ">
                                                <Image
                                                    src={Broker}
                                                    alt="Main Icon"
                                                    className="h-auto w-auto bg-white"
                                                />
                                            </div>
                                            <div className="rounded-full h-12 w-12 shadow-lg bg-white p-2 border border-gray-300 absolute top-1/2 -left-5 ">
                                                <Image
                                                    src={BGL}
                                                    alt="Main Icon"
                                                    className="h-auto w-auto bg-white"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                {/* ======== Third Circle ======== */}
                                <div className="absolute top-0 left-0  w-full h-full border-dashed border-2 border-gray-400 rounded-full">
                                    <div className="relative w-full h-full rotate-animation3">
                                        <div className="rounded-full h-12 w-12 shadow-lg bg-white p-2 border border-gray-300 absolute top-1/2 -left-5 ">
                                            <Image
                                                src={Quickbooks}
                                                alt="Main Icon"
                                                className="h-auto w-auto bg-white"
                                            />
                                        </div>
                                        <div className="rounded-full h-12 w-12 shadow-lg bg-white p-2 border border-gray-300 absolute top-1/2 -right-5">
                                            <Image
                                                src={SalesTrekker}
                                                alt="Main Icon"
                                                className="h-auto w-auto  bg-white"
                                            />
                                        </div>
                                        <div className="rounded-full h-12 w-12 shadow-lg bg-white p-2 border border-gray-300 absolute -bottom-5 right-[30%]">
                                            <Image
                                                src={Xero}
                                                alt="Main Icon"
                                                className="h-auto w-auto bg-white"
                                            />
                                        </div>
                                        <div className="rounded-full h-12 w-12 shadow-lg bg-white p-2 border border-gray-300 absolute -top-5 left-[30%]">
                                            <Image
                                                src={Certified}
                                                alt="Main Icon"
                                                className="h-auto w-auto bg-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MD Circular animate */}
                        <div className="lg:hidden hidden md:flex items-center justify-center m-auto scale-[50%] md:scale-[100%] w-full">

                            <div className="relative p-20 rounded-full">

                                <div className="relative p-16 rounded-full">

                                    <div className="relative p-12 rounded-full">
                                        {/* Main icon */}
                                        <div className="relative hover:scale-[110%] duration-300 cursor-pointer z-40">
                                            <Image
                                                src={CircleIcon}
                                                alt="Main Icon"
                                                className="h-20 w-auto shadow-md rounded-full "
                                            />
                                        </div>

                                        {/* ====== First Circle ======= */}
                                        <div className="absolute top-0 left-0 border-dashed border-2 border-gray-400 w-full h-full rounded-full">
                                            <div className="relative w-full h-full rounded-full rotate-animation">
                                                <div className="rounded-full h-12 w-12 shadow-lg bg-white p-3 flex items-center border border-gray-300 absolute top-0 left-0">
                                                    <Image
                                                        src={Afg}
                                                        alt="Main Icon"
                                                        className="h-auto w-auto bg-white flex items-center my-auto"
                                                    />
                                                </div>
                                                <div className="rounded-full h-12 w-12 shadow-lg bg-white p-3 border border-gray-300 absolute bottom-0 right-0">
                                                    <Image
                                                        src={Xodo}
                                                        alt="Main Icon"
                                                        className="h-auto w-auto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ======== Second Circle ======== */}
                                    <div className="absolute top-0 left-0  w-full h-full border-dashed border-2 border-gray-400 rounded-full">
                                        <div className="relative w-full h-full rotate-animation2">
                                            <div className="rounded-full h-16 w-16 shadow-lg bg-white p-3 flex items-center border border-gray-300 absolute -top-5 left-1/2 ">
                                                <Image
                                                    src={Infinity}
                                                    alt="Main Icon"
                                                    className="h-auto w-auto bg-white"
                                                />
                                            </div>
                                            <div className="rounded-full h-14 w-14 shadow-lg bg-white p-3 flex items-center border border-gray-300 absolute -bottom-5 right-1/2 ">
                                                <Image
                                                    src={Proconnect}
                                                    alt="Main Icon"
                                                    className="h-auto w-auto bg-white"
                                                />
                                            </div>
                                            <div className="rounded-full h-16 w-16 shadow-lg bg-white p-3 border border-gray-300 absolute bottom-1/2 -right-5 ">
                                                <Image
                                                    src={Broker}
                                                    alt="Main Icon"
                                                    className="h-auto w-auto bg-white"
                                                />
                                            </div>
                                            <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 border border-gray-300 absolute top-1/2 -left-5 ">
                                                <Image
                                                    src={BGL}
                                                    alt="Main Icon"
                                                    className="h-auto w-auto bg-white"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* ======== Third Circle ======== */}
                                <div className="absolute top-0 left-0  w-full h-full border-dashed border-2 border-gray-400 rounded-full">
                                    <div className="relative w-full h-full rotate-animation3">
                                        <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 border border-gray-300 absolute top-1/2 -left-5 ">
                                            <Image
                                                src={Quickbooks}
                                                alt="Main Icon"
                                                className="h-auto w-auto bg-white"
                                            />
                                        </div>
                                        <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 border border-gray-300 absolute top-1/2 -right-5">
                                            <Image
                                                src={SalesTrekker}
                                                alt="Main Icon"
                                                className="h-auto w-auto  bg-white"
                                            />
                                        </div>
                                        <div className="rounded-full h-16 w-16 shadow-lg bg-white p-2 border border-gray-300 absolute -bottom-5 right-[30%]">
                                            <Image
                                                src={Xero}
                                                alt="Main Icon"
                                                className="h-auto w-auto bg-white"
                                            />
                                        </div>
                                        <div className="rounded-full h-16 w-16 shadow-lg bg-white p-2 border border-gray-300 absolute -top-5 left-[30%]">
                                            <Image
                                                src={Certified}
                                                alt="Main Icon"
                                                className="h-auto w-auto bg-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-4 leading-relaxed">
                            This means we can handle any accounting software you use. At Accomate Global, our team is fluent in all leading accounting software. No matter your current system, we seamlessly adapt to become your financial partner.
                            <br /><br />
                            Ready to simplify your finances and empower your success? Contact us today for a free consultation!
                        </div>

                        {/* <button className="hover:bg-[#1B2D9F] duration-300 text-lg flex px-5 py-2 rounded-full text-white bg-[#9F8D1B] shadow-lg">
                            Read More
                        </button> */}
                    </div>
                </div>

                {/* Circular animate */}
                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="300" className="hidden lg:flex items-center justify-center m-auto scale-[50%] md:scale-[90%] lg:scale-[100%] w-full">

                    <div className="relative p-20 rounded-full">

                        <div className="relative p-16 rounded-full">

                            <div className="relative p-12 rounded-full">
                                {/* Main icon */}
                                <div className="relative hover:scale-[110%] duration-300 cursor-pointer z-40">
                                    <Image
                                        src={CircleIcon}
                                        alt="Main Icon"
                                        className="h-20 w-auto shadow-md rounded-full "
                                    />
                                </div>

                                {/* ====== First Circle ======= */}
                                <div className="absolute top-0 left-0 border-dashed border-2 border-gray-400 w-full h-full rounded-full">
                                    <div className="relative w-full h-full rounded-full rotate-animation">
                                        <div className="rounded-full h-12 w-12 shadow-lg bg-white p-3 flex items-center border border-gray-300 absolute top-0 left-0">
                                            <Image
                                                src={Afg}
                                                alt="Main Icon"
                                                className="h-auto w-auto bg-white flex items-center my-auto"
                                            />
                                        </div>
                                        <div className="rounded-full h-12 w-12 shadow-lg bg-white p-3 border border-gray-300 absolute bottom-0 right-0">
                                            <Image
                                                src={Xodo}
                                                alt="Main Icon"
                                                className="h-auto w-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ======== Second Circle ======== */}
                            <div className="absolute top-0 left-0  w-full h-full border-dashed border-2 border-gray-400 rounded-full">
                                <div className="relative w-full h-full rotate-animation2">
                                    <div className="rounded-full h-16 w-16 shadow-lg bg-white p-3 flex items-center border border-gray-300 absolute -top-5 left-1/2 ">
                                        <Image
                                            src={Infinity}
                                            alt="Main Icon"
                                            className="h-auto w-auto bg-white"
                                        />
                                    </div>
                                    <div className="rounded-full h-14 w-14 shadow-lg bg-white p-3 flex items-center border border-gray-300 absolute -bottom-5 right-1/2 ">
                                        <Image
                                            src={Proconnect}
                                            alt="Main Icon"
                                            className="h-auto w-auto bg-white"
                                        />
                                    </div>
                                    <div className="rounded-full h-16 w-16 shadow-lg bg-white p-3 border border-gray-300 absolute bottom-1/2 -right-5 ">
                                        <Image
                                            src={Broker}
                                            alt="Main Icon"
                                            className="h-auto w-auto bg-white"
                                        />
                                    </div>
                                    <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 border border-gray-300 absolute top-1/2 -left-5 ">
                                        <Image
                                            src={BGL}
                                            alt="Main Icon"
                                            className="h-auto w-auto bg-white"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* ======== Third Circle ======== */}
                        <div className="absolute top-0 left-0  w-full h-full border-dashed border-2 border-gray-400 rounded-full">
                            <div className="relative w-full h-full rotate-animation3">
                                <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 border border-gray-300 absolute top-1/2 -left-5 ">
                                    <Image
                                        src={Quickbooks}
                                        alt="Main Icon"
                                        className="h-auto w-auto bg-white"
                                    />
                                </div>
                                <div className="rounded-full h-14 w-14 shadow-lg bg-white p-2 border border-gray-300 absolute top-1/2 -right-5">
                                    <Image
                                        src={SalesTrekker}
                                        alt="Main Icon"
                                        className="h-auto w-auto  bg-white"
                                    />
                                </div>
                                <div className="rounded-full h-16 w-16 shadow-lg bg-white p-2 border border-gray-300 absolute -bottom-5 right-[30%]">
                                    <Image
                                        src={Xero}
                                        alt="Main Icon"
                                        className="h-auto w-auto bg-white"
                                    />
                                </div>
                                <div className="rounded-full h-16 w-16 shadow-lg bg-white p-2 border border-gray-300 absolute -top-5 left-[30%]">
                                    <Image
                                        src={Certified}
                                        alt="Main Icon"
                                        className="h-auto w-auto bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export const Counter = () => {

    const [counters, setCounters] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
        counter4: 0
    });

    useEffect(() => {
        const updateCounters = () => {
            setCounters(prevCounters => ({
                counter1: prevCounters.counter1 < 15000 ? prevCounters.counter1 + 1500 : prevCounters.counter1,
                counter2: prevCounters.counter2 < 100 ? prevCounters.counter2 + 10 : prevCounters.counter2,
                counter3: prevCounters.counter3 < 900 ? prevCounters.counter3 + 90 : prevCounters.counter3,
                counter4: prevCounters.counter4 < 500 ? prevCounters.counter4 + 50 : prevCounters.counter4
            }));
        };

        const countersSection = document.getElementById("counters-section");

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const interval = setInterval(updateCounters, 200);
                        return () => clearInterval(interval);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(countersSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="block px-5 md:px-8 py-20 min-h-[90vh] md:min-h-[35vh] w-full home-counter relative">
            <div className="absolute w-full h-full bg-[#00000084] top-0 left-0 px-5 md:px-8 py-16 flex items-center my-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-7 lg:gap-5 w-full" id="counters-section">

                    <div className="flex lg:justify-center lg:mx-auto">
                        <div className="flex text-white gap-x-4">
                            <BsFileEarmarkCheck className="h-20 w-auto mt-1" />
                            <div className="font-semibold">
                                <div className="text-[40px]"><span id="counter1">{counters.counter1}</span> +</div>
                                <div className="text-lg">INVOICES PROCESSED</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:justify-center lg:mx-auto">
                        <div className="flex text-white gap-x-4">
                            <HiOutlinePresentationChartLine className="h-20 w-auto mt-1" />
                            <div className="font-semibold">
                                <div className="text-[40px]"><span id="counter2">{counters.counter2}</span> +</div>
                                <div className="text-lg">SMSF RETURNS</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:justify-center lg:mx-auto">
                        <div className="flex text-white gap-x-4">
                            <BsFileEarmarkFont className="h-20 w-auto mt-1" />
                            <div className="font-semibold">
                                <div className="text-[40px]"><span id="counter3">{counters.counter3}</span> +</div>
                                <div className="text-lg">TAX RETURNS</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:justify-center lg:mx-auto">
                        <div className="flex text-white gap-x-4">
                            <PiUsersThree className="h-20 w-auto mt-1" />
                            <div className="font-semibold">
                                <div className="text-[40px]"><span id="counter4">{counters.counter4}</span> +</div>
                                <div className="text-lg">HAPPY CLIENTS</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export const Testimonial = () => {

    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        autoplay: true,
        autoplaySpeed: 2000,
        waitForAnimate: false,
        pauseOnHover: true,
        beforeChange: (current, next) => setCurrentSlide(next),
        customPaging: function (i) {
            return (
                <div className={`p-1 rounded-full mt-6 ${currentSlide === i ? 'bg-black' : 'bg-gray-300'}`}>
                </div>
            );
        },
    };

    const clientele = [
        { name: 'Biren Joshi', company: 'Excel Financial Solutions', desc: 'Partnering with Accomate Global for all our ……. and other tax-related issues have benefited immensely.  We can always count on their highly professional quality of work with a proactive approach. They have also given us very sound guidance, counsel, and options. We never had to look back at this relationship. We truly value this partnership with Accomate Global and look forward to working with them for a long time.' },
        { name: 'Biren Joshi', company: 'Excel Financial Solutions', desc: 'Accomate Global has been a game-changer for our business. Their outsourcing solutions have significantly reduced our accounting costs, saving valuable time and resources. Working with them looks pretty seamless and hassle-free. We are confident that our partnership with Accomate Global will continue contributing to our long-term financial success.' },
        { name: 'Biren Joshi', company: 'Excel Financial Solutions', desc: `Being a client of Accomate Global has been an absolute pleasure. We have an expert veteran as our dedicated single point of contact, which has proven incredibly beneficial. Ronak/Pankaj's professionalism and deep industry knowledge have provided invaluable insights and guidance. Their personalized approach ensures efficient and effective communication, a huge advantage. I hope for this relationship to grow stronger and more fruitful.` },
        { name: 'Biren Joshi', company: 'Excel Financial Solutions', desc: `For Mortgage broking need help from Biren, need to understand the process to highlight, how it has given better loan suggestions, and reduce their time to concentrate on increasing clientele.` }
    ];

    return (
        <div className="px-5 md:px-8 py-14">
            {/* <div className="text-[#1B2D9F] flex justify-center mx-auto text-center">Testimonials</div> */}
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="font-semibold text-3xl flex justify-center mx-auto text-center">
                Testimonials
            </div>

            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="300" className="mt-10 pb-6 relative">
                <div className="absolute top-0 -left-2 lg:left-[17%]">
                    <FaQuoteLeft className="text-[#1b2d9f5b] h-6 w-auto" />
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {clientele.map((i, index) => {
                        return (
                            <div key={index} className="w-full">
                                <div className="italic text-center flex justify-center mx-auto lg:w-[60%]">
                                    {i.desc}
                                </div>
                                <div className="mt-5">
                                    <div className="text-[#9F8D1B] text-center font-semibold text-xl">
                                        {i.name}
                                    </div>
                                    <div className="text-center">
                                        {i.company}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export const Clients = () => {
    return (
        <div className="px-8 py-16 bg-gray-100 space-y-12">

            <div className="flex w-full space-x-4">

                <div className="lg:w-[35%] flex items-center justify-center m-auto text-center">
                    <div className="space-y-5">
                        <div className="font-semibold text-3xl flex justify-center mx-auto text-center">
                            Clients We Help Thrive
                        </div>
                        <div>
                            Accomate Global is dedicated to providing outsourcing services to various clientele
                            and then in horizontal line add above clientel  with different icons if possible.
                        </div>
                    </div>
                </div>

                <div className="lg:w-[65%] px-4 grid grid-cols-2 gap-x-6 gap-y-10">
                    <div className="flex items-center my-auto space-x-4">
                        <div className="p-4 rounded-full text-white bg-[#1B2D9F] shadow-lg">
                            <MdGroups className="h-14 w-14" />
                        </div>
                        <div className="font-semibold text-2xl text-[#9F8D1B]">
                            Individual
                        </div>
                    </div>
                    <div className="flex items-center my-auto space-x-4">
                        <div className="p-4 rounded-full text-white bg-[#1B2D9F] shadow-lg">
                            <CgOrganisation className="h-14 w-14" />
                        </div>
                        <div className="font-semibold text-2xl text-[#9F8D1B]">
                            Company
                        </div>
                    </div>
                    <div className="flex items-center my-auto space-x-4">
                        <div className="p-4 rounded-full text-white bg-[#1B2D9F] shadow-lg">
                            <FaHandshakeAngle className="h-14 w-14" />
                        </div>
                        <div className="font-semibold text-2xl text-[#9F8D1B]">
                            Trust
                        </div>
                    </div>
                    <div className="flex items-center my-auto space-x-4">
                        <div className="p-4 rounded-full text-white bg-[#1B2D9F] shadow-lg">
                            <TbMoneybag className="h-14 w-14" />
                        </div>
                        <div className="font-semibold text-2xl text-[#9F8D1B]">
                            SMSF
                        </div>
                    </div>
                    <div className="flex items-center my-auto space-x-4">
                        <div className="p-4 rounded-full text-white bg-[#1B2D9F] shadow-lg">
                            <HiBuildingStorefront className="h-14 w-14" />
                        </div>
                        <div className="font-semibold text-2xl text-[#9F8D1B]">
                            Small Businesses
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}