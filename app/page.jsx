"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Component
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const TypingEffect = () => {
  const texts = ["Front-End Developer", "UI/UX Designer", "Freelancer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 200;
    const currentText = texts[currentTextIndex];

    const handleTyping = () => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        const nextDisplayText = isDeleting
          ? currentText.substring(0, displayText.length - 1)
          : currentText.substring(0, displayText.length + 1);
        setDisplayText(nextDisplayText);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, texts, currentTextIndex]);

  return (
    <span className="text-xl">
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-accent">
            <TypingEffect />
            </span>
            <h1 className="h1">
              Hello, I am <br />
              <span>Dhruv Jindal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A well-organized, creative, and goal-oriented graduate with
              excellent communication, problem-solving, and leadership skills
              seeking to secure a position of challenge and responsibility while
              managing key projects.
            </p>
            {/* btn and social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="/assets/Dhruv_Jindal_Resume.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  Download CV
                  <FiDownload className="text-xl" />
                </a>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover-transition-all duration=500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
