"use client" // this is a client component
import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "C" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Netlify" },
  { skill: "Vercel" },
]

const Skills = () => {
  return (
    <section id="skills">
      <div className="my-2 mt-1 pb-2 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 space-x-5 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
  <div className="text-center md:w-1/2 md:text-left">
    <div className="grid grid-cols-3 gap-8 md:grid-cols-3 md:gap-x-30 md:gap-12">
      {skills.map((item, idx) => {
        return (
          <p
            key={idx}
            className="bg-gray-200 px-4 py-2 text-gray-500 rounded font-semibold text-center"
          >
            {item.skill}
          </p>
        );
      })}
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default Skills