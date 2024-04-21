"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/IMG_4115.jpg"
            alt=""
            width={385}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hello, I&#39;m Mahmoud</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a highly ambitious, self-motivated, and driven  {" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            student based in Toronto, Canada.
          </p>

          <a
  href="https://www.linkedin.com/in/mahmoud-dahlan-435969246/"
  className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
