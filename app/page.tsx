import Link from "next/link";
import {
  ArrowRight,
  Code,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ContactForm } from "@/components/contact-form";
import { AnimatedText } from "@/components/animated-text";
import { ParticleBackground } from "@/components/particle-background";
// import TopButton from "@/components/TopButton";
import {
  FaGraduationCap,
  FaCertificate,
  FaBriefcase,
  FaLightbulb,
  FaUserAlt,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdLocationCity } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ParticleBackground />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Mohamed Firose</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I'm{" "}
                    <AnimatedText
                      texts={[
                        "Pursuing MCA",
                        "a Web Developer",
                        "a Python Developer",
                        "a Web Designer",
                      ]}
                      className="text-primary font-semibold"
                    />
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Creating innovative digital experiences that make a
                    difference.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                  >
                    <Button className="w-full py-3 px-5 rounded-full">
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary/80 to-primary group-hover:w-full transition-all duration-500 ease-out"></span>
                      <span className="relative flex items-center justify-center text-white">
                        Resume
                      </span>
                    </Button>
                  </a>

                  <Link href="#contact">
                    <Button className="group relative overflow-hidden">
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary/80 to-primary group-hover:w-full transition-all duration-500 ease-out"></span>
                      <span className="relative flex items-center">
                        Contact Me
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button
                      variant="outline"
                      className="group border-primary/20 hover:border-primary/50 transition-all duration-300"
                    >
                      <span className="bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
                        View My Work
                      </span>
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/firose-git/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/md-firose-311518267/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://x.com/FiroseMd786"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-background bg-muted animate-pulse-slow">
                  <img
                    src="/image-mine.png?height=600&width=600"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-teal-600/20 px-4 py-1 text-sm text-teal-400 font-semibold tracking-wider shadow-md">
                <FaUserAlt className="inline mr-2" /> About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
                My Journey 🚀
              </h2>
              <p className="max-w-4xl text-lg text-gray-300 mt-4 mx-auto">
                I'm currently pursuing my MCA (Master of Computer Applications)
                with a strong interest in becoming an innovative Python
                Developer and Web Developer. I'm passionate about creating
                innovative and user-centric digital experiences. My goal is to
                build impactful tech solutions that combine creativity, code,
                and commitment, bringing ideas to life in the most efficient and
                engaging way possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Side */}
              <div className="space-y-14">
                <div className="flex justify-start pl-4">
                  <img
                    src="/image-mine.png"
                    alt="My Avatar"
                    className="rounded-full w-64 h-64 object-cover border-4 border-teal-500 shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <FaGraduationCap className="text-emerald-400" /> Education
                  </h3>
                  <ul className="mt-4 text-gray-200 space-y-3 text-sm pl-2">
                    <li>
                      <strong>Master of Computer Application</strong>
                      <br />
                      <span className="text-teal-300">
                        AIMS Institutes, Bangalore (2023–2025 Expected)
                      </span>
                    </li>
                    <li>
                      <strong>
                        Bachelor of Computer Science -{" "}
                        <span className="text-yellow-300">65%</span>
                      </strong>
                      <br />
                      <span className="text-teal-300">
                        Yadava College, Madurai (2020–2023)
                      </span>
                    </li>
                    <li>
                      <strong>
                        Pre University -{" "}
                        <span className="text-yellow-300">63%</span>
                      </strong>
                      <br />
                      <span className="text-teal-300">
                        Al-Hudha Islamic Matriculation School, Sivaganga (2020)
                      </span>
                    </li>
                    <li>
                      <strong>
                        SSLC - <span className="text-yellow-300">60%</span>
                      </strong>
                      <br />
                      <span className="text-teal-300">
                        Al-Hudha Islamic Matriculation School, Sivaganga (2018)
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <FaCertificate className="text-pink-400" /> Certifications
                  </h3>
                  <ul className="mt-4 text-gray-200 space-y-3 text-sm pl-2">
                    <li>
                      <a
                        href="https://drive.google.com/file/d/16_xw-vRIFCaHxyhi0nb-DZAIIiR9CIH4/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>Full Stack Development</strong>
                      </a>{" "}
                      – <span className="text-teal-300">NoviTech (2025)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1JnX_4OHWCh_CpP1GYLFFdY390LeVGpYb/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>Python Development with ChatGPT</strong>
                      </a>{" "}
                      – <span className="text-teal-300">Coursera (2025)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1Diur9lsiRzRSzRDBhw5yiuQw_8svELLI/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>Data Analysis in Python</strong>
                      </a>{" "}
                      – <span className="text-teal-300">Coursera (2025)</span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1Pd2brWB956hAxMjKAmkCcjU9kz_T_FsH/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>Power BI and Excel</strong>
                      </a>{" "}
                      –{" "}
                      <span className="text-teal-300">
                        AIMS Institutes (2025)
                      </span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1n3UZeoWm8gaYiDtQhtQs6l9Wtj-v23FJ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>Connecting to a MongoDB Database</strong>
                      </a>{" "}
                      –{" "}
                      <span className="text-teal-300">
                        MongoDB University (2025)
                      </span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1qcH6J97k4ZRbyr_NMk6ZP20i4qAFgfVU/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>AI Development</strong>
                      </a>{" "}
                      –{" "}
                      <span className="text-teal-300">
                        Tech Mindsparc (09/2024)
                      </span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1wtNdU26sTzLv48jyi9f8T-A2HXN799Ld/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>Postman API Fundamentals</strong>
                      </a>{" "}
                      –{" "}
                      <span className="text-teal-300">
                        Let's Upgrade (2024)
                      </span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1cFDsFaLg7e8y6DkW0CimCHq_jolMBm_d/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>Tata Imagination Challenge Participate</strong>
                      </a>{" "}
                      –{" "}
                      <span className="text-teal-300"> Tata Group (2024)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-14">
                {/* Info Card */}
                <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700 transition hover:scale-[1.02] duration-300">
                  <h3 className="text-3xl font-bold mb-3 text-teal-400 text-center">
                    Personal Info 🧾
                  </h3>

                  <div className="space-y-3 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <MdEmail className="text-lg" /> <strong>Email:</strong>{" "}
                      <span className="ml-auto">
                        mohamedfirose2312@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdPhone className="text-lg" /> <strong>Phone:</strong>{" "}
                      <span className="ml-auto">+91 90872 51849</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdLocationOn className="text-lg" />{" "}
                      <strong>Country:</strong>{" "}
                      <span className="ml-auto">India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdLocationCity className="text-lg" />{" "}
                      <strong>State:</strong>{" "}
                      <span className="ml-auto">Tamilnadu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdLocationCity className="text-lg" />{" "}
                      <strong>City:</strong>{" "}
                      <span className="ml-auto">Sivaganga</span>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <FaBriefcase className="text-indigo-400" /> Experience
                  </h3>
                  <ul className="mt-4 text-gray-200 space-y-3 text-sm pl-2">
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1Yb_vK9apJUZm0JKlMbfr5H5hF-ZkdHJd/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>Intern</strong> | Microsoft Internship by Edunet
                        Foundation
                      </a>
                      <br />
                      <span className="text-yellow-300">April-May 2025</span>
                      <br />
                      <span className="text-teal-300">
                        ML, Computer Vision, NLP, Azure AI
                      </span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1pZY5ID-qAoxUQ8XtYUpaTet9eFGM5yRh/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>AI Intern</strong> | TECH MINDSPARC
                      </a>
                      <br />
                      <span className="text-yellow-300">Jul–Oct 2024</span>
                      <br />
                      <span className="text-teal-300">
                        ML, Data Processing, Model Deployment
                      </span>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1EzApNeQpd2-q8LckgY-Mpgwk4OnHYLjf/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:text-yellow-500"
                      >
                        <strong>Python Full Stack Intern</strong> | Shiash
                        InfoTech
                      </a>
                      <br />
                      <span className="text-yellow-300">May-July 2023</span>
                      <br />
                      <span className="text-teal-300">
                        Django, MongoDB, APIs, JWT
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <FaLightbulb className="text-pink-400" /> Interests
                  </h3>
                  <p className="text-gray-300 mt-2">
                    • Photography 📸 • Exploring Tech 💡 • IoT & Raspberry Pi ⚙️
                    • Creative Coding 💻
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work and projects I've been
                  involved with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Bismi Store"
                description="Bismi Store is a responsive shopping site built with HTML, CSS, and Bootstrap for small businesses to showcase and sell products."
                tags={["HTML&CSS", "Web Design", "Bootstrap", "E-commerce"]}
                image="/projects-images/bismi-store.png?height=300&width=400"
                link="#"
              />

              <ProjectCard
                title="Statinary Website"
                description="A sleek, user-friendly stationery website where departments can browse and order products easily. Admins manage inventory, track orders, and generate reports. "
                tags={["Python", "RestApi", "Django", "MongoDb"]}
                image="/projects-images/Stationary-aims.png?height=300&width=400"
                link="https://aims-stationary.onrender.com/"
              />

              <ProjectCard
                title="Hospital Management System"
                description="A Power BI dashboard for hospital operations, offering real-time insights into patients, staff, billing, and resources to drive informed decisions."
                tags={["PowerBi", "Hospital Management", "Real-time Data"]}
                image="/projects-images/hospital-mngt-powerpi.png?height=300&width=400"
                link="#"
              />

              {/* <ProjectCard
                title="Bus Booking Website"
                description="A surveillance system built with Raspberry Pi, Python, Flask, OpenCV, and other models for real-time video monitoring, object detection, and security management."
                tags={["HTML", "CSS", "JS", "Bootstrap"]}
                image="/projects-images/bus-booking-nodejs.png?height=300&width=400"
                link="#"
              /> */}

              <ProjectCard
                title="Weather App"
                description="A modern weather application that provides real-time forecasts, interactive UI, and location-based data using open APIs."
                tags={["ReactJs & Api", "HTML&CSS", "JavaScript", "Web App"]}
                image="/projects-images/weather-app.png?height=300&width=400"
                link="https://firose-git.github.io/Weather-App/"
              />

              <ProjectCard
                title="Fortuner Car Website"
                description="A responsive car website showcasing the features and specifications of the Fortuner model, built with HTML, CSS, and JavaScript."
                tags={["HTML&CSS", "Responsive Website", "JavaScript"]}
                image="/projects-images/car-website.png?height=300&width=400"
                link="https://firose-git.github.io/Fortuner-Cars/"
              />

              {/* <ProjectCard
                title="Candy-Crush Game"
                description="A fun and interactive match-3 puzzle game built with HTML, CSS, and JavaScript, inspired by Candy Crush with smooth animations and score tracking."
                tags={["HTML&CSS", "JavaScript", "Game"]}
                image="/projects-images/candy-crush.png?height=300&width=400"
                link="#"
              /> */}

              <ProjectCard
                title="Personal Chatbot Assistant"
                description="A simple chatbot website built with Python Flask to answer personal queries like name, skills, projects, hobbies, and experience."
                tags={[
                  "Python",
                  "Flask",
                  "AI",
                  "Chatbot",
                  "Personal Assistant",
                ]}
                image="/projects-images/chatbot-python.png?height=300&width=400"
                link="#"
              />

              {/* <ProjectCard
                title="Text To speech"
                description="A text-to-speech application that converts written text into spoken words, providing an interactive and user-friendly experience."
                tags={["HTML&CSS", "JavaScript", "Web Speech API", "Speech Recognition", "Speech Synthesis"]}
                image="/projects-images/text to speech.png?height=300&width=400"
                link="#"
              /> */}
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Skills
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Technologies and tools I work with to bring ideas to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              <Card className="overflow-hidden border-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        Frontend Development
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <SkillBadge
                          name="HTML5"
                          icon={<Code className="h-3 w-3" />}
                        />
                        <SkillBadge
                          name="CSS3"
                          icon={<Code className="h-3 w-3" />}
                        />
                        <SkillBadge
                          name="JavaScript"
                          icon={<Code className="h-3 w-3" />}
                        />
                        <SkillBadge
                          name="Bootstrap"
                          icon={<Code className="h-3 w-3" />}
                        />

                        <SkillBadge
                          name="React JS"
                          icon={<Code className="h-3 w-3" />}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Backend Development</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <SkillBadge
                          name="Node.js"
                          icon={<Code className="h-3 w-3" />}
                        />
                        <SkillBadge
                          name="Express"
                          icon={<Code className="h-3 w-3" />}
                        />
                        <SkillBadge
                          name="Flask"
                          icon={<Code className="h-3 w-3" />}
                        />

                        <SkillBadge
                          name="Python"
                          icon={<Code className="h-3 w-3" />}
                        />
                        <SkillBadge
                          name="Django"
                          icon={<Code className="h-3 w-3" />}
                        />
                        {/* <SkillBadge name="GraphQL" icon={<Code className="h-3 w-3" />} /> */}
                        <SkillBadge
                          name="REST APIs"
                          icon={<Code className="h-3 w-3" />}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Database</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <SkillBadge
                          name="MongoDB"
                          icon={<Code className="h-3 w-3" />}
                        />
                        <SkillBadge
                          name="Mysql"
                          icon={<Code className="h-3 w-3" />}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Tools & Others</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <SkillBadge
                          name="Git"
                          icon={<Code className="h-3 w-3" />}
                        />
                        <SkillBadge
                          name="GitHub"
                          icon={<Code className="h-3 w-3" />}
                        />

                        <SkillBadge
                          name="Figma"
                          icon={<Code className="h-3 w-3" />}
                        />
                        <SkillBadge
                          name="Canva"
                          icon={<Code className="h-3 w-3" />}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Me
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to collaborate? Feel free to
                  reach out!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      Mohamedfirose59@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">
                      https://www.linkedin.com/in/md-firose-311518267/
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                  <Github className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">GitHub</h3>
                    <p className="text-sm text-muted-foreground">
                      https://github.com/firose-git/
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
                  <Twitter className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Twitter</h3>
                    <p className="text-sm text-muted-foreground">
                      https://x.com/FiroseMd786
                    </p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-[#0b0b0b] text-white px-8 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I thrive on experimenting with the latest frameworks, libraries,
              and tech stacks.
            </p>
            <p className="text-sm font-medium underline underline-offset-4 text-gray-300 mb-2">
              Social Links
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://github.com/firose-git/" target="_blank">
                <div className="bg-gray-800 p-3 rounded-full hover:bg-[#6e40c9] transition">
                  <Github className="w-5 h-5" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/md-firose-311518267/"
                target="_blank"
              >
                <div className="bg-gray-800 p-3 rounded-full hover:bg-[#0a66c2] transition">
                  <Linkedin className="w-5 h-5" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/mr_2stroke__official/"
                target="_blank"
              >
                <div className="bg-gray-800 p-3 rounded-full hover:bg-[#e1306c] transition">
                  <FaInstagram className="w-5 h-5" />
                </div>
              </Link>
              <Link href="https://www.facebook.com/rx.firose/" target="_blank">
                <div className="bg-gray-800 p-3 rounded-full hover:bg-[#1877f2] transition">
                  <FaFacebook className="w-5 h-5" />
                </div>
              </Link>

              <Link href="https://x.com/FiroseMd786" target="_blank">
                <div className="bg-gray-800 p-3 rounded-full hover:bg-[#1DA1F2] transition">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="#">Home</a>
              </li>
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="#about">About</a>
              </li>
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="#">Resume</a>
              </li>
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="#projects">Projects</a>
              </li>
              <li className="flex items-center gap-2 hover:text-teal-400 transition">
                <ArrowRight size={16} /> <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Have a Question?
            </h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <a
                href="tel:+919087251849"
                className="flex items-center gap-3 no-underline text-inherit hover:opacity-80 transition"
              >
                <Phone size={16} className="text-teal-500" />
                <span>+91 90872 51849</span>
              </a>

              <a
                href="mailto:mohamedfirose2312@gmail.com"
                className="flex items-center gap-3 no-underline text-inherit hover:opacity-80 transition"
              >
                <Mail size={16} className="text-pink-400" />
                <span>mohamedfirose2312@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom section */}
        <div className="text-center space-y-1">
          <p className="text-sm font-medium text-white">Mohamed Firose</p>
          <p className="text-xs text-gray-500">
            © 2025 — Crafted with 💖 & Creativity
          </p>
        </div>
      </footer>
    </div>
  );
}
