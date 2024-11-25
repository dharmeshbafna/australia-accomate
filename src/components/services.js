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
import ReactCardFlip from "react-card-flip";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa6";
import { MdCardGiftcard, MdSpeed } from "react-icons/md";
import { FaMoneyBillWave, FaQuestion, FaRocket } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi2";

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
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white">
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
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white">
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
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white">
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

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white">
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

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white">
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

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white">
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

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white">
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

                                    <div className="rounded-full bg-[#1B2D9F] h-9 w-9 text-white">
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
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white">
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
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white">
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
                                    <div className="h-12 w-12 rounded-full bg-[#1B2D9F] text-white">
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

                <div className="flex justify-center mx-auto lg:w-[80%]">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="font-semibold text-[#1B2D9F] text-lg leading-relaxed">
                                1. What is Accounts Payable Service?
                            </div>
                            <div className="pl-2 leading-relaxed">
                                Accounts payable services involve managing the payment of invoices and tracking
                                outstanding balances, ensuring that suppliers are paid accurately and on time.
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-[#1B2D9F] text-lg leading-relaxed">
                                2. Why Outsource Accounts Payable?
                            </div>
                            <div className="pl-2 leading-relaxed">
                                Outsourcing accounts payable services helps businesses save on costs, reduce errors,
                                and streamline their accounts payable processes by leveraging specialized expertise.
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-[#1B2D9F] text-lg leading-relaxed">
                                3. How Does Account Payable Automation Work?
                            </div>
                            <div className="pl-2 leading-relaxed">
                                Account payable automation uses technology to automate data entry, invoice matching,
                                and payment scheduling, improving accuracy and speed in the AP process.
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-[#1B2D9F] text-lg leading-relaxed">
                                4. How Does Accounts Payable Impact Cash Flow?
                            </div>
                            <div className="pl-2 leading-relaxed">
                                Efficient accounts payable services help optimize cash flow by managing payment
                                schedules and taking advantage of early payment discounts.
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-[#1B2D9F] text-lg leading-relaxed">
                                5. Can Accounts Payable Services Improve Supplier Relationships?
                            </div>
                            <div className="pl-2 leading-relaxed">
                                Yes, by ensuring timely payments and clear communication, accounts payable services
                                can strengthen supplier relationships and secure favorable terms.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AccountsReconComp = () => {
    return (
        <div className="px-8 py-14">
            Accounts Reconciliation Services
        </div>
    )
}

export const AccountsReceivableComp = () => {
    return (
        <div className="px-8 py-14">
            Accounts Receivable Services
        </div>
    )
}

export const BookkeepingComp = () => {
    return (
        <div className="px-8 py-14">
            Book Keeping Services
        </div>
    )
}