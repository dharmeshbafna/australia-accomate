'use client'
import { FaAngleRight } from "react-icons/fa6";
import { useState, useEffect } from "react"
import { SiTicktick } from "react-icons/si";
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';

import { FaQuestion, FaRecycle } from "react-icons/fa";
import { FaChevronDown, FaFileInvoiceDollar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

import AccountBanner from "../../public/banner1.jpg"
import ReactCardFlip from "react-card-flip";
import { usePathname } from "next/navigation";

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
        <div className="px-8 py-14 space-y-14">

            <div className="flex items-center my-auto w-full space-x-5">
                <div className="lg:w-[30%] flex justify-center mx-auto">
                    <div className="w-48 h-48 bg-[#1B2D9F] rounded-full">
                        <div className="flex justify-center items-center m-auto h-full">
                            <FaFileInvoiceDollar className="text-white w-24 h-24" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[70%] leading-relaxed text-lg">
                    Efficient management of accounts payable is essential for maintaining a business’s financial
                    health. Accomate Global offers tailored accounts payable services designed to streamline
                    your payment process, reduce costs, and improve cash flow. Our expertise in accounts
                    payable outsourcing services has made us a trusted partner for businesses across
                    Australia, delivering reliable and scalable solutions that help manage your accounts
                    payable functions effectively.
                </div>
            </div>

            {/* Why Choose Accomate Global for Accounts Payable Services? */}
            <div className="grid grid-cols-2 gap-7">
                <div className="space-y-4">
                    <div className="font-semibold text-3xl lg:w-[80%] leading-relaxed">
                        <div>Why Choose Accomate Global for Accounts Payable Services?</div>
                    </div>

                    <div className="leading-relaxed">
                        Managing accounts payable can be a complex and time-consuming process, with risks of
                        errors, delayed payments, and strained supplier relationships. At Accomate Global, we
                        simplify your accounts payable processes by providing comprehensive accounts payable
                        services that ensure timely and accurate payments, better cash flow, and improved financial
                        management.<br /><br />
                        Here’s why Australian businesses trust Accomate Global for their accounts payable
                        services:
                        <br />
                        <span className="flex space-x-1 pt-2">
                            <div>
                                <TiTick className="text-lg text-[#9F8D1B] mt-1" />
                            </div>
                            <div>
                                <span className="font-semibold">Enhanced Efficiency:</span> Our streamlined AP process eliminates errors and minimizes
                                delays.
                            </div>
                        </span>
                        <span className="flex space-x-1 pt-2">
                            <div>
                                <TiTick className="text-lg text-[#9F8D1B] mt-1" />
                            </div>
                            <div>
                                <span className="font-semibold">Cash Flow Optimization:</span> We focus on improving your working capital and securing
                                early payment discounts.
                            </div>
                        </span>
                        <span className="flex space-x-1 pt-2">
                            <div>
                                <TiTick className="text-lg text-[#9F8D1B] mt-1" />
                            </div>
                            <div>
                                <span className="font-semibold">Compliance and Security:</span> With secure data handling and compliance-focused
                                processes, we protect your financial information.
                            </div>
                        </span>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-center items-center m-auto h-full">
                        <FaQuestion className="h-96 w-auto text-[#9f8e1b5c]" />
                    </div>
                </div>
            </div>

            {/* Our Accounts Payable Services */}
            <div className="space-y-7">
                <div className="font-semibold text-3xl text-center lg:w-[80%] flex justify-center mx-auto">
                    <div>Our Accounts Payable Services</div>
                </div>

                <div className="leading-relaxed text-center flex justify-center mx-auto lg:w-[80%]">
                    Accomate Global’s accounts payable services cover every aspect of the accounts payable
                    lifecycle, from invoice processing to payment disbursement. Here are the key components of
                    our offerings:
                </div>

                <div className="grid grid-cols-3 gap-6">

                    <div className="p-4 rounded-lg border border-[#9F8D1B]">
                        <div className="text-center flex justify-center mx-auto text-[#1B2D9F] text-lg font-semibold border-b mb-3 pb-3">
                            Invoice Processing
                        </div>
                        <ul className="list-disc space-y-3 pl-3">
                            <li className="leading-relaxed">Efficient and accurate invoice processing for fast and error-free data entry.</li>
                            <li className="leading-relaxed">Match invoices with purchase orders and receipts to ensure accuracy in
                                payments and prevent duplicate payments.</li>
                        </ul>
                    </div>

                    <div className="p-4 rounded-lg border border-[#9F8D1B]">
                        <div className="text-center flex justify-center mx-auto text-[#1B2D9F] text-lg font-semibold border-b mb-3 pb-3">
                            Payment Disbursement
                        </div>
                        <ul className="list-disc space-y-3 pl-3">
                            <li className="leading-relaxed">Timely payment processing, ensuring payments are made by the correct due
                                dates to maintain positive supplier relationships.</li>
                            <li className="leading-relaxed">Options for scheduled payments, including early payment discounts to save
                                on costs.</li>
                        </ul>
                    </div>

                    <div className="p-4 rounded-lg border border-[#9F8D1B]">
                        <div className="text-center flex justify-center mx-auto text-[#1B2D9F] text-lg font-semibold border-b mb-3 pb-3">
                            Accounts Payable Automation
                        </div>
                        <ul className="list-disc space-y-3 pl-3">
                            <li className="leading-relaxed">Leverage account payable automation technology to streamline the AP
                                process and reduce manual workload.</li>
                            <li className="leading-relaxed">Automated reminders for due dates and early payment opportunities,
                                improving efficiency and cash flow.</li>
                        </ul>
                    </div>

                    <div className="p-4 rounded-lg border border-[#9F8D1B]">
                        <div className="text-center flex justify-center mx-auto text-[#1B2D9F] text-lg font-semibold border-b mb-3 pb-3">
                            Reconciliation and Reporting
                        </div>
                        <ul className="list-disc space-y-3 pl-3">
                            <li className="leading-relaxed">Regular reconciliation of accounts payable balances to ensure accuracy and
                                prevent discrepancies.</li>
                            <li className="leading-relaxed">Detailed reporting on accounts payable functions to keep track of
                                outstanding balances, payment history, and cash flow.</li>
                        </ul>
                    </div>

                    <div className="p-4 rounded-lg border border-[#9F8D1B]">
                        <div className="text-center flex justify-center mx-auto text-[#1B2D9F] text-lg font-semibold border-b mb-3 pb-3">
                            Purchase Order Matching
                        </div>
                        <ul className="list-disc space-y-3 pl-3">
                            <li className="leading-relaxed">Our managed account payable services include purchase order matching
                                to verify order fulfillment.</li>
                            <li className="leading-relaxed">Ensures that all payments are accurate, based on verified deliveries, reducing
                                payment errors.</li>
                        </ul>
                    </div>

                    <div className="p-4 rounded-lg border border-[#9F8D1B]">
                        <div className="text-center flex justify-center mx-auto text-[#1B2D9F] text-lg font-semibold border-b mb-3 pb-3">
                            Duplicate Payment Detection
                        </div>
                        <ul className="list-disc space-y-3 pl-3">
                            <li className="leading-relaxed">Identify and prevent duplicate payments through automated systems and
                                thorough checks.</li>
                            <li className="leading-relaxed">Safeguard working capital by eliminating unnecessary payments and
                                ensuring financial accuracy.</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Benefits of Accounts Payable Services by Accomate Global */}
            <div className="w-full">

                <div className="space-y-7">
                    <div className="font-semibold text-3xl w-full leading-relaxed">
                        <div>Benefits of Accounts Payable Services by Accomate Global</div>
                    </div>

                    <div className="leading-relaxed">
                        Accomate Global’s accounts payable services provide several advantages, allowing
                        businesses to improve efficiency, enhance supplier relationships, and optimize working
                        capital. Here’s how our services benefit Australian businesses:
                    </div>

                    <div className="grid grid-cols-3 gap-x-6 gap-y-8">

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">1.</span> Improved Cash Flow Management
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
                                <li className="leading-relaxed">Our accounts payable outsourcing services help manage cash flow more
                                    effectively by scheduling payments strategically.</li>
                                <li className="leading-relaxed">Reduce payment delays and optimize working capital for smoother financial
                                    operations.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">2.</span> Enhanced Supplier Relationships
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
                                <li className="leading-relaxed">Timely payments foster trust with suppliers, strengthening supplier
                                    relationships and potentially gaining favorable terms.</li>
                                <li className="leading-relaxed">Leveraging early payment discounts with key suppliers also provides cost
                                    savings.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">3.</span> Reduction in Errors and Duplicates
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
                                <li className="leading-relaxed">With our accounts payable services, we prevent duplicate payments and
                                    other costly errors.</li>
                                <li className="leading-relaxed">Automated checks ensure that every payment is verified, accurate, and
                                    matched to the appropriate invoice and purchase order.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">4.</span> Increased Efficiency with Automation
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
                                <li className="leading-relaxed">Account payable automation technology helps reduce manual workload
                                    and eliminate repetitive tasks.</li>
                                <li className="leading-relaxed">Automated alerts for due dates help prevent late payments, supporting better
                                    cash flow.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">5.</span> Cost Savings and Better Working Capital
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
                                <li className="leading-relaxed">Take advantage of early payment discounts where possible, reducing the
                                    cost of goods and services.</li>
                                <li className="leading-relaxed">Effective management of accounts payable improves cash flow and helps
                                    businesses maintain sufficient working capital.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Accounts Payable Process at Accomate Global*/}
            <div className="flex w-full space-x-4">
                <div className="lg:w-[35%] h-auto">
                    <div className="flex justify-center items-center m-auto h-full">
                        <FaRecycle className="text-[#1b2d9f5b] h-80 w-auto" />
                    </div>
                </div>

                <div className="lg:w-[65%] space-y-7">
                    <div className="font-semibold text-3xl w-full leading-relaxed">
                        <div>Accounts Payable Process at Accomate Global</div>
                    </div>

                    <div className="leading-relaxed">
                        Our accounts payable services are designed to be efficient and secure, ensuring that all
                        payments are processed correctly and on time. Here’s an overview of the steps involved in
                        our AP process:
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-8">

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">1.</span> Invoice Collection and Verification
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
                                <li className="leading-relaxed">Gather all invoices from suppliers, verify details, and match them with
                                purchase orders and receipts.</li>
                                <li className="leading-relaxed">Ensure all necessary documentation is available, reducing the risk of errors in
                                the payment process.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">2.</span> Data Entry and Validation
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
                                <li className="leading-relaxed">Enter invoice data into our system, using accounts payable automation to
                                speed up data entry and reduce manual errors.</li>
                                <li className="leading-relaxed">Validate entries to ensure consistency with financial records, ensuring all
                                accounts are accurately updated.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">3.</span> Approval Workflow
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
                                <li className="leading-relaxed">Implement an approval workflow where necessary, allowing authorized
                                personnel to review and approve payments.</li>
                                <li className="leading-relaxed">This adds a layer of accountability, reducing the chance of unapproved or
                                incorrect payments.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">4.</span> Payment Scheduling and Processing
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
                                <li className="leading-relaxed">Schedule payments based on due dates and early payment discount
                                opportunities.</li>
                                <li className="leading-relaxed">Timely payments ensure smooth supplier relations and take advantage of
                                cost-saving opportunities.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <div className="font-semibold text-[#1B2D9F] text-lg">
                                <span className="">5.</span> Reconciliation and Reporting
                            </div>

                            <ul className="pl-5 list-disc space-y-3">
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
    )
}