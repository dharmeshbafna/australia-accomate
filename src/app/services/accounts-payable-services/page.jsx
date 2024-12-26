import { AccountsPayableComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Accounts Payable Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
    keywords: [
        'accounts payable outsourcing services',
        'payable service',
        'payment process',
        'accounts payable outsourcing company',
        'duplicate payments',
        'accounts payable functions',
        'accounts payable processes',
        'ap process',
        'invoice processing',
        'working capital',
        'accounts payable ap',
        'account payable automation',
        'improve cash flow',
        'supplier relationships',
        'time consuming',
        'purchase orders',
        'managed account payable',
        'early payment discount',
        'due dates'
    ],    
}

export default function AccountsPayable() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <AccountsPayableComp />
        </div>
    )
}