
import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";


const About = () => {
    const grid2Container = useRef();

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-4 gap-4 mt-12 auto-rows-[15rem]">
        {/* Grid 1: large block, 2x2 */}
<div className="relative flex items-end justify-start grid-default-color col-span-2 row-span-2 rounded-xl overflow-hidden px-8 py-6">
  {/* Background Image */}
  <img
    src="/assets/coding-pov.png"
    alt="Coding POV"
    className="absolute scale-[2.5] right-[-5rem] top-[-1rem] md:left-[50%] md:top-[2.5rem] pointer-events-none opacity-20 lg:opacity-30"
  />

  {/* Text Content */}
  <div className="z-10 max-w-xl space-y-4">
    <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-md">
      Hi, I'm Ayushi Soni
    </p>
    <p className="text-base sm:text-lg md:text-xl font-light text-gray-200 leading-relaxed drop-shadow-sm">
      Over the last <span className="font-semibold text-white">3 years</span>, I’ve developed strong frontend skills
      to build dynamic and responsive web applications. With some backend experience, I’m now diving into the world
      of <span className="font-semibold text-indigo-300">AI</span> and <span className="font-semibold text-indigo-300">machine learning</span> to broaden my capabilities and explore new ideas.
    </p>
  </div>

  {/* Bottom Gradient Overlay */}
  <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
</div>


        {/* Grid 2 */}
        <div className="grid-default-color col-span-2 rounded-xl">
            <div ref={grid2Container} className="relative flex items-center justify-center w-full
            h-full">
                <p className="flex items-end text-5xl text-gray-500">
                    Animations as art
                </p>
                <Card style={{rotate: "50deg", top:"30%", left:"10%"}}
                text="User-Centric Design" containerRef={grid2Container}/>
                <Card style={{rotate: "-30deg", top:"60%", left:"45%"}}
                text="Microinteractions" containerRef={grid2Container}/>
                <Card style={{rotate: "70deg", bottom:"50%", left:"65%"}}
                text="Design patterns" containerRef={grid2Container}/>
                <Card style={{rotate: "-60deg", top:"50%", left:"-10%"}}
                text="Visual Thinking" containerRef={grid2Container}/>
                <Card style={{rotate: "20deg", top:"10%", left:"30%"}}
                text="Motion is Meaning" containerRef={grid2Container}/>
                 {/* <Card 
                 style={{rotate: "30deg", top:"80%", left:"80%"}}
                image="assets/logos/csharp-pink.png"
                />
                <Card 
                 style={{rotate: "-45deg", top:"70%", left:"25%"}}
                image="assets/logos/dotnet-pink.png"
                /> */}

            </div>
        </div>

       <div className="relative grid-black-color col-span-2 rounded-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between px-6 py-8 gap-6">
  {/* Text Section */}
  <div className="z-10 w-full sm:w-1/2 space-y-3 text-center sm:text-left">
    <p className="headtext">Time Zone</p>
    <p className="subtext font-bold">
      Open to <span className="text-accent">remote</span>, <span className="text-accent">hybrid</span>, or <span className="text-accent">in-office</span> roles
    </p>
  </div>

  {/* Globe Section */}
  <div className="w-full sm:w-1/2 max-w-[250px] sm:max-w-[300px] md:max-w-[350px]">
    <Globe className="w-full h-auto" />
  </div>
</div>

        {/* Grid 4 */}
        <div className="grid-special-color col-span-1 rounded-xl">
          <div className="flex flex-col items-center justify-center
          gap-4 size-full">
            <p className="text-center headtext">Do you want to start a project together?</p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        {/* Grid 5: Skills Section */}
<div className="grid-default-color col-span-3 rounded-xl p-6 flex flex-col items-start justify-center">
  <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack & Interests</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
    {[
      "React.js",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Prismic",
      "Machine Learning",
      "AI Concepts",
      "Node.js (Learning)",
      "Express (Learning)",
      "MongoDB (Learning)",
      
    ].map((skill, index) => (
      <span
        key={index}
        className="bg-white/10 text-white text-sm px-3 py-2 rounded-lg shadow-sm backdrop-blur-md border border-white/20"
      >
        {skill}
      </span>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
