import {LinkHover} from "@/components/link";
import {socialItem} from "@/constants";

const SocialLinks = () => {
    return (
        <div className="flex space-x-4">
            {socialItem.map(({
                                 Icon,
                                 label,
                                 href
                             }) => (
                <LinkHover
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-2xl hover:text-primary transition-colors"
                >
                    <Icon className="size-5"/>
                </LinkHover>
            ))}
        </div>
    )
}

export default SocialLinks