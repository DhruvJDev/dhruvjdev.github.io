import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Component
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats"

const Home = () =>
{
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1">
              Hello, I am <br /><span>Dhruv Jindal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A well-organized, creative, and goal- oriented graduate with excellent communication, problem-solving, and
              leadership skills seeking to secure a position of challenge and responsibility while managing key projects.
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
                {/* <Social /> */}
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
}

export default Home;