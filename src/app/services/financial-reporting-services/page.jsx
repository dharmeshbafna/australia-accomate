import { FinancialComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Financial Reporting Service for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
}

export default function Bookkeeping() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <FinancialComp />
        </div>
    )
}