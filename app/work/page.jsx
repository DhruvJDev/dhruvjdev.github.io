"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import
{
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Description } from "@radix-ui/react-dialog";

const projects = [
    {
        category: "Front-end",
        title: "Made Setup",
        description:
            "Here you can buy any or every product related to your setup, including categories like gamers, designers, etc., so you can choose products according to your specification or requirement.",
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
        image: '/assets/work/p-2.png',
        live: "",
        github: "https://github.com/DhruvJDev/made-setup",
    },
    {
        category: "Front-end",
        title: "Protect Environment",
        description: "Environs is a responsive website template for environmental NGOs, featuring social media integration, SEO optimization, and donation support. Built with Bootstrap 5, HTML5, CSS3, and jQuery3, it helps organizations effectively communicate and engage supporters.",
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
        image: '/assets/work/p-1.png',
        live: "https://dhruvjdev.github.io/Protect-Environment/",
        github: "https://github.com/DhruvJDev/Protect-Environment",
    },
    // {
    //     category: "UI/UX Design",
    //     title: "Personal Card",
    //     description:
    //         "Here you can buy any or every product related to your setup, including categories like gamers, designers, etc., so you can choose products according to your specification or requirement.",
    //     stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    //     image: '/assets/work/p-2.png',
    //     live: "https://www.figma.com/proto/nDoI9q19NwMF1uXnm5cSTF/Personal-Card?page-id=2%3A27&node-id=2-28&node-type=CANVAS&viewport=443%2C413%2C0.27&t=0nru6v6ND5fi4W1F-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A28&share=1",
    //     figma: "https://www.figma.com/design/nDoI9q19NwMF1uXnm5cSTF/Personal-Card?node-id=2-27&t=cUVmgXcwvTiV18v6-1",
    // },
    // Additional projects can be added here
];

const Work = () =>
{
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) =>
    {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-center order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[100%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {/* Dynamically generate the project number */}
                                {`0${projects.indexOf(project) + 1}`}
                            </div>
                            {/* project title */}
                            <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* project category */}
                            <h2 className="text-[30px] font-bold leading-none text-white/80 group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/* remove the last comma */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            {/* border */}
                            <div className="border border-white/60"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* Conditionally render the live project/prototype button */}
                                {project.live && (
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Link
                                                    href={project.live}
                                                    passHref
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                                                >
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{project.figma ? "Live Prototype" : "Live Project"}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                                {/* Conditionally render the GitHub/Figma button */}
                                {(project.github || project.figma) && (
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Link
                                                    href={project.github || project.figma}
                                                    passHref
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                                                >
                                                    {project.github ? (
                                                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                    ) : (
                                                        <FaFigma className="text-white text-3xl group-hover:text-accent" />
                                                    )}
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{project.github ? "Github Repository" : "Figma Design"}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                alt="project image"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* Slide button */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
