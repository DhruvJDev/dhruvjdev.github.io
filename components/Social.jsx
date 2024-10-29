"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaGoogle } from "react-icons/fa"; // Using FaGoogle for the Google icon

const socials = [
    { icon: <FaGithub />, path: "https://github.com/DhruvJDev" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/its-dhruv-jindal/" },
    { icon: <FaGoogle />, path: "https://g.dev/dhruvjindal" }, // Replaced with Google icon
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

