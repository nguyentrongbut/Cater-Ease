import {Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Twitter} from "lucide-react";
import {TContactItem, TQuickLink, TSocialItem} from "@/types";

const phone = "0326654301"
const email = "cloly031128@gmail.com"
const ggMapName = 'FPT Aptech Hà Nội - Hệ thống đào tạo lập trình viên quốc tế'
const ggMap = 'https://www.google.com/maps/place/FPT+Aptech+H%C3%A0+N%E1%BB%99i+-+H%E1%BB%87+th%E1%BB%91ng+%C4%91%C3%A0o+t%E1%BA%A1o+l%E1%BA%ADp+tr%C3%ACnh+vi%C3%AAn+qu%E1%BB%91c+t%E1%BA%BF/@21.0288251,105.7797164,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab00954decbf:0xdb4ee23b49ad50c8!8m2!3d21.0288201!4d105.7822967!16s%2Fg%2F11vj7r6gkp?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'

export const socialItem: TSocialItem[] = [
    {
        Icon: Facebook,
        label: "Facebook",
        href: "https://www.facebook.com/fpt.aptech.hn"
    },
    {
        Icon: Twitter,
        label: "Twitter",
        href: "https://twitter.com/fptaptech"
    },
    {
        Icon: Instagram,
        label: "Instagram",
        href: 'https://www.instagram.com/fptaptech/'
    },
    {
        Icon: Linkedin,
        label: "LinkedIn",
        href: 'https://www.linkedin.com/company/fpt-aptech/'
    }
]

export const quickLinks : TQuickLink[] = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '/services',
        title: 'Services',
    },
    {
        href: '/booking',
        title: 'Booking',
    },
    {
        href: '/about-us',
        title: 'About Us',
    },
    {
        href: '/contact',
        title: 'Contact',
    },
    {
        href: '/faq',
        title: 'FAQ',
    }
]

export const contactItems: TContactItem[] = [
    {
        href: `tel:${phone}`,
        title: phone,
        icon: <PhoneCall className="size-5 shrink-0"/>
    },
    {
        href: `mailto:${email}`,
        title: email,
        icon: <Mail className="size-5 shrink-0"/>
    },
    {
        href: ggMap,
        title: ggMapName,
        icon: <MapPin className="size-5 shrink-0"/>,
        target: "_blank"
    }
]