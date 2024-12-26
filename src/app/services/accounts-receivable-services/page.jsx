import { AccountsReceivableComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Accounts Receivable Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
    keywords: [
        'products or services',
        'accounts receivable outsourcing',
        'balance sheet',
        'increased efficiency',
        'collect payments',
        'customer payments',
        'managed accounts receivable',
        'accounts receivable process',
        'accounts receivable management services',
        'working capital',
        'days sales outstanding dso',
        'increase cash flow',
        'accounts receivable collection',
        'effective accounts receivable management',
        'businesses in the real estate',
        'bad debts',
        'accounts receivable software',
        'outsource accounts receivable services',
        'real time',
        'goods or services'
    ],
}

export default function AccountsRecon() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <AccountsReceivableComp />
        </div>
    )
}