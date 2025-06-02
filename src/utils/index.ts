import {Montserrat, Open_Sans} from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600', '700', '800'],
    variable: "--font-montserrat"
})

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: "--font-openSans"
})

export {montserrat, openSans};