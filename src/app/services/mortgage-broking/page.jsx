import { MortgageBrokingComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Mortgage Broking Support Services for Australian Brokers | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
}

export default function MortgageBroking() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <MortgageBrokingComp />
        </div>
    )
}
