"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/DhruvJDev" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/its-dhruv-jindal/" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className={iconStyles}>
                            {item.icon}
                        </a>
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
