"use client";

import { Description } from "@radix-ui/react-dialog";
import { icons } from "lucide-react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import
{
    FaHtml5,
    FaCss3,
    FaJs,
    FaGithub,
    FaGitAlt,
    FaNodeJs,
    FaFigma,
    FaPython,
} from "react-icons/fa";
import { SiMysql, SiPhp, SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About
const about = {
    title: "About Me",
    description: 
    // "I am Dhruv Jindal, a Web Developer and UI/UX Designer pursuing a Bachelor’s at Chandigarh University. I create responsive websites and intuitive interfaces to deliver innovative solutions and great user experiences.",
    "Here you can know or contact me",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Dhruv Jindal"
        },
        {
            fieldName: "Phone",
            fieldValue: "+91 95184-19715"
        },
        {
            fieldName: "Experience",
            fieldValue: "Fresher"
        },
        {
            fieldName: "Email",
            fieldValue: "Djindal015@gmail.com"
        },
        {
            fieldName: "Freelancing",
            fieldValue: "Available"
        },
        {
            fieldName: "Language",
            fieldValue: "English, Hindi"
        },
    ]
};

// Experience
const experience = {
    icon: "/public/assets/resume/badge.svg",
    title: "My Experience",
    description:
        // "I got training in HTML, CSS, React.js, Bootstrap at Excellence Technology Pvt. Ltd.",
        "Experience That Defines My Expertise",
    items: [
        {
            company: "Excellence Technology Pvt. Ltd.",
            position: "Training",
            duration: "May 2024 - July 2024",
        },
        // {
        //     company: "Excellence Technology Pvt. Ltd.",
        //     position: "Training",
        //     duration: "May 2024 - July 2024",
        // },

    ],
};

// Education
const education = {
    icon: "/public/assets/resume/cap.svg",
    title: "My Education",
    description:
        // "Pursuing a Bachelor of Computer Applications at Chandigarh University, with a solid foundation from Shree Kali Devi Vidya Mandir School (12th - CBSE) and Subhash Tayal Public School (10th - CBSE).",
        "The Foundation of My Knowledge",
    items: [
        {
            institution: "Chandigarh University",
            degree: "Bachelor of Computer Applications",
            duration: "Oct 2022 - Pursuing",
        },
        {
            institution: "Shree Kali Devi Vidya Mandir School",
            degree: "12th - CBSE",
            duration: "Apr 2021 - Mar 2022",
        },
        {
            institution: "Subhash  Tayal Public School",
            degree: "10th - CBSE",
            duration: "Apr 2019 - Mar 2020",
        },
    ],
};

// Certification
const certification = {
    icon: "/public/assets/resume/cap.svg",
    title: "My Certification",
    description:
        "Explore My Collection of Certifications.",
    items: [
        {
            institution: "Linked Learning",
            degree: "Microsoft Office Fundamentals",
            duration: "March 2024",
            link: "https://drive.google.com/file/d/1RRmXKgOa88R_IH3mA7d2p8CNhV01KXzr/view?usp=share_link",
        },
        {
            institution: "COURSE",
            degree: "Introduction to Social Media Marketing",
            duration: "March 2023",
            link: "https://coursera.org/verify/KPZAVXMP7WW6",
        },
        {
            institution: "COURSE",
            degree: "Fundamentals of Social Media Advertising",
            duration: "March 2023",
            link: "https://coursera.org/verify/PD4RKLSBB2U4",
        },
        {
            institution: "COURSE",
            degree: "Advertising with Meta",
            duration: "March 2023",
            link: "https://coursera.org/verify/SY54X364VKXP",
        },
        {
            institution: "Infosys Springboard",
            degree: "Infosys Object Oriented Programming using Python",
            duration: "November 2022",
            link: "https://drive.google.com/file/d/189vTRNAqH47r3Hdocz_eR6ds8iq168A3/view?usp=share_link",
        },
        {
            institution: "Infosys Springboard",
            degree: "Infosys React JS  ",
            duration: "September 2022",
            link: "https://drive.google.com/file/d/1KwDBQWzbV7D4SVLa0XyYlmJuipxihPxo/view?usp=share_link",
        },
        {
            institution: "Infosys Springboard",
            degree: "Infosys React Native  ",
            duration: "September 2022",
            link: "https://drive.google.com/file/d/1LQuOCEOc-99aMwTi698Iklsv3jOvmXkt/view?usp=share_link",
        },
        {
            institution: "Great Learning Academy",
            degree: "Google Search Campaign",
            duration: "July 2022",
            link: "https://verify.mygreatlearning.com/RTYEVFXX",
        },
        {
            institution: "Eduonix",
            degree: "Designing Using Adobe Photoshop",
            duration: "May 2021",
            link: "https://www.eduonix.com/certificate/c97b5340e4",
        },
    ],
};

// Skills
const skill = {
    title: "My Skills",
    description:
        // "Skilled in HTML, CSS, JavaScript, and PHP for web development, with expertise in UI/UX design using tools like Figma. Adept at leveraging Bootstrap, SwiperJS, and various APIs to create dynamic and engaging websites.",
        "A Showcase of My Expertise",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <SiPhp />,
            name: "Php",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <SiMysql />,
            name: "MySQL",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <FaGithub />,
            name: "Github",
        },
        {
            icon: <FaGitAlt />,
            name: "Git",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import
{
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () =>
{
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="certification">Certification</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Certification */}
                        {/* <TabsContent value="certification" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{certification.title}</h3>
                                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                                    {certification.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {certification.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">
                                                    {item.duration}
                                                </span>
                                                <a href={item.link} target="_blank" className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">
                                                    <h3>{item.degree}</h3>
                                                </a>

                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent> */}

                        {/* Certification */}
                        <TabsContent value="certification" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{certification.title}</h3>
                                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                                    {certification.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {certification.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent w-full flex justify-between items-center">
                                                    {item.duration}
                                                    <Link
                                                        href={item.link}
                                                        target="_blank"
                                                        className="w-[30px] h-[30px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                                    >
                                                        <BsArrowDownRight className="text-primary text-xl" />
                                                    </Link>
                                                </span>
                                                {/* <a href={item.link} target="_blank" className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left"> */}
                                                    <h3>{item.degree}</h3>
                                                {/* </a> */}

                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skill.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skill.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skill.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;
