import { AccountsReconComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Accounts Reconciliation Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
    keywords: [
        'account reconciliation software',
        'error free',
        'credit card statements with your bank records',
        'general ledger',
        'financial close',
        'financial records',
        'bank statement',
        'bank reconciliations',
        'time consuming',
        'bank account reconciliation',
        'credit card account',
        'reconciliation requirements',
        'accounts reconciliation process',
        'types of accounts',
        'reconciliation services',
        'invoice matching',
        'financial statements',
        'credit card reconciliations',
        'types of reconciliation',
        'reconciliation of credit card statements'
    ],    
}

export default function AccountsRecon() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <AccountsReconComp />
        </div>
    )
}