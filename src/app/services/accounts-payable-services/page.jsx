import { AccountsPayableComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Accounts Payable Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.png',
    },
}

export default function AccountsPayable() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <AccountsPayableComp />
        </div>
    )
}