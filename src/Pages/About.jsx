import React from "react";
import { 
  FaUser, 
  FaBullseye, 
  FaLaptopCode, 
  FaCode, 
  FaChartLine, 
  FaHeart 
} from "react-icons/fa";

const aboutData = [
  {
    title: "Who I Am",
    desc: "I am a MCA graduate passionate about backend development. I enjoy building scalable applications using Java, Spring Boot, and I am always eager to learn and improve my development skills.",
    icon: <FaUser className="text-4xl text-red-500" />,
  },
  {
    title: "My Goal",
    desc: "To become a skilled Backend Java Developer and build scalable, secure, and high-performance applications.",
    icon: <FaBullseye className="text-4x1 text-green-500" />,
  },
  {
    title: "What I Do",
    desc: "I build secure and high-performance server-side applications using Java, Spring Boot, and database technologies.",
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
  },
  {
    title: "Skills",
    desc: "Java, Spring, Spring Boot, MySql, Sql, problem solving, Git & Bitbucket.",
    icon: <FaCode className="text-4xl text-purple-500" />,
  },
  {
    title: "Experience",
    desc: "Worked on real-world projects and continuously learning.",
    icon: <FaChartLine className="text-4xl text-yellow-400" />,
  },
  {
    title: "What I Love",
    desc: "Building scalable backend systems, clean APIs, and efficient server-side applications.",
    icon: <FaHeart className="text-4xl text-pink-500" />,
  },
];

export default function About() {
  return (
    <section id="about" className="px-10 py-20 bg-black text-white h-screen">
      <h2 className="text-4xl font-bold text-center tracking-wide">About Me</h2>
      <div className="w-32 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="relative p-8 bg-gray-900 rounded-2xl backdrop-blur-xl shadow-[0px_0px_25px_#2b2b2b] hover:scale-105 hover:shadow-[0px_0px_45px_#6a00ff] transition duration-300"
          >
            <div className="relative z-20 text-center">
              {item.icon}
              <h3 className="text-2xl font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="opacity-90 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
