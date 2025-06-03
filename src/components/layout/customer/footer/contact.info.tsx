import {LinkIcon} from "@/components/link";
import {contactItems} from "@/constants";
import HeadingFooter from "@/components/layout/customer/footer/heading.footer";

const ContactInfo = () => {

    return (
        <div>
            <HeadingFooter>Contact Us</HeadingFooter>
            <div className="space-y-4">
                {
                    contactItems.map(({href, icon, title, target}) => (
                        <LinkIcon
                            key={title}
                            href={href}
                            icon={icon}
                            target={target}
                            className="flex items-center space-x-3 hover:text-primary">
                            <span>{title}</span>
                        </LinkIcon>
                    ))
                }
            </div>
        </div>
    )
}

export default ContactInfo