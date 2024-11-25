import { AccountsReceivableComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Accounts Receivable Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
}

export default function AccountsRecon() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <AccountsReceivableComp />
        </div>
    )
}