import profile from '../assets/images/profile.jpg'
import { FaDownload } from "react-icons/fa"; 
import kavitakumawat from "../assets/pdfs/kavitakumawat.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 py-10
      bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white h-screen"
    >
      {/* LEFT TEXT */}
      <div className="max-w-xl mt-10 md:mt-0">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Kavita Kumawat
          </span>
        </h2>

        <p className="text-xl mt-4 font-semibold text-gray-200">
          I'm a{" "}
          <span className="text-purple-400 animate-pulse">
            Java Back-end Developer
          </span>
        </p>

        <p className="text-gray-300 mt-5 leading-relaxed text-lg">
          🚀 Building scalable, secure, and high-performance backend systems
          using Java and Spring Boot, creating robust APIs.

        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-[0_0_25px_#b200ff] hover:scale-105 transition">
            View Projects
          </button>

          <a
            href="#contact-me"
            className="px-6 py-3 border border-purple-500 rounded-xl text-lg font-medium hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_#8800ff] transition"
          >
            Contact Me
          </a>

          {/* Download Resume Button */}
          <a
            href={kavitakumawat}      // make sure PDF is in public folder
            download="Kavita_Kumawat_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 border border-purple-500 rounded-xl text-lg font-medium hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_#8800ff] transition"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[4px] border-purple-600 shadow-[0_0_40px_#a400ff] ring-offset-2 hover:scale-105 transition">
        <img src={profile} alt="profile" className="w-full h-full object-cover object-top" />
      </div>
    </section>
  );
}
