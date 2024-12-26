import { DataEntryComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Data Entry Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
    keywords: [
        'data entry faqs',
        'data entry outsourcing services',
        'data security',
        'turnaround times',
        'product data entry',
        'real estate',
        'data process',
        'data entry specialist',
        'cost effective data entry',
        'data entry companies',
        'leading data entry',
        'offshore data entry',
        'high accuracy',
        'accurate data entries',
        'data entry services company',
        'data entry outsourcing company',
        'online data entry',
        'quality data entry',
        'data entry projects'
    ]    
}

export default function Bookkeeping() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <DataEntryComp />
        </div>
    )
}