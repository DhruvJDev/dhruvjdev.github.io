"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+91 88728-89961",
        link: "tel:+918872889961",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "dhruvjindal156@gmail.com",
        link: "mailto:dhruvjindal156@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Modern Valley, Kharar, Punjab, 140301",
        link: "https://maps.app.goo.gl/SYcaoStmLaCmvVU96",
    },
];

const ContactUs = () =>
{
    const formRef = useRef();
    const [showPopup, setShowPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false); // New state for error message

    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm(
            'service_bt8ryww',
            'template_zew81vl',
            formRef.current,
            'BaMsYgml3Oe9QHq2A'
        ).then(
            () =>
            {
                setShowPopup(true);
                formRef.current.reset(); // Clears the form
                setTimeout(() => setShowPopup(false), 5000); // Hides the popup after 5 seconds
            },
            (error) =>
            {
                console.log('FAILED...', error.text);
                setShowErrorPopup(true); // Show error popup
                setTimeout(() => setShowErrorPopup(false), 5000); // Hides the error popup after 5 seconds
            }
        );
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-1"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-3xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">
                                Have a project in mind or just want to say hello? Get in touch with me using the form below, and I'll get back to you as soon as possible!
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="user_fname" placeholder="First Name*" required />
                                <Input type="text" name="user_lname" placeholder="Last Name" />
                                <Input type="email" name="user_email" placeholder="E-mail Id*" required />
                                <Input type="tel" name="user_number" placeholder="Mobile Number" />
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <Input type="text" name="user_subject" placeholder="Subject/Purpose*" required />
                            </div>
                            {/* textarea */}
                            <Textarea
                                className="h-[150px]"
                                placeholder="Enter your message here...*"
                                name="user_message"
                                required
                            />
                            {/* btn */}
                            <Button type="submit" size="md">
                                Send Message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
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
                                        <h3 className="text-xl">
                                            <Link href={item.link} target="_blank">
                                                {item.description}
                                            </Link>
                                        </h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Success Popup Notification */}
            {showPopup && (
                <div className="fixed bottom-4 right-4 bg-[#1C1C22] text-accent p-4 rounded-md shadow-lg border border-accent">
                    Mail Sent Successfully!
                </div>
            )}
            {/* Error Popup Notification */}
            {showErrorPopup && (
                <div className="fixed bottom-4 right-4 bg-[#1C1C22] text-red-600 p-4 rounded-md shadow-lg border border-red-600">
                    Mail Not Sent!
                </div>
            )}
        </motion.section>
    );
};

export default ContactUs;
