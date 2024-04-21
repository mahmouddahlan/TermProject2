import React from "react"
import Image from "next/image"

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-0.5 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello, my name is Mahmoud and I am a{" "}
              <span className="font-bold">{"self-motivated"}</span>,
              <span className="font-bold">{" highly ambitious"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Toronto, Canada.
            </p>
            <br />
            <p>
              I am a student at York University with an expected graduation in 2026
              with a BEng in Software Engineering.
            </p>
            <br />
            <p>
              I'm constantly immersed in various hobbies and interests, 
              which range from exercising, visiting racetracks, exploring 
              new places, to indulging in gaming. This pursuit of fresh 
              experiences keeps me engaged and fuels my enthusiasm for
               continuous learning.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing.
              </span>{" "}
              I firmly believe in the importance of continual growth, 
              and that's precisely what I aim for. I possess a fervent 
              passion for technology and an unyielding determination to 
              constantly push boundaries. I'm eager to witness the trajectory
               of my career and remain receptive to any new prospects that may arise.
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Education</h1>
            <div className="flex items-center">

              <div className="mr-2">
                 <h3 className="text-l font-bold ">York University 
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="italic">2026</span></h3>
                 <p className="text-teal-500 font-extrabold">Software Engineering</p>
                  </div>
                     </div>
                     <h1 className="text-2xl font-bold mt-14">Related Courses</h1>
                     <ul className="text-teal-500 ">
                      <li>Object Oriented Programming - Java</li>
                      <li>Embedded Systems - C & Bash</li>
                      <li>Data Structures</li>
                      <li>Software Development Project</li>
                     </ul>
              </div>
          

        </div>
      </div>
    </section>
  )
}

export default AboutSection
