import { DataEntryComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "Data Entry Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
}

export default function Bookkeeping() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <DataEntryComp />
        </div>
    )
}