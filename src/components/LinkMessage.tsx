import {GoLinkExternal} from "react-icons/go";
import React from "react";

interface LinkProps {
    text?: string;
    link: string;
}

const LinkMessage: React.FC<LinkProps> = ({text, link}) => {
    return (
        <a
            className="text-gray-400 leading-10 flex gap-2 flex-wrap italic"
            target={"_blank"}
            rel={"noreferrer"}
            href={link}>{text}
            <GoLinkExternal className="w-4 h-4 self-center"/>
        </a>
    )
}

export default LinkMessage;