import { FinancialComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Financial Reporting Service for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
    keywords: [
        'outsource financial reporting',
        'balance sheet',
        'financial performance',
        'types of financial reports',
        'financial activity',
        'analysis services',
        'income statement',
        'reporting requirements',
        'income statements balance sheets',
        'bird eye view',
        'financial statement',
        'financial health',
        'Indian accounting standards',
        'outsourcing financial reporting service',
        'financial reporting software',
        'international financial reporting',
        'general ledger reports',
        'time consuming',
        'preparing financial reports',
        'profit and loss statements'
    ],    
}

export default function Bookkeeping() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <FinancialComp />
        </div>
    )
}