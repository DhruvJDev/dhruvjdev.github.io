"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import
{
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from 'emailjs-com'
const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+91 95184-19715",
        link: "tel:+919518419715",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "djindal015@gmail.com",
        link: "mailto:djindal015@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Modern Valley, Kharar, Punjab, 140301",
        link: "https://maps.app.goo.gl/SYcaoStmLaCmvVU96",
    },
];
import { motion } from "framer-motion";

const Contact = () =>
{
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-1"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-3xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">Have a project in mind or just want to say hello? Get in touch with me using the form below, and I'll get back to you as soon as possible!
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" name="user_fname" placeholder="First Name" required />
                                <Input type="lastname" name="user_lname" placeholder="Last Lame" />
                                <Input type="email" name="user_email" placeholder="E-mail Id" required />
                                <Input type="tel" name="user_number" placeholder="Mobile Number" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                <Input type="subject" name="user_subject" placeholder="Subject/Purpose" required />
                            </div>
                            {/* textarea */}
                            <Textarea
                                className="h-[150px]"
                                placeholder="Enter your message here..."
                                name="user_message"
                                required
                            />
                            {/* btn */}
                            <Button size="md" className="" value="reset" >
                                Send Message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    {/* <div className="flex-1 flex flex-col items-start xl:items-end order-1 xl:order-none mb-6 xl:mb-0"> */}
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) =>
                            {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">
                                                <Link href={item.link} target="_blank">
                                                    {item.icon}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        {/* Add the iframe below the address section */}
                        {/* <div className="mt-6">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.6011169412866!2d76.62435520576442!3d30.75612090808141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffab11200aa4b%3A0xa7c7c75bf84b7750!2sQJ4G%2BGCP%2C%20Khanpur%20Phirni%2C%20Khanpur%2C%20Punjab%20140413!5e0!3m2!1sen!2sin!4v1722954238081!5m2!1sen!2sin" 
                                width="510" 
                                height="350" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;