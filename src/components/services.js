'use client'
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"
import Image from "next/image";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import AboutImg from "../../public/accounts.jpg"
import Benefits from "../../public/benefits.jpg"
import IndustryImg from "../../public/industry.jpg"
import RelationImg from "../../public/relation.jpg"
import AccountsImg from "../../public/accounts2.jpg"
import AccountsImg2 from "../../public/accounts3.jpg"
import WhyusImg from "../../public/whyus.jpg"
import ReactCardFlip from "react-card-flip";

import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa6";
import { MdCardGiftcard, MdCheckCircleOutline, MdOutlineAttachMoney, MdSpeed } from "react-icons/md";
import { FaChevronDown, FaCreditCard, FaMoneyBillWave, FaQuestion, FaRocket, FaUniversity } from "react-icons/fa";
import { HiOutlineUsers, HiShieldCheck } from "react-icons/hi2";
import { RiFilePaper2Line } from "react-icons/ri";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiTrendingDown } from "react-icons/fi";
import { IoMdSpeedometer } from "react-icons/io";

export const Usa = () => {

    const [flip, setFlip] = useState('');
    const [f2, setf2] = useState(false);
    const [f3, setf3] = useState(false);
    const usaservices = [
        {
            img: '/accounts.png',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            desc: `At Accomate, we pride ourselves on offering offshore accountancy services tailored to meet the unique needs of each 
            client. Offshore bookkeeping services can save your business valuable time and money compared to hiring an in-house 
            bookkeeper.`,
            list: [
                'Bookkeeping and bank reconciliations',
                'Payroll processing (T4 &T5)',
                'Accounts payable and receivable management'
            ]
        },
        {
            img: '/accounts.png',
            head: 'Financial Statement Compilation',
            head2: 'Our financial statements compilation services include:',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            img: '/payroll.png',
            head: 'Audit & Assurance',
            head2: 'Our audit & assurance services encompass a wide range of areas, including but not limited to:',
            desc: 'Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain financial transparency and meet stringent regulatory requirements. Partner with our team of skilled auditors, for your peace of mind and a successful financial journey',
            list: [
                'Financial statement audits',
                'Internal control assessment and evaluations',
                'Risk assessments and Compliance audits',
                'Compliance audits'
            ]
        },
        {
            img: '/taxation.png',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            desc: `When tax filing deadlines approach, the rush can leave business owners and CPAs feeling overwhelmed. That's where Accomate steps in to shoulder the pressure. Our team of tax experts is well-versed in all the nitty-gritty details of US tax rules and stays up-to-date with IRS changes. By outsourcing your tax preparation, you can focus on your core business activities.`,
            list: [
                'Preparation of U.S. federal returns and state tax returns including composite tax returns, state tax returns, PTE state tax returns',
                'Business returns such as Form 1065 (pass through), 1120S (pass through), 1120 (corp)',
                'Individual returns such as Form 1040, 1040NR, 1041',
                'Handling multi state returns with allocation factor, confirming and non confirming state',
                'Tax planning to take most advantageous tax incidence',
                'Filing form 3115 for suggested method change like change in method of accounting, Depreciation to be more advantageous.',
                'Preparation of tax Forms 8949, 4797, 8825, 8990, 8082, 8832-B',
                'Preparation of federal and state schedule K-1 reporting for investors',
                'Foreign investments compliances (Form 5471, 8865)',
                'Non-U.S. investors tax reporting and compliance including FBar reporting (Form 1042, 8804, 8805)',
                'International reporting tax forms K-2 and K-3 and other miscellaneous forms',
                `Handling IRS and state revenue notices, book-to-tax reconciliations, maintaining tax basis for investor's capital and fund's investment etc`,
                'Tax lot level capital gain/loss calculations, wash sales calculation',
            ]
        },
        {
            img: '/payroll.png',
            head: 'Mortgage Broking',
            head2: 'Our mortgage broking services include:',
            desc: `Grow your mortgage book faster and more efficiently 
            Accomte Global works with mortgage brokers, to support their operations, from processing the initial application through to mortgage discharge from the relevant authority.
            Reduce costs and gain experienced loan processors
            `,
            list: [
                'Data entry and document verification',
                'Serviceability analysis',
                'Ordering property valuation',
                'Online Application and lodgment'
            ]
        },
    ];

    return (
        <div className="px-5 md:px-8 py-10 overflow-x-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">

                {usaservices.map((i, index) => {
                    return (
                        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" key={index} onMouseEnter={() => setFlip(i.head)} onMouseLeave={() => setFlip('')} className="w-full min-h-full">
                            <ReactCardFlip isFlipped={flip == i.head ? true : false} className="h-full" containerStyle={{ height: '100%' }}>

                                {/* front */}
                                <div className="relative h-full w-full rounded-lg shadow">

                                    <Image
                                        src={i.img}
                                        alt="img"
                                        objectFit="cover"
                                        layout="fill"
                                        objectPosition="center"
                                        className="rounded-lg -z-10"
                                        priority
                                    />

                                    <div className="rounded-lg w-full h-[100%] bg-[#00000077] p-4 text-white space-y-8">
                                        <div className="text-2xl font-semibold pb-3 border-b border-white">
                                            {i.head}
                                        </div>
                                        <div className="text-lg">
                                            {i.desc}
                                        </div>
                                    </div>


                                </div>

                                {/* back */}
                                <div className="shadow rounded-lg w-full border border-[#9F8D1B] p-4 space-y-4 h-full">


                                    <div className="text-2xl font-semibold pb-3 border-b text-[#1B2D9F] border-[#9F8D1B]">
                                        {i.head}
                                    </div>

                                    <ul className="list-none">
                                        {i.list.map((j, ind) => {
                                            return (
                                                <li key={ind} className="flex border-b border-gray-300 p-2 mb-2">
                                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2 flex shrink-0" />
                                                    {j}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const Canada = () => {

    const [flip, setFlip] = useState('');
    const canadaservices = [
        {
            img: '/accounts.png',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            desc: `At Accomate, we pride ourselves on offering offshore accountancy services tailored to meet the unique needs of each 
            client. Offshore bookkeeping services can save your business valuable time and money compared to hiring an in-house 
            bookkeeper.`,
            list: [
                'Data entry',
                'Payroll processing (T4 &T5)',
                'Accounts payable / receivable management'
            ]
        },
        {
            img: '/payroll.png',
            head: 'Payroll Processing',
            head2: 'Our payroll services include:',
            desc: `Our services are designed to meet the various needs of businesses and accounting professionals. By outsourcing payroll preparation to Accomate, you can focus on your business while we handle inefficiencies, reporting, and cost-cutting.`,
            list: [
                `End to end management – From “payroll setup in the system” to “end with paychecks”`,
                'Payroll accounting and prompt processing and filing',
                'Annual filing of T4 and T5 slips for all employees',
                'Payroll Tax management and compliance'
            ]
        },
        {
            img: '/accounts.png',
            head: 'Financial Statement Compilation',
            head2: 'Our financial statements compilation services for corporates and trusts includes preparation of:',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            img: '/payroll.png',
            head: 'Audit & Assurance',
            head2: 'Our audit & assurance services encompass a wide range of areas, including but not limited to:',
            desc: 'Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain financial transparency and meet stringent regulatory requirements. Partner with our team of skilled auditors, for your peace of mind and a successful financial journey',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries',
                'Internal control assessment and risk assessments',
                'Compliance with auditing standards and regulations',
            ]
        },
        {
            img: '/taxation.png',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            desc: `When tax filing deadlines approach, the rush can leave business owners and CPAs feeling overwhelmed. That's where Accomate steps in to shoulder the pressure. Our team of tax experts is well-versed in all the nitty-gritty details of US tax rules and stays up-to-date with IRS changes. By outsourcing your tax preparation, you can focus on your core business activities.`,
            list: [
                `Preparation and filing of Individual Tax Returns (ITR), Corporate Tax Returns (CTR)`,
                'Preparation and filing of GST returns',
                'Payroll Tax management and filings',
                'Tax guidance and Tax Planning',
            ]
        },
    ];
    return (
        <div className="px-5 md:px-8 py-10 overflow-x-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">

                {canadaservices.map((i, index) => {
                    return (
                        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" key={index} onMouseEnter={() => setFlip(i.head)} onMouseLeave={() => setFlip('')} className="w-full min-h-full">
                            <ReactCardFlip isFlipped={flip == i.head ? true : false} className="h-full" containerStyle={{ height: '100%' }}>

                                {/* front */}
                                <div className="relative h-full w-full rounded-lg shadow">

                                    <Image
                                        src={i.img}
                                        alt="img"
                                        objectFit="cover"
                                        layout="fill"
                                        objectPosition="center"
                                        className="rounded-lg -z-10"
                                        priority
                                    />

                                    <div className="rounded-lg w-full h-[100%] bg-[#00000077] p-4 text-white space-y-8">
                                        <div className="text-2xl font-semibold pb-3 border-b border-white">
                                            {i.head}
                                        </div>
                                        <div className="text-lg">
                                            {i.desc}
                                        </div>
                                    </div>


                                </div>

                                {/* back */}
                                <div className="shadow rounded-lg w-full border border-[#9F8D1B] p-4 space-y-4 h-full">


                                    <div className="text-2xl font-semibold pb-3 border-b text-[#1B2D9F] border-[#9F8D1B]">
                                        {i.head}
                                    </div>

                                    <ul className="list-none">
                                        {i.list.map((j, ind) => {
                                            return (
                                                <li key={ind} className="flex border-b border-gray-300 p-2 mb-2">
                                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2 flex shrink-0" />
                                                    {j}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const Australia = () => {

    const [flip, setFlip] = useState('');
    const australiaservices = [
        {
            img: '/accounts.png',
            head: 'Accounting',
            head2: 'Our accounting services include:',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            list: [
                'Data entry',
                'Bank reconciliation',
                'Accounts payable / receivable management',
                'Payroll processing including salary calculations, deductions and tax withholdings',
            ]
        },
        {
            img: '/accounts.png',
            head: 'Financial Statement Compilation',
            head2: 'Our financial statements compilation services for corporates and trusts includes preparation of:',
            desc: 'Our team of qualified professionals is dedicated to delivering comprehensive Financial Statement compilation services designed to instill confidence in your financial statements. Focus on your core operations while our experts ensure accurate and timely financial reporting.',
            list: [
                'Balance sheets',
                'Income statements',
                'Cash flow statements'
            ]
        },
        {
            img: '/payroll.png',
            head: 'Audit & Assurance',
            head2: 'Our audit & assurance services encompass a wide range of areas, including but not limited to:',
            desc: 'Our qualified professionals deliver comprehensive audit, review, and compilation services, designed to maintain financial transparency and meet stringent regulatory requirements. Partner with our team of skilled auditors, for your peace of mind and a successful financial journey',
            list: [
                'Preparation of audit schedules',
                'Financial statement audits',
                'Assisting audit queries',
                'Internal control assessment and risk assessments',
                'Compliance with auditing standards and regulations',
            ]
        },
        {
            img: '/taxation.png',
            head: 'Tax Compilation',
            head2: 'Our comprehensive tax services include:',
            desc: `When tax filing deadlines approach, the rush can leave business owners and CPAs feeling overwhelmed. That's where Accomate steps in to shoulder the pressure. Our team of tax experts is well-versed in all the nitty-gritty details of US tax rules and stays up-to-date with IRS changes. By outsourcing your tax preparation, you can focus on your core business activities.`,
            list: [
                'Preparation of Individual Tax Returns (ITR), Corporate Tax Returns (CTR), Trust Tax Returns (TTR)',
                'Preparation of Business Activity Statements (Bases)',
                'Managing PAYG Tax / Payroll Taxation',
                'Tax guidance and Tax Planning',
            ]
        },
        {
            img: '/payroll.png',
            head: 'Managing SMSF',
            head2: 'Below are the services we provide for SMSF:',
            desc: `Even though, SMSF provides excellent control of funds transfer after retirement, developing and managing SMSF compliance requirements is not only challenging but also time-consuming. 
            However, Our highly experienced fund advisors work closely with you to help you with end-to-end SMSF administration services
            `,
            list: [
                'SMSF accounting',
                'Ensuring Compliance with regulations',
                'Preparation of audit workpapers',
                'Preparation of financial statements',
                'Preparation of SMSF Tax Returns',
            ]
        },
        {
            img: '/payroll.png',
            head: 'Mortgage Broking',
            head2: 'Our mortgage broking services include:',
            desc: `Grow your mortgage book faster and more efficiently 
            Accomte Global works with mortgage brokers, to support their operations, from processing the initial application through to mortgage discharge from the relevant authority.
            Reduce costs and gain experienced loan processors
            `,
            list: [
                'Data entry and document verification',
                'Serviceability analysis',
                'Ordering property valuation',
                'Online Application and lodgment'
            ]
        },
    ];
    return (
        <div className="px-5 md:px-8 py-10 overflow-x-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">

                {australiaservices.map((i, index) => {
                    return (
                        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" key={index} onMouseEnter={() => setFlip(i.head)} onMouseLeave={() => setFlip('')} className="w-full min-h-full">
                            <ReactCardFlip isFlipped={flip == i.head ? true : false} className="h-full" containerStyle={{ height: '100%' }}>

                                {/* front */}
                                <div className="relative h-full w-full rounded-lg shadow">

                                    <Image
                                        src={i.img}
                                        alt="img"
                                        objectFit="cover"
                                        layout="fill"
                                        objectPosition="center"
                                        className="rounded-lg -z-10"
                                        priority
                                    />

                                    <div className="rounded-lg w-full h-[100%] bg-[#00000077] p-4 text-white space-y-8">
                                        <div className="text-2xl font-semibold pb-3 border-b border-white">
                                            {i.head}
                                        </div>
                                        <div className="text-lg leading-relaxed">
                                            {i.desc}
                                        </div>
                                    </div>


                                </div>

                                {/* back */}
                                <div className="shadow rounded-lg w-full border border-[#9F8D1B] p-4 space-y-4 h-full">


                                    <div className="text-2xl font-semibold pb-3 border-b text-[#1B2D9F] border-[#9F8D1B]">
                                        {i.head}
                                    </div>

                                    <ul className="list-none">
                                        {i.list.map((j, ind) => {
                                            return (
                                                <li key={ind} className="flex border-b border-gray-300 p-2 mb-2">
                                                    <SiTicktick className="text-lg text-[#9F8D1B] mt-1 mr-2 flex shrink-0" />
                                                    {j}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const Softwares = () => {

    const path = usePathname();

    const usaimages = [
        '/download.jpeg',
        '/drake.png',
        '/intuit lacrete.png',
        '/intuit pro connect.png',
        '/maestro.png',
        '/quick books destok.png',
        '/quick books online.png',
        '/taxwise.png',
        '/thomson.png',
        '/ultra tax.jpeg',
        '/walter.png',
        '/xero.webp',
    ];

    const ausimgs = [
        '/be-logo-plain.png',
        '/BGL.png',
        '/cropped-afg_social_profile.png',
        '/download.png',
        '/salestrekker.jpg',
        '/xodo.jpeg',
        '/download.png',
        '/xero.webp',
    ];

    const canadaimgs = [
        '/dolphin.jpeg',
        '/intuit profile.jpeg',
        '/myob.jpg',
        '/quick books destok.png',
        '/quick books online.png',
        '/tax cycle.png'
    ];

    return (
        <div className="px-8 py-14" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" >
            <div className="font-semibold text-4xl flex justify-center mx-auto">
                Softwares
            </div>

            <div className="mt-10">
                <marquee>
                    <div className="flex justify-center items-center m-auto space-x-14">
                        {path == '/services/usa' ?
                            <>
                                {usaimages.map((i, index) => {
                                    return (
                                        <div className="flex shrink-0 justify-center mx-auto">
                                            <Image
                                                src={`/USA${i}`}
                                                alt="software"
                                                width={200}
                                                height={200}
                                                className="h-20 w-auto flex justify-center items-center m-auto"
                                            />
                                        </div>
                                    )
                                })}
                            </>
                            :
                            path == '/services/australia' ?
                                <>
                                    {ausimgs.map((i, index) => {
                                        return (
                                            <div className="flex shrink-0 justify-center mx-auto">
                                                <Image
                                                    src={`/Australia${i}`}
                                                    alt="software"
                                                    width={200}
                                                    height={200}
                                                    className="h-20 w-auto flex justify-center items-center m-auto"
                                                />
                                            </div>
                                        )
                                    })}
                                </> :
                                path == '/services/canada' ?
                                    <>
                                        {canadaimgs.map((i, index) => {
                                            return (
                                                <div className="flex shrink-0 justify-center mx-auto">
                                                    <Image
                                                        src={`/Canada${i}`}
                                                        alt="software"
                                                        width={200}
                                                        height={200}
                                                        className="h-20 w-auto flex justify-center items-center m-auto"
                                                    />
                                                </div>
                                            )
                                        })}
                                    </> : ''}
                    </div>
                </marquee>
            </div>
        </div>
    )
}

export const AccountsPayableComp = () => {
    return (
        <div className="">

            <div className="px-8 py-14 bg-gray-100 w-full">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-8">
                        <div className="font-semibold text-3xl leading-relaxed">
                            Accounts Payable Services
                        </div>

                        <div className="leading-relaxed">
                            Efficient management of accounts payable is essential for maintaining a business’s financial
                            health. Accomate Global offers tailored accounts payable services designed to streamline
                            your payment process, reduce costs, and improve cash flow.
                            <br /><br />
                            Our expertise in accounts
                            payable outsourcing services has made us a trusted partner for businesses across
                            Australia, delivering reliable and scalable solutions that help manage your accounts
                            payable functions effectively.
                        </div>
                    </div>

                    <div className="flex justify-center items-center m-auto">
                        <div className="w-fit relative">
                            <div className="drop-shadow-lg absolute w-full h-auto md:w-full md:h-72 bg-[#9f8e1b5c] -bottom-5 -right-5"></div>
                            <Image
                                src={AboutImg}
                                alt="About Image"
                                className="w-full md:w-auto md:h-72 h-auto drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mx-auto lg:w-[90%]">
                <div className="px-8 py-14 w-full space-y-8">
                    <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                        Why Choose Accomate Global for Accounts Payable Services?
                    </div>

                    <div className="flex justify-center mx-auto">
                        <Image
                            src={WhyusImg}
                            alt="Why Choose Accomate Global for Accounts Payable Services?"
                            className="h-60 w-auto"
                        />
                    </div>

                    <div className="space-y-5">
                        <div className="leading-relaxed text-center flex justify-center mx-auto">
                            Managing accounts payable can be a complex and time-consuming process, with risks of
                            errors, delayed payments, and strained supplier relationships. At Accomate Global, we
                            simplify your accounts payable processes by providing comprehensive accounts payable
                            services that ensure timely and accurate payments, better cash flow, and improved financial
                            management.<br /><br />
                            Here’s why Australian businesses trust Accomate Global for their accounts payable
                            services:
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <MdSpeed className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Enhanced Efficiency
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Our streamlined AP process eliminates errors and minimizes
                                    delays.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <FaMoneyBillWave className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Cash Flow Optimization
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    We focus on improving your working capital and securing
                                    early payment discounts.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <HiShieldCheck className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Compliance and Security
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    With secure data handling and compliance-focused
                                    processes, we protect your financial information.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Our Accounts Payable Services
                </div>

                <div className="flex justify-center mx-auto">
                    <Image
                        src={AccountsImg2}
                        alt="Accounts Payable Services"
                        className="h-60 w-auto"
                    />
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                            Accomate Global’s accounts payable services cover every aspect of the accounts payable
                            lifecycle, from invoice processing to payment disbursement. Here are the key components of
                            our offerings
                        </div>
                        <div className="grid grid-cols-2 gap-7">
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">1. Invoice Processing</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Efficient and accurate invoice processing for fast and error-free data entry.</li>
                                    <li>Match invoices with purchase orders and receipts to ensure accuracy in
                                        payments and prevent duplicate payments.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">2. Payment Disbursement</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Timely payment processing, ensuring payments are made by the correct due
                                        dates to maintain positive supplier relationships.</li>
                                    <li>Options for scheduled payments, including early payment discounts to save
                                        on costs.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">3. Accounts Payable Automation</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Leverage account payable automation technology to streamline the AP
                                        process and reduce manual workload.</li>
                                    <li>Automated reminders for due dates and early payment opportunities,
                                        improving efficiency and cash flow.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">4. Reconciliation and Reporting</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Regular reconciliation of accounts payable balances to ensure accuracy and
                                        prevent discrepancies.</li>
                                    <li>Detailed reporting on accounts payable functions to keep track of
                                        outstanding balances, payment history, and cash flow.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">5. Purchase Order Matching</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Our managed account payable services include purchase order matching
                                        to verify order fulfillment.</li>
                                    <li>Ensures that all payments are accurate, based on verified deliveries, reducing
                                        payment errors.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">6. Duplicate Payment Detection</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Identify and prevent duplicate payments through automated systems and
                                        thorough checks.</li>
                                    <li>Safeguard working capital by eliminating unnecessary payments and
                                        ensuring financial accuracy.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Benefits of Accounts Payable Services by Accomate Global
                </div>


                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">

                        <Image
                            src={Benefits}
                            alt="benefits of accounts payable services by accomate global"
                            className="flex justify-center mx-auto h-72 w-auto"
                        />

                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[90%]">
                            Accomate Global’s accounts payable services provide several advantages, allowing
                            businesses to improve efficiency, enhance supplier relationships, and optimize working
                            capital. Here’s how our services benefit Australian businesses:
                        </div>
                        <div className="grid grid-cols-1 gap-7">
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">1. Improved Cash Flow Management</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Our accounts payable outsourcing services help manage cash flow more
                                        effectively by scheduling payments strategically.</li>
                                    <li>Reduce payment delays and optimize working capital for smoother financial
                                        operations.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">2. Enhanced Supplier Relationships</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Timely payments foster trust with suppliers, strengthening supplier
                                        relationships and potentially gaining favorable terms.</li>
                                    <li>Leveraging early payment discounts with key suppliers also provides cost
                                        savings.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">3. Reduction in Errors and Duplicates</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>With our accounts payable services, we prevent duplicate payments and
                                        other costly errors.</li>
                                    <li>Automated checks ensure that every payment is verified, accurate, and
                                        matched to the appropriate invoice and purchase order.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">4. Increased Efficiency with Automation</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Account payable automation technology helps reduce manual workload
                                        and eliminate repetitive tasks.</li>
                                    <li>Automated alerts for due dates help prevent late payments, supporting better
                                        cash flow.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">5. Cost Savings and Better Working Capital</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Take advantage of early payment discounts where possible, reducing the
                                        cost of goods and services.</li>
                                    <li>Effective management of accounts payable improves cash flow and helps
                                        businesses maintain sufficient working capital.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Accounts Payable Process at Accomate Global
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                            Our accounts payable services are designed to be efficient and secure, ensuring that all
                            payments are processed correctly and on time. Here’s an overview of the steps involved in
                            our AP process:
                        </div>

                        <div className="grid grid-cols-3 gap-5">

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            01
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Invoice Collection and Verification
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">With our accounts payable services, we prevent duplicate payments and
                                        other costly errors.</li>
                                    <li className="leading-relaxed">Automated checks ensure that every payment is verified, accurate, and
                                        matched to the appropriate invoice and purchase order.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            02
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Data Entry and Validation
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Enter invoice data into our system, using accounts payable automation to
                                        speed up data entry and reduce manual errors.</li>
                                    <li className="leading-relaxed">Validate entries to ensure consistency with financial records, ensuring all
                                        accounts are accurately updated.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            03
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Approval Workflow
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Implement an approval workflow where necessary, allowing authorized
                                        personnel to review and approve payments.</li>
                                    <li className="leading-relaxed">This adds a layer of accountability, reducing the chance of unapproved or
                                        incorrect payments.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            04
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Payment Scheduling and Processing
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Schedule payments based on due dates and early payment discount
                                        opportunities.</li>
                                    <li className="leading-relaxed">Timely payments ensure smooth supplier relations and take advantage of
                                        cost-saving opportunities.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            05
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Reconciliation and Reporting
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Reconcile all payments and accounts payable functions regularly,
                                        identifying any discrepancies early.</li>
                                    <li className="leading-relaxed">Provide regular reports on payment history, outstanding balances, and cash
                                        flow impact, giving you insights into your accounts payable performance.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Why Accounts Payable Outsourcing Makes Sense?
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="flex w-full space-x-10">

                        <div className="flex justify-center items-center m-auto">
                            <div className="h-60 w-60 rounded-full bg-[#1b2d9f5b] text-white">
                                <div className="flex justify-center items-center m-auto h-full">
                                    <FaQuestion className="h-28 w-28" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Outsourcing accounts payable services allows businesses to focus on core activities while
                                professionals handle the AP process. Here are some key advantages of outsourcing:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Cost Savings : </span>Avoid hiring and training costs by choosing a trusted accounts
                                    payable outsourcing company like Accomate Global.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Access to Expertise : </span>Leverage the expertise of a team that specializes in accounts
                                    payable, with industry knowledge to handle complex accounts payable processes.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Scalability : </span>Whether you need support during peak times or an ongoing service,
                                    accounts payable outsourcing services are flexible and adaptable.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Account Payable Automation for Improved Efficiency
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                            Accomate Global employs advanced account payable automation technology, bringing
                            automation to key parts of the AP process. Here’s how automation enhances our accounts
                            payable services:
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <FaRocket className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Faster Processing
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Automation speeds up data entry and payment scheduling,
                                    reducing the overall cycle time.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <AiOutlineCheckCircle className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Reduced Errors
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Automated checks help prevent duplicate payments and
                                    discrepancies in invoice processing.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <FaMoneyBillWave className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Improved Cash Flow
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    With automation, we can better track due dates and take
                                    advantage of early payment discounts, optimizing cash flow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Industry-Specific Accounts Payable Solutions
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Accomate Global’s accounts payable services are designed to serve businesses across
                                different industries, offering tailored solutions to meet industry-specific requirements:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Retail and E-Commerce : </span>Manage large volumes of vendor invoices and payments
                                    efficiently, supporting cash flow in a fast-paced market.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Healthcare : </span>Process payments for multiple suppliers, ensuring timely disbursement
                                    to support continuous operations.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Construction and Real Estate : </span>Track invoices and payments for multiple projects,
                                    enhancing accuracy in project budgeting and expense management.</li>
                            </ul>
                        </div>

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={IndustryImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-80 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    The Importance of Supplier Relationships in Accounts Payable
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={RelationImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-60 w-auto"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Strong supplier relationships are crucial for maintaining a steady supply chain and gaining
                                favorable terms. Here’s how Accomate Global’s accounts payable services support
                                supplier relationships:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Timely Payments : </span>We prioritize payments based on due dates, ensuring suppliers
                                    are paid on time.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Clear Communication : </span>Our team communicates with suppliers to resolve payment
                                    discrepancies, fostering trust.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Favorable Terms : </span>By nurturing good relationships, businesses can benefit from
                                    extended terms or discounts on bulk purchases.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Accounts Payable Services Company for Australian Businesses
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Accomate Global is a leading accounts payable outsourcing company in Australia,
                                providing high-quality accounts payable services tailored to local business needs. Here’s
                                what sets us apart:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Customized Solutions : </span>Our services are tailored to fit the specific needs of each
                                    client, ensuring that all accounts payable functions are managed seamlessly.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Data Security : </span>We prioritize security, protecting your financial data through secure
                                    processes and compliance with industry standards.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Transparency and Reporting : </span>Our detailed reports provide transparency, giving you
                                    insights into your AP process and allowing better financial planning.</li>
                            </ul>
                        </div>

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={AccountsImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-60 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Frequently Asked Questions
                </div>

                <div className="lg:w-[75%] flex justify-center mx-auto">
                    <div>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<FaChevronDown />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className="font-semibold"
                            >
                                <span className="text-[#1B2D9F]">1.&nbsp;</span>What is Accounts Payable Service?
                            </AccordionSummary>
                            <AccordionDetails>
                                Accounts payable services involve managing the payment of invoices and tracking
                                outstanding balances, ensuring that suppliers are paid accurately and on time.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<FaChevronDown />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                className="font-semibold"
                            >
                                <span className="text-[#1B2D9F]">2.&nbsp;</span>Why Outsource Accounts Payable?
                            </AccordionSummary>
                            <AccordionDetails>
                                Outsourcing accounts payable services helps businesses save on costs, reduce errors,
                                and streamline their accounts payable processes by leveraging specialized expertise.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<FaChevronDown />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                                className="font-semibold"
                            >
                                <span className="text-[#1B2D9F]">3.&nbsp;</span>How Does Account Payable Automation Work?
                            </AccordionSummary>
                            <AccordionDetails>
                                Account payable automation uses technology to automate data entry, invoice matching,
                                and payment scheduling, improving accuracy and speed in the AP process.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<FaChevronDown />}
                                aria-controls="panel4-content"
                                id="panel4-header"
                                className="font-semibold"
                            >
                                <span className="text-[#1B2D9F]">4.&nbsp;</span>How Does Accounts Payable Impact Cash Flow?
                            </AccordionSummary>
                            <AccordionDetails>
                                Efficient accounts payable services help optimize cash flow by managing payment
                                schedules and taking advantage of early payment discounts.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<FaChevronDown />}
                                aria-controls="panel5-content"
                                id="panel5-header"
                                className="font-semibold"
                            >
                                <span className="text-[#1B2D9F]">5.&nbsp;</span>Can Accounts Payable Services Improve Supplier Relationships?
                            </AccordionSummary>
                            <AccordionDetails>
                                Yes, by ensuring timely payments and clear communication, accounts payable services
                                can strengthen supplier relationships and secure favorable terms.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AccountsReconComp = () => {
    return (
        <div className="">

            {/* Accounts Reconciliation Services */}
            <div className="px-8 py-14 bg-gray-100 w-full">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-8">
                        <div className="font-semibold text-3xl leading-relaxed">
                            Accounts Reconciliation Services
                        </div>

                        <div className="leading-relaxed">
                            Keeping financial records accurate and consistent is vital for any business. Accomate Global
                            provides comprehensive account reconciliation services that ensure your financial
                            transactions are properly accounted for.
                            <br /><br />
                            By comparing financial statements, bank records,
                            and credit card statements with your bank records, we help eliminate discrepancies and
                            enhance financial integrity. Our services are designed for businesses operating in Australia,
                            delivering reliability, accuracy, and peace of mind.
                        </div>
                    </div>

                    <div className="flex justify-center items-center m-auto">
                        <div className="w-fit relative">
                            <div className="drop-shadow-lg absolute w-full h-auto md:w-full md:h-72 bg-[#9f8e1b5c] -bottom-5 -right-5"></div>
                            <Image
                                src={AboutImg}
                                alt="About Image"
                                className="w-full md:w-auto md:h-72 h-auto drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Accomate Global for Account Reconciliation Services? */}
            <div className="flex justify-center mx-auto lg:w-[90%]">
                <div className="px-8 py-14 w-full space-y-8">
                    <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                        Why Choose Accomate Global for Account Reconciliation Services?
                    </div>

                    <div className="flex justify-center mx-auto">
                        <Image
                            src={WhyusImg}
                            alt="Why Choose Accomate Global for Accounts Payable Services?"
                            className="h-60 w-auto"
                        />
                    </div>

                    <div className="space-y-5">
                        <div className="leading-relaxed text-center flex justify-center mx-auto">
                            With extensive experience in the Australian market, Accomate Global understands the
                            complexities of financial reconciliation. Our account reconciliation services are tailored to
                            meet your business needs, whether you're a small startup or a large enterprise.
                            <br /><br />
                            Here’s why businesses trust us for their reconciliation needs:
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <MdCheckCircleOutline className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Error-Free Reconciliation
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Using advanced account reconciliation software, we
                                    ensure that your financial records are accurate and free of errors.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <BiNetworkChart className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Comprehensive Solutions
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Our services include bank reconciliations, credit card
                                    account reconciliations, and general ledger reviews, covering all types of accounts.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <AiOutlineClockCircle className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Timely Financial Close
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    We expedite the financial close process, providing timely
                                    reconciliations that keep your accounts up to date.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Account Reconciliation Services */}
            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Our Account Reconciliation Services
                </div>

                <div className="flex justify-center mx-auto">
                    <Image
                        src={AccountsImg2}
                        alt="Accounts Payable Services"
                        className="h-60 w-auto"
                    />
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                            Accomate Global offers a full range of account reconciliation services designed to
                            streamline your financial operations and improve accuracy. Our key offerings include:
                        </div>
                        <div className="grid grid-cols-2 gap-7">
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">1. Bank Account Reconciliation</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Match bank statement entries with your internal financial records.</li>
                                    <li>Identify discrepancies early to prevent accounting errors and ensure clean
                                        records.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">2. Credit Card Reconciliations</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Reconcile credit card statements with your accounts, ensuring every
                                        transaction is correctly recorded.</li>
                                    <li>Minimize the risk of fraud and discrepancies through meticulous tracking of
                                        credit card transactions.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">3. General Ledger Reconciliation</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Review your general ledger for inconsistencies and unmatched entries.</li>
                                    <li>Ensure your books align with your financial statements for better accuracy
                                        and compliance.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">4. Invoice Matching and Reconciliation</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Match invoices against purchase orders and receipts, ensuring every
                                        payment is accounted for.</li>
                                    <li>This service improves cash flow management and reduces errors in accounts
                                        payable.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">5. Customized Reconciliation Solutions</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Whether it’s specific types of reconciliation or industry-focused needs, we
                                        provide customized solutions that suit your business.</li>
                                    <li>Our services are flexible and adaptable to accommodate different industries
                                        and business sizes.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">6. Reconciliation of Credit Card Statements</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Regular reconciliation of credit card statements ensures that all transactions
                                        align with internal records.</li>
                                    <li>This helps in identifying unauthorized transactions and maintaining financial
                                        accuracy.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits of Using Account Reconciliation Services by Accomate Global */}
            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Benefits of Using Account Reconciliation Services by Accomate Global
                </div>


                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">

                        <Image
                            src={Benefits}
                            alt="benefits of accounts payable services by accomate global"
                            className="flex justify-center mx-auto h-72 w-auto"
                        />

                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[90%]">
                            Our account reconciliation services offer numerous benefits that can transform the way
                            you manage your financial records. Here’s how partnering with Accomate Global can
                            enhance your business operations:
                        </div>
                        <div className="grid grid-cols-1 gap-7">
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">1. Improved Accuracy and Reliability</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>We provide error-free reconciliation that eliminates discrepancies between
                                        your bank accounts and financial records.</li>
                                    <li>Accurate reconciliation leads to better decision-making and financial planning.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">2. Time-Saving Solution</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Reconciliation can be a time-consuming task for businesses. Our services
                                        allow you to focus on core activities while we handle the reconciliations.</li>
                                    <li>Automated processes and expert oversight save you time and reduce
                                        administrative workload.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">3. Enhanced Financial Control</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>By regularly reconciling your accounts, you gain better control over your cash
                                        flow and financial close cycles.</li>
                                    <li>Our team provides insights that help you manage your accounts more
                                        effectively.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">4. Compliance and Risk Reduction</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>We help meet reconciliation requirements for regulatory compliance,
                                        minimizing the risk of penalties and audits.</li>
                                    <li>Identifying discrepancies early reduces the risk of financial loss or fraud.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">5. Improved Cash Flow Management</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Regular bank reconciliations ensure your cash flow data is accurate, which
                                        helps in effective budgeting and forecasting.</li>
                                    <li>Manage incoming and outgoing payments better, avoiding surprises in your
                                        financial planning.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">6. Tailored Solutions for Different Types of Accounts</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>From credit card reconciliations to multi-currency accounts, our services
                                        cover various types of accounts for complete reconciliation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How Accomate Global’s Account Reconciliation Services Work */}
            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    How Accomate Global’s Account Reconciliation Services Work
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                            Our accounts reconciliation process is straightforward and transparent, designed to keep
                            your financial records accurate without hassle. Here’s how we approach account
                            reconciliation:
                        </div>

                        <div className="grid grid-cols-3 gap-5">

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            01
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Initial Consultation and Assessment
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">We start by understanding your business needs, accounting processes, and
                                        specific reconciliation challenges.</li>
                                    <li className="leading-relaxed">Develop a custom reconciliation plan based on your reconciliation
                                        requirements and business objectives.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            02
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Data Collection and Integration
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Gather relevant data from your bank, general ledger, and financial
                                        statements to prepare for reconciliation.</li>
                                    <li className="leading-relaxed">Use secure and advanced account reconciliation software for data
                                        integration and analysis.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            03
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Reconciliation Execution
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Perform thorough matching of your bank statement, credit card transactions,
                                        and invoices against internal records.</li>
                                    <li className="leading-relaxed">Identify and resolve discrepancies, ensuring all accounts are balanced
                                        accurately.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            04
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Reporting and Documentation
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Provide detailed reconciliation reports that include identified discrepancies,
                                        adjustments made, and final balances.</li>
                                    <li className="leading-relaxed">Keep documentation organized for easy access and audit readiness.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            05
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Ongoing Monitoring and Adjustments
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Regularly monitor reconciliations to ensure ongoing accuracy.</li>
                                    <li className="leading-relaxed">Adjust the reconciliation plan as your business grows or changes, keeping up
                                        with your financial needs.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* Why Outsource Account Reconciliation Services? */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Why Outsource Account Reconciliation Services?
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="flex w-full space-x-10">

                        <div className="flex justify-center items-center m-auto">
                            <div className="h-60 w-60 rounded-full bg-[#1b2d9f5b] text-white">
                                <div className="flex justify-center items-center m-auto h-full">
                                    <FaQuestion className="h-28 w-28" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Outsourcing account reconciliation services to Accomate Global offers a strategic
                                advantage for businesses seeking efficiency and accuracy:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Cost-Effective Solution : </span>Avoid the costs associated with hiring and training
                                    in-house staff. Our services provide expert reconciliation at a competitive price.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Expertise and Technology : </span>Access experienced professionals and the latest
                                    account reconciliation software, delivering precise and timely reconciliations.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Scalable Solutions : </span>Whether your reconciliation needs are simple or complex, our
                                    services are adaptable to your business size and requirements.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Types of Reconciliation Services Provided */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Types of Reconciliation Services Provided
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                            Accomate Global’s account reconciliation services cover different types of
                            reconciliation, each tailored to meet specific business needs:
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <FaUniversity className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Bank Reconciliation
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Reconcile your bank transactions with recorded data to prevent errors and
                                    ensure cash flow accuracy.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <FaCreditCard className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Credit Card Account Reconciliation
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Monitor and reconcile credit card transactions, minimizing discrepancies and
                                    enhancing financial security.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <HiOutlineUsers className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Vendor and Supplier Reconciliation
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Match invoices, purchase orders, and payments to track outstanding dues
                                    and avoid payment disputes.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <RiFilePaper2Line className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Balance Sheet Reconciliation
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Ensure that all entries in your balance sheet are accurate, providing a clear
                                    view of your company’s assets and liabilities.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <MdOutlineAttachMoney className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Expense Reconciliation
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Track and reconcile expenses, helping you manage budgets effectively and
                                    control spending.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Account Reconciliation Software and Technology */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Account Reconciliation Software and Technology
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Technology is at the core of our account reconciliation services. We use advanced tools
                                and software that streamline reconciliation and enhance data security:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Automation : </span>Automated reconciliation processes reduce the potential for human
                                    error, ensuring fast and accurate results.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Security : </span>Protecting your financial data is our priority, with secure software and
                                    encryption for data management.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Real-Time Updates : </span>Access reconciliation reports and updates in real-time, allowing
                                    you to monitor account balances and discrepancies.</li>
                            </ul>
                        </div>

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={IndustryImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-80 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Industries Served by Accomate Global */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Industries Served by Accomate Global
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={IndustryImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-60 w-auto"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Our account reconciliation services are suitable for various industries in Australia,
                                including:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Retail and E-Commerce : </span>Manage high transaction volumes effectively with accurate
                                    reconciliations.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Construction and Real Estate : </span>Track payments, expenses, and assets for better
                                    cash flow control.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Healthcare : </span>Reconcile patient payments, vendor transactions, and insurance billing
                                    with ease.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Hospitality : </span>Keep track of daily transactions, bookings, and expenses with tailored
                                    reconciliation services.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* The Importance of Reconciliation Services for Business Success */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    The Importance of Reconciliation Services for Business Success
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="space-y-4">

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Maintain Accurate Financial Records : </span>Regular reconciliation ensures that your financial records are up-to-date and
                                    error-free, helping in informed decision-making.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Enhance Financial Planning and Forecasting : </span>With accurate data from reconciled accounts, you can create realistic budgets
                                    and forecasts that support business growth.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Support Compliance and Audit Preparation : </span>Meeting reconciliation requirements ensures compliance with Australian
                                    regulations and makes audits less stressful.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Reduce the Risk of Fraud and Errors : </span>By catching discrepancies early, our account reconciliation services reduce
                                    the likelihood of fraud and accounting errors.</li>
                            </ul>
                        </div>

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={AccountsImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-60 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*  How Account Reconciliation Services Improve Financial Close Processes */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    How Account Reconciliation Services Improve Financial Close
                    Processes
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={RelationImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-60 w-auto"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Timely and accurate reconciliations are critical for an efficient financial close process.
                                Accomate Global helps businesses:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Speed Up Financial Close Cycles : </span>With quick reconciliations, businesses can close
                                    their books faster, providing timely financial insights.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Provide Accurate Financial Statements : </span>Comprehensive reconciliations ensure
                                    your financial statements accurately reflect your business’s financial position.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Reduce Manual Effort : </span>Automated processes simplify reconciliations, allowing your
                                    team to focus on strategic activities instead.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/*  Frequently Asked Questions */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Frequently Asked Questions
                </div>

                <div className="lg:w-[75%] flex justify-center mx-auto">
                    <div>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<FaChevronDown />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className="font-semibold"
                            >
                                <span className="text-[#1B2D9F]">1.&nbsp;</span>What are Account Reconciliation Services?
                            </AccordionSummary>
                            <AccordionDetails>
                                These services involve comparing financial records to bank and credit card statements to
                                identify and correct discrepancies.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<FaChevronDown />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                className="font-semibold"
                            >
                                <span className="text-[#1B2D9F]">2.&nbsp;</span>Why is Account Reconciliation Important?
                            </AccordionSummary>
                            <AccordionDetails>
                                Reconciliation helps maintain accurate financial records, supports compliance, and
                                improves cash flow management.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<FaChevronDown />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                                className="font-semibold"
                            >
                                <span className="text-[#1B2D9F]">3.&nbsp;</span>What Types of Reconciliation Does Accomate Global Offer?
                            </AccordionSummary>
                            <AccordionDetails>
                                We provide bank reconciliations, credit card account reconciliations, general ledger
                                reconciliation, invoice matching, and more.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<FaChevronDown />}
                                aria-controls="panel4-content"
                                id="panel4-header"
                                className="font-semibold"
                            >
                                <span className="text-[#1B2D9F]">4.&nbsp;</span>Can Reconciliation Be Automated?
                            </AccordionSummary>
                            <AccordionDetails>
                                Yes, we use advanced account reconciliation software to automate parts of the process,
                                increasing accuracy and efficiency.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const AccountsReceivableComp = () => {
    return (
        <div className="">

            {/* Accounts Receivable Services */}
            <div className="px-8 py-14 bg-gray-100 w-full">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-8">
                        <div className="font-semibold text-3xl leading-relaxed">
                            Accounts Receivable Service
                        </div>

                        <div className="leading-relaxed">
                            Effective management of accounts receivable is crucial for businesses of all sizes. Accomate
                            Global offers a specialized accounts receivable service tailored to Australian businesses,
                            helping you streamline collections, improve cash flow, and maintain a healthy balance sheet.
                            <br /><br />
                            With expert support in accounts receivable outsourcing, we simplify your accounts
                            receivable process so you can focus on core business activities.  </div>
                    </div>

                    <div className="flex justify-center items-center m-auto">
                        <div className="w-fit relative">
                            <div className="drop-shadow-lg absolute w-full h-auto md:w-full md:h-72 bg-[#9f8e1b5c] -bottom-5 -right-5"></div>
                            <Image
                                src={AboutImg}
                                alt="About Image"
                                className="w-full md:w-auto md:h-72 h-auto drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Accomate Global’s Accounts Receivable Service? */}
            <div className="flex justify-center mx-auto lg:w-[90%]">
                <div className="px-8 py-14 w-full space-y-8">
                    <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                        Why Choose Accomate Global’s Accounts Receivable Service?
                    </div>

                    <div className="flex justify-center mx-auto">
                        <Image
                            src={WhyusImg}
                            alt="Why Choose Accomate Global for Accounts Payable Services?"
                            className="h-60 w-auto"
                        />
                    </div>

                    <div className="space-y-5">
                        <div className="leading-relaxed text-center flex justify-center mx-auto">
                            For businesses in today’s competitive environment, managing accounts receivable
                            efficiently is a key factor in maximizing working capital. Accomate Global’s accounts
                            receivable service offers a strategic, tech-driven approach to collections that not only
                            reduces days sales outstanding (DSO) but also increases cash flow, ensuring that you
                            receive payments faster and with minimal risk of bad debts.
                            <br /><br />
                            Here’s why Australian businesses trust Accomate Global’s accounts receivable
                            management services:
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <TbCurrencyDollar className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Improved Cash Flow and Working Capital
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    By managing customer payments
                                    and reducing collection delays, we help boost your cash flow, ensuring liquidity.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <FiTrendingDown className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Reduced DSO
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    Through effective accounts receivable collection practices, our
                                    services reduce DSO, freeing up working capital for reinvestment.
                                </div>
                            </div>
                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className=" flex space-x-3 items-center my-auto w-full border-b pb-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            <IoMdSpeedometer className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-lg text-[#9F8D1B]">
                                            Real-Time Reporting
                                        </div>
                                    </div>
                                </div>

                                <div className="leading-relaxed text-center">
                                    With real-time updates and advanced accounts receivable
                                    software, we offer a transparent view of your receivables.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Accounts Receivable Services */}
            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Our Accounts Receivable Services
                </div>

                <div className="flex justify-center mx-auto">
                    <Image
                        src={AccountsImg2}
                        alt="Accounts Payable Services"
                        className="h-60 w-auto"
                    />
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                            Accomate Global’s accounts receivable service encompasses all aspects of accounts
                            receivable management, including accounts receivable outsourcing for streamlined
                            efficiency. Here’s a look at our key service offerings:
                        </div>
                        <div className="grid grid-cols-2 gap-7">
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">1. Invoice Generation and Customer Communication</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>We prepare and send professional invoices, ensuring accurate billing for your
                                        products or services.</li>
                                    <li>Engage with clients early in the accounts receivable process to maintain
                                        positive relationships and encourage timely payments.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">2. Customer Payment Tracking and Follow-Up</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Track customer payments closely to ensure consistent cash flow.</li>
                                    <li>Conduct polite and effective follow-ups, significantly reducing overdue
                                        accounts and helping collect payments faster.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">3. Accounts Receivable Collection and Aging Analysis</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Our accounts receivable collection service includes aging analysis to
                                        assess the status of receivables.</li>
                                    <li>Identify potential bad debts early, reducing the risk of revenue loss.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">4. Reconciliation and Dispute Resolution</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>We reconcile accounts regularly to maintain an accurate balance sheet.</li>
                                    <li>Address and resolve disputes promptly, ensuring smooth accounts
                                        receivable management and stronger client relationships.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">5. Customized Reporting and Real-Time Analytics</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Receive real-time analytics, empowering you to make informed decisions
                                        regarding working capital.</li>
                                    <li>Generate customized reports, giving you an overview of all managed
                                        accounts receivable activities.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">6. Outsource Accounts Receivable Services</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Accomate Global’s accounts receivable outsourcing model helps you avoid
                                        the costs of maintaining an in-house team.</li>
                                    <li>Benefit from a scalable solution that adjusts to your business needs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits of Using Accounts Receivable Service by Accomate Global */}
            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Benefits of Using Accounts Receivable Service by Accomate Global
                </div>


                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">

                        <Image
                            src={Benefits}
                            alt="benefits of accounts payable services by accomate global"
                            className="flex justify-center mx-auto h-72 w-auto"
                        />

                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[90%]">
                            Accomate Global’s accounts receivable service offers many benefits, making it an ideal
                            solution for businesses across different industries in Australia:
                        </div>
                        <div className="grid grid-cols-1 gap-7">
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">1. Increased Cash Flow</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Fast collection of receivables helps to increase cash flow, ensuring you
                                        have the resources needed to grow your business.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">2. Effective Accounts Receivable Management</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>We use effective strategies and accounts receivable management services
                                        to reduce unpaid accounts, optimize DSO, and secure consistent cash flow.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">3. Lowered Risk of Bad Debts</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Our team mitigates the risk of bad debts through diligent accounts
                                        receivable collection and thorough aging analysis, minimizing write-offs and
                                        maximizing returns.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">4. Optimized Working Capital</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Well-managed customer payments ensure a steady flow of working capital,
                                        giving you the flexibility to reinvest in your business.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">5. Flexible Solutions Across Industries</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>From businesses in the real estate sector to e-commerce, our accounts
                                        receivable service is adaptable to diverse industries and their specific
                                        needs.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">6. Enhanced Customer Experience</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Timely and professional communication with clients promotes good
                                        relationships, creating a seamless payment experience for customers.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accounts Receivable Service Process */}
            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Accounts Receivable Service Process
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                            Our accounts receivable service follows a streamlined, five-step process:
                        </div>

                        <div className="grid grid-cols-3 gap-5">

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            01
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Setup and Integration
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Integrate accounts receivable software with your business systems.</li>
                                    <li className="leading-relaxed">Set up automated invoicing, reminders, and tracking mechanisms.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            02
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Invoice and Payment Tracking
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Monitor invoices and collect payments on schedule, with reminders sent to
                                        customers.</li>
                                    <li className="leading-relaxed">Track all customer payments to avoid delays in receiving dues.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            03
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Reconciliation and Reporting
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Reconcile payments with bank statements and provide comprehensive
                                        reports.</li>
                                    <li className="leading-relaxed">Maintain clear and organized records of all receivables.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            04
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Aging Analysis and Collection Strategy
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Conduct an aging analysis to identify overdue accounts and strategize
                                        collection.</li>
                                    <li className="leading-relaxed">Follow up with a professional, customer-centric approach to ensure timely
                                        payments.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            05
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                        Regular Review and Adjustments
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Review accounts receivable periodically, optimizing the accounts
                                        receivable process as your business needs evolve.</li>
                                    <li className="leading-relaxed">Make necessary adjustments to improve collections and lower the DSO.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* Industries Served */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Industries Served
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Our accounts receivable service is designed to meet the unique needs of various
                                industries, including:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Real Estate : </span>With the complex transactions involved, businesses in the real estate
                                    sector benefit greatly from our tailored accounts receivable solutions.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Healthcare : </span>We assist healthcare providers in managing patient payments,
                                    insurance billing, and timely collections.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Retail and Wholesale : </span>We optimize receivables for both online and brick-and-mortar
                                    retailers to maintain healthy cash flow.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Manufacturing : </span>Efficient collections and account management are essential for
                                    manufacturing businesses to manage high-volume transactions and maintain working
                                    capital.</li>
                            </ul>
                        </div>

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={IndustryImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-80 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Outsource Accounts Receivable Services to Accomate Global? */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Why Outsource Accounts Receivable Services to Accomate Global?
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="flex w-full space-x-10">

                        <div className="flex justify-center items-center m-auto">
                            <div className="h-60 w-60 rounded-full bg-[#1b2d9f5b] text-white">
                                <div className="flex justify-center items-center m-auto h-full">
                                    <FaQuestion className="h-28 w-28" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Outsourcing accounts receivable services with Accomate Global offers a cost-effective,
                                efficient solution. Here’s why more Australian businesses are turning to us:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Cost Savings : </span>Avoid hiring and training expenses by outsourcing to a skilled,
                                    experienced team that handles all aspects of accounts receivable management.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Expertise on Demand : </span>Access experts trained in managing accounts receivable
                                    who bring specialized knowledge to the table.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Scalable Solutions : </span>As your business grows, our services grow with you, ensuring
                                    that your accounts receivable can keep up with increased demand.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* How We Help Improve Your Balance Sheet and Financial Health */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    How We Help Improve Your Balance Sheet and Financial Health
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Accomate Global’s accounts receivable service has a direct impact on the strength of your
                                balance sheet by:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Reducing Outstanding Receivables : </span>A low DSO indicates faster collections, which
                                    enhances cash flow and adds to working capital.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Improving Collection Ratios : </span>A higher collection ratio indicates a more effective
                                    accounts receivable process, reducing the chance of bad debts.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Providing Regular Financial Insights : </span>Accurate, timely reporting helps maintain a
                                    strong balance sheet and aligns with financial goals.</li>
                            </ul>
                        </div>

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={IndustryImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-80 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Technology-Driven Approach */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Our Technology-Driven Approach
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={IndustryImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-60 w-auto"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Technology plays a vital role in our accounts receivable service. Accomate Global
                                leverages the latest accounts receivable software to deliver a smooth and efficient
                                experience:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Automation : </span>We streamline invoice generation, payment reminders, and
                                    reconciliation through automation, increasing accuracy and reducing errors.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Data Security : </span>Secure payment handling and customer data protection are a top
                                    priority.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Analytics : </span>With access to real-time analytics and comprehensive reporting, you can
                                    easily monitor your financial health and make informed decisions.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* How Accomate Global Boosts Efficiency in Accounts Receivable Management */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    How Accomate Global Boosts Efficiency in Accounts Receivable
                    Management
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Our accounts receivable service is structured to enhance efficiency and ensure smooth
                                operations, helping businesses like yours streamline collections and reduce financial risks.
                                Here’s how we achieve increased efficiency for our clients:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Automated Invoicing and Reminders : </span>We use advanced accounts receivable
                                    software to automate invoicing and payment reminders, ensuring timely
                                    communication with customers.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Optimized Accounts Receivable Process : </span>Our team follows best practices to make
                                    the accounts receivable process efficient, with quick payment tracking and detailed
                                    follow-up processes.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Reduced Administrative Burden : </span>By outsourcing, you save on hiring and training
                                    costs, while our experts handle the heavy lifting.</li>
                            </ul>
                        </div>

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={IndustryImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-80 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Real-Time Tracking and Transparency */}
            <div className="px-8 pb-14 w-full space-y-8">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Real-Time Tracking and Transparency
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="grid grid-cols-2 w-full gap-4">

                        <div className="flex justify-center items-center m-auto">
                            <Image
                                src={IndustryImg}
                                alt="Industry-Specific Accounts Payable Solutions"
                                className="h-60 w-auto"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="leading-relaxed">
                                Accomate Global’s accounts receivable service offers complete transparency and
                                real-time tracking, allowing you to:
                            </div>

                            <ul className="list-disc pl-4 space-y-3">
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Monitor Payment Progress : </span>Check the status of outstanding invoices and pending
                                    payments.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Access Detailed Reports : </span>View collection rates, DSO, and days sales outstanding
                                    to stay informed on all accounts.</li>
                                <li><span className="text-[#1B2D9F] leading-relaxed font-semibold">Plan Effectively : </span>Access insights that support financial planning, budgeting, and
                                    resource allocation.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export const BookkeepingComp = () => {
    return (
        <div className="">

            {/* Bookkeeping Services */}
            <div className="px-8 py-14 bg-gray-100 w-full">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-8">
                        <div className="font-semibold text-3xl leading-relaxed">
                            Bookkeeping Services
                        </div>

                        <div className="leading-relaxed">
                            When it comes to running a business, maintaining accurate and up-to-date financial records
                            is crucial. Accomate Global offers professional bookkeeping services specifically designed
                            for Australian businesses.
                            <br /><br />
                            With our services, you gain financial clarity, compliance, and
                            support tailored to the needs of your industry. We streamline your bookkeeping so you can
                            focus on growing your business.
                        </div>
                    </div>

                    <div className="flex justify-center items-center m-auto">
                        <div className="w-fit relative">
                            <div className="drop-shadow-lg absolute w-full h-auto md:w-full md:h-72 bg-[#9f8e1b5c] -bottom-5 -right-5"></div>
                            <Image
                                src={AboutImg}
                                alt="About Image"
                                className="w-full md:w-auto md:h-72 h-auto drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Accomate Global for Your Bookkeeping Needs? */}
            <div className="px-8 py-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Why Choose Accomate Global for Your Bookkeeping Needs?
                </div>


                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">

                        <Image
                            src={Benefits}
                            alt="benefits of accounts payable services by accomate global"
                            className="flex justify-center mx-auto h-72 w-auto"
                        />

                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[90%]">
                            Our team at Accomate Global understands the unique requirements in Australia. With
                            expertise in compliance, tax laws, and the latest financial software, we bring peace of mind
                            to our clients. Here’s why businesses across Australia choose Accomate Global for their
                            bookkeeping needs:
                        </div>
                        <div className="grid grid-cols-1 gap-7">
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">1. Accuracy and Compliance</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Our team ensures that your financial records are
                                        always precise and in line with Australian accounting standards.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">2. Industry Expertise</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>From small startups to established companies, we offer
                                        solutions that suit the needs of diverse industries.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">3. Cost-Effective Solutions</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Avoid the costs of hiring full-time staff. Our flexible
                                        bookkeeping services can be tailored to fit your budget.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">4. Advanced Technology Integration</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>We leverage the latest bookkeeping and
                                        accounting software, ensuring your records are efficient, secure, and easy to access.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Bookkeeping Services */}
            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                    Our Bookkeeping Services
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                            At Accomate Global, we cover all aspects of bookkeeping to give you a complete,
                            hassle-free solution:
                        </div>

                        <div className="grid grid-cols-3 gap-5">

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            01
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    Daily Transaction Recording
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Maintain daily records of your business’s financial transactions.</li>
                                    <li className="leading-relaxed">Accurate data entry for every sale, purchase, and expense.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            02
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    Accounts Payable and Receivable
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Efficiently manage invoices and payments.</li>
                                    <li className="leading-relaxed">Ensure timely payments from clients and accurate tracking of expenses.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            03
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    Payroll Processing
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Handle all aspects of payroll, from employee payments to tax withholding.</li>
                                    <li className="leading-relaxed">Guarantee compliance with the Fair Work Act and the Australian Tax Office
                                    (ATO) requirements.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            04
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    Bank Reconciliation
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Reconcile your accounts with your bank statements.</li>
                                    <li className="leading-relaxed">Detect any discrepancies early and maintain financial accuracy.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            05
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    Expense Tracking and Management
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Track expenses to help identify and control unnecessary costs.</li>
                                    <li className="leading-relaxed">Provide detailed reports for more effective budget planning.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            06
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    Financial Reporting
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Monthly, quarterly, and annual financial statements.</li>
                                    <li className="leading-relaxed">Customized reporting options to suit your business’s needs and give you a
                                    clear picture of your financial health.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            07
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    BAS (Business Activity Statement) Preparation and Lodgment
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Ensure your BAS is accurate and submitted on time.</li>
                                    <li className="leading-relaxed">Maximize tax efficiency with compliant practices.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            08
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    Tax-Ready Financials
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Keep your books tax-ready to avoid end-of-year surprises.</li>
                                    <li className="leading-relaxed">Streamline the tax preparation process by maintaining organized records.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            09
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    Inventory Management Assistance
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Track and manage your inventory effectively.</li>
                                    <li className="leading-relaxed">Help you make informed decisions about stock and supply management.</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-lg border border-[#9F8D1B]">

                                <div className="flex items-center my-auto space-x-3 border-b pb-3 mb-3">

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white flex shrink-0">
                                        <div className="flex justify-center items-center m-auto h-full">
                                            10
                                        </div>
                                    </div>

                                    <div className="text-[#1B2D9F]">
                                    Cash Flow Management
                                    </div>
                                </div>

                                <ul className="list-disc space-y-2 pl-4">
                                    <li className="leading-relaxed">Monitor cash flow to ensure your business stays financially healthy.</li>
                                    <li className="leading-relaxed">Provide insights to help you manage future cash flow effectively.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        
            {/* Benefits of Our Bookkeeping Services for Australian Businesses */}
            <div className="px-8 pb-14 w-full space-y-6">
                <div className="font-semibold text-3xl leading-relaxed flex justify-center mx-auto text-center">
                Benefits of Our Bookkeeping Services for Australian Businesses
                </div>

                <div className="flex justify-center mx-auto">
                    <Image
                        src={AccountsImg2}
                        alt="Accounts Payable Services"
                        className="h-60 w-auto"
                    />
                </div>

                <div className="flex justify-center mx-auto lg:w-[90%]">
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-7">
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">1. Enhanced Financial Visibility</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Access detailed financial insights that help you make informed business
                                    decisions.</li>
                                    <li>Understand your revenue, expenses, and profit trends to better manage your
                                    business.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">2. Increased Efficiency</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Let our team handle the tedious tasks so you can focus on what matters
                                    most: growing your business.</li>
                                    <li>Access a team of professionals with the latest accounting tools at their
                                    disposal.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">3. Tax Compliance and Accuracy</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Accomate Global stays up-to-date with the latest tax laws and compliance
                                    requirements from the ATO.</li>
                                    <li>Avoid penalties and maximize deductions with our accurate, compliant
                                    bookkeeping services.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">4. Scalable Solutions</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Our bookkeeping services grow with your business. Whether you’re a startup
                                    or a growing enterprise, we adapt our solutions to match your needs.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">5. Reduced Costs and Risks</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>Cut down on costs associated with hiring and training in-house staff.</li>
                                    <li>Minimize risks of inaccuracies that could lead to costly penalties or financial
                                    mismanagement.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold text-[#1B2D9F]">6. Advanced Technology Integration</div>
                                <ul className="list-disc space-y-2 pl-4">
                                    <li>We utilize cloud-based software like Xero, MYOB, and QuickBooks, enabling
                                    real-time access to your records.</li>
                                    <li>Collaborate seamlessly with our team from anywhere in Australia, with
                                    up-to-date financial data at your fingertips.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}