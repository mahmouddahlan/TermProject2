import React from "react"
import Image from "next/image"

const Showcase = () => {
  return (
    <section id="about">
      <div className="my-0.5 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Showcase
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">

            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Assignment 1 - Cover Letter 
            </h1>
            <Image
            src="/CoverLetter.png"
            alt=""
            width={300}
            height={300}
            className=" shadow-2xl"
          />
            {/* <p style={{ fontSize: '10px' }}>I chose this assignment for my showcase as it encapsulates a significant stride in my communicative abilities, perfectly illustrating the transition from academic learning to professional articulation. It stands as a hallmark of my development, evidencing a keen ability to translate technical expertise into compelling narratives that resonate with industry leaders like IBM. This letter, tailored to the unique culture and innovative spirit of IBM, showcases how I've harnessed the power of communication to bridge the gap between my potential and the expectations of a global tech powerhouse.

The creation of this cover letter represented a journey outside my comfort zone. It compelled me to dig deep into the nuances of professional engagement, requiring a level of introspection and market understanding that was both daunting and enlightening. The challenge lay not just in showcasing my qualifications, but in doing so in a way that was both authentic to my voice and meticulously aligned with the technical and cultural nuances of the prospective role.

While I view this piece as exemplary work, reflecting a balance of clarity, conciseness, and technical relevance, it also served as a learning experience. Each sentence was crafted with the intent to engage and persuade, making every word a deliberate choice towards constructing a professional identity suited for the company’s ethos. This cover letter is a testament to my evolving communication style—one that combines analytical thinking with persuasive eloquence.

However, I believe there is always room for growth. In acknowledging this as some of my best work to date, I also recognize it as a stepping stone to even greater accomplishments. It reinforces my commitment to continual learning and underscores the importance of adaptability and innovation in professional communication. My aim is to keep refining my approach, ensuring that with every new application, my communication becomes more potent and my professional narrative more impactful.
            </p> */}


            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Assignment 2 - Interview 
            </h1>
            <Image
            src="/Interview.png"
            alt=""
            width={300}
            height={300}
            className=" shadow-2xl"
          />
            {/* <p style={{ fontSize: '11px' }}>For the communication portfolio, I chose the online interview conducted through the Kira Talent platform as one of my showcase pieces. This interview represented a substantial milestone in my communicative development, challenging me to synthesize verbal acuity with spontaneous critical thinking. The task demanded a polished presentation and quick reflexive thinking - skills crucial for any professional engineer. The format of the interview, with limited preparation time, tested my ability to think on my feet and articulate coherent, thoughtful responses under pressure.

This interview stretched my capabilities beyond the comfort of preparation, compelling me to rely on both intuition and in-depth understanding of my subject matter. In an environment that simulated real-world conditions, I learned to manage nerves, present myself professionally, and communicate complex ideas succinctly.

I believe this interview is amongst my best work because it demonstrates not just what I have learned but also my adaptability and capacity for reflection in real-time. While my responses were concise and to the point, respecting the strict time constraints, they also conveyed my message effectively, showcasing a well-rounded skill set and the ability to reflect on past experiences to articulate future goals. Furthermore, it encapsulated my commitment to professionalism in both appearance and demeanor. However, in the spirit of continual self-improvement, I recognize that there's always room for growth in mastering the art of verbal communication, and I view every interview as an opportunity to refine my skills further."

This reflection aims to provide insight into your experience with the online interview assignment, demonstrating your understanding of the complexities involved in effective communication during an interview and how it has contributed to your growth as a communicator.
            </p> */}
            <br />
            <p>
            </p>
            <br />
            <p>
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Term Project 1 - Technical Report</h1>
            <Image
            src="/TechnicalReport.png"
            alt=""
            width={300}
            height={300}
            className=" shadow-2xl"
          />
            <div className="flex items-center">

            {/* <p style={{ fontSize: '13px' }}>I chose my technical report on Safety and Ethical Standards in Autonomous Vehicles for my showcase because it demonstrates a comprehensive application of my technical writing skills in Software Engineering. The report highlights my ability to synthesize complex data and analyses into a well-structured document that meets significant engineering challenges and communicates effectively to both technical and non-technical audiences. It features diverse multimedia elements and adheres to IEEE citation standards, showcasing my meticulous attention to detail.

The task challenged me with in-depth research and critical evaluations of peer-reviewed articles, pushing my academic rigor and technical proficiency. The process of receiving and incorporating peer feedback was particularly valuable, enhancing my ability to critically view my work through the perspectives of others.

I consider this report among my best work due to its thorough research, critical peer evaluation, and detailed refinement. It not only shows my growth in technical comprehension and communication but also identifies areas for further improvement, such as better integration of feedback and clearer presentation of complex ideas, which I plan to develop in future projects.
            </p> */}
        </div>

                     <h1 className="text-center text-2xl pt-6 font-bold mb-6 md:text-left">EECS 2311 Assignment - Cinemax</h1>
                     <Image
            src="/2311Cinemax.png"
            alt=""
            width={300}
            height={250}
            className=" shadow-2xl"
          />
            {/* <p style={{ fontSize: '13px' }}>I selected the Cinemax project for my showcase because it represents a comprehensive application of my software development and communication skills, embodying my ability to create an intuitive and user-friendly platform for movie enthusiasts. This project highlights my evolution as a communicator, showcasing my adeptness at translating complex technical specifications into accessible functionalities and clear user instructions. The challenge of designing both the backend and the user interface pushed me out of my comfort zone, requiring me to synthesize technical robustness with ease of use, which significantly improved my cross-disciplinary skills. While I am proud of this work and regard it as one of my best for its holistic approach to user engagement and technical execution, it also illuminated areas for ongoing improvement, such as enhancing system performance and refining user interaction, underscoring the continuous nature of my professional development.
            </p> */}
              </div>
          

        </div>
      </div>
    </section>
  )
}

export default Showcase