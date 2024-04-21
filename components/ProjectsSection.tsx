import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "DAHLAN CAR CARE",
    description:
      "DAHLAN CAR CARE is a Automotive Detailing Business website, showcasing sections like About, Services, Store, and Members. Leveraging HTML and CSS, I designed an engaging user experience.",
    image: "/DCC.png",
    github: "https://github.com/mahmouddahlan/DAHLAN-CAR-CARE",
    link: "https://mahmouddahlan.github.io/DAHLAN-CAR-CARE/index.html",
  },
  {
    name: "Youtube clone",
    description: "EntertainmentTV is a React-based web application that clones YouTube. It allows users to browse and watch a wide variety of videos and interact with content, just like on the real YouTube platform.",
    image: "/youtubeclone.png",
    github: "https://github.com/mahmouddahlan/YoutubeClone",
    link: "https://entertainmenttv.vercel.app/",
  },
  {
  name: "Cinemax",
  description:
    "Cinemax is a movie information website using React.js, powered by the OMDB API. It allows users to search for movies and displays key details like titles, release years, movie type, and posters.",
  image: "/cinemax.png",
  github: "",
  link: "https://cinemax1005.netlify.app/",
},
  {
    name: "CarLink",
    description:
      "A dynamic Car Rental website, deployed on Vercel, was created using Next.js, React, TypeScript, and Tailwind CSS. Users can conveniently search for cars by make and model, filter by year and fuel type, and access detailed car cards with images and specifications.",
    image: "/carlink.png",
    github: "https://github.com/mahmouddahlan/car-rental",
    link: "https://car-rental-vga2.vercel.app/",
  },
  

]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-1 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                        </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
