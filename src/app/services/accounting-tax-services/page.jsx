import { AccountingTaxComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Accounting & Tax Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
}

export default function AccountingTaxServices() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <AccountingTaxComp />
        </div>
    )
}
