import { AccountsReconComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Accounts Reconciliation Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
}

export default function AccountsRecon() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <AccountsReconComp />
        </div>
    )
}