import React from "react";
import { FaLaptopCode, FaServer, FaDatabase, FaLightbulb } from "react-icons/fa";

import backend from "../assets/images/backend.jpg"
import database from "../assets/images/database.jpg";
import problem from "../assets/images/problem.jpg";

export default function Fullstack() {
  return (
    <section id="fullstack" className="px-10 py-10 bg-black text-white h-screen">
      <h2 className="text-4xl font-bold text-center tracking-wide">Java Back-end Developer</h2>
      <div className="w-50 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>

      <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-center leading-relaxed">
        Hi, I’m Kavita Kumawat, a passionate java back-end developer focused on building scalable and efficient server-side applications. 
        Skilled in backend logic, API development, and database management, I enjoy turning ideas into reliable digital solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* Frontend Development
        <div className="relative p-8 bg-gray-900/60 rounded-2xl backdrop-blur-xl border border-gray-700 overflow-hidden shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <img
            src={frontens}
            alt="frontend"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-20">
            <FaLaptopCode className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-300">
              I design modern UI using HTML, CSS, JavaScript & React for fast and smooth user experience.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div> */}

        {/* Backend Development */}
        <div className="relative p-8 bg-gray-900/60 rounded-2xl backdrop-blur-xl border border-gray-700 overflow-hidden shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <img
            src={backend}
            alt="backend"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-20">
            <FaServer className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-300">
              I build secure and scalable backend APIs using Java and Spring Boot, ensuring efficient performance and reliable application functionality.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Database */}
        <div className="relative p-8 bg-gray-900/60 rounded-2xl backdrop-blur-xl border border-gray-700 overflow-hidden shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <img
            src={database}
            alt="database"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-20">
            <FaDatabase className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p className="text-gray-300">
              I work with MYSQL & SQL to manage structured data efficiently.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Problem Solving */}
        <div className="relative p-8 bg-gray-900/60 rounded-2xl backdrop-blur-xl border border-gray-700 overflow-hidden shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <img
            src={problem}
            alt="problem"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-20">
            <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-300">
              I solve complex problems by designing efficient backend logic and data-driven solutions.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}
