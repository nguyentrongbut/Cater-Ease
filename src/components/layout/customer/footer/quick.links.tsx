import {quickLinks} from "@/constants";
import {LinkHover} from "@/components/link";
import HeadingFooter from "@/components/layout/customer/footer/heading.footer";

const QuickLinks = () => {
    return (
        <div>
            <HeadingFooter>Quick Links</HeadingFooter>
            <ul className="space-y-2">
                {quickLinks.map(({href, title}) => (
                    <li key={title}>
                        <LinkHover
                            href={href}
                        >
                            {title}
                        </LinkHover>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuickLinks