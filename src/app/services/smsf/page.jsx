import { SMSFComp } from "@/components/services"
import { Breadcrumb } from "@/components/other"

export const metadata = {
    title: "SMSF Services for Australian Businesses | Accomate Global",
    icons: {
        icon: '/n_icon.ico',
    },
}

export default function SMSFServices() {
    return (
        <div className="overflow-x-hidden">
            <Breadcrumb />
            <SMSFComp />
        </div>
    )
}