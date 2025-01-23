import Head from 'next/head'; // Correct import
import { BsFillMoonStarsFill } from 'react-icons/bs'; // Correct import path
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'; // Correct import path
import Image from 'next/image'; // Correct Image import
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Harsh Yaduwanshi Portfolio</title>
        <meta name="description" content="Portfolio of Harsh Yaduwanshi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`px-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        {/* Navigation Bar */}
        <nav className="py-10 mb-12 flex justify-between">
  <h1 className="text-xl font-burtons">ૐ નમઃ શિવાય</h1>
  <ul className="flex items-center">
    <li>
      <BsFillMoonStarsFill
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer text-2xl"
      />
    </li>
    <li>
      <a
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        href="/resume.pdf" // Path to your resume file
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security improvement
        download="public\Harsh yaduwanshi 24 resume.pdf" // Enables file download with a custom name
      >
        Resume
      </a>
    </li>
  </ul>
</nav>


        {/* Hero Section */}
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Harsh Yaduwanshi</h2>
          <h3 className="text-2xl py-2">B.Tech (CSE) Student</h3>
          <p className="text-md py-5 leading-8">
            I'm a beginner coder exploring the world of programming. Excited to learn and build my skills along the way.
            Looking forward to growing and creating with code!
          </p>
        </div>

        {/* Profile Image and Social Icons */}
        <div className="relative w-full h-auto mx-auto overflow-hidden flex flex-col items-center justify-center">
          <div className="flex justify-center gap-8 py-6">
            <a
              href="https://www.instagram.com/harshyaduwanshi24/?next=%2Fyour_instagram_profile%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition-colors"
              aria-label="Instagram Profile"
            >
              <AiFillInstagram size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-yadu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <AiFillLinkedin size={40} />
            </a>
            <a
              href="https://github.com/harshyaduwanshi2424"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <AiFillGithub size={40} />
            </a>
          </div>
          <Image
            src="/harsh24-emoji.jpg"
            alt="Harsh Yaduwanshi Emoji"
            width={320}
            height={320}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Bio Section */}
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1">Bio</h3>
            <p className="text-md py-2 leading-8">
              Hi, I am Harsh Yaduwanshi, a third-year B.Tech student from Bennett University.
              As a passionate <span className="text-teal-500">Full-stack Developer</span>, I thrive on solving challenges
              and building impactful solutions. With a love for coding and a dedicated work ethic,
              I aim to create seamless and innovative digital experiences.
            </p>
          </div>

          {/* Sections: Education, Projects, Skills */}
          <div className="py-10 flex flex-wrap justify-center gap-10">
            {/* Education */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-80">
              <Image
                src="/design.png"
                alt="Design Icon"
                layout="responsive"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Education</h3>
              <ul className="text-sm leading-6">
                <li>
                  <strong>Bennett University (2022 - Present):</strong> B.Tech in Computer Science
                </li>
                <li>
                  <strong>Nalanda Academy (2020 - 2021):</strong> 12th Grade - 85% (CBSE)
                </li>
                <li>
                  <strong>Nalanda Academy (2018 - 2019):</strong> 10th Grade - 85% (CBSE)
                </li>
              </ul>
            </div>

            {/* Projects */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-80">
              <Image src="/code.png" alt="Code Icon" layout="responsive" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Projects</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "ThriftStore",
                    framework: "Django",
                    language: "Python",
                    link: "#",
                  },
                  {
                    name: "Exercise Form Detection",
                    framework: "TensorFlow",
                    language: "Python",
                    link: "#",
                  },
                  {
                    name: "Portfolio",
                    framework: "Next.js",
                    language: "JavaScript",
                    link: "#",
                  },
                ].map((project, idx) => (
                  <div key={idx} className="p-4 border rounded-md bg-blue-300">
                    <h4 className="text-md font-semibold">{project.name}</h4>
                    <p>
                      <strong>Framework:</strong> {project.framework}
                    </p>
                    <p>
                      <strong>Language:</strong> {project.language}
                    </p>
                    <a href={project.link} className="text-teal-500 underline">
                      View on GitHub
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 w-80">
              <Image
                src="/consulting.png"
                alt="Consulting Icon"
                layout="responsive"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Skills</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["C++","DSA","Machine Learning", "React", "Node.js", "Python", "SQL", "JavaScript", "CSS", "HTML"].map(
                  (skill, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-blue-300 rounded-md hover:bg-teal-500 hover:text-white"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
