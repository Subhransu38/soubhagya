import { motion } from "framer-motion";
import { FaOrcid, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { ReactTyped } from "react-typed";
import PROFILE from "../assets/profile.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-light-secondary dark:bg-dark-secondary"
    >
      <div className="container mx-auto flex gap-10 lg:gap-0 flex-col-reverse lg:flex-row items-center justify-between space-x-8 space-y-32 lg:space-y-0">
        {/* Left Section (Text) */}

        <motion.div
          className="flex flex-col items-center lg:items-center text-center lg:text-left space-y-4 md:space-y-6"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-semibold text-light-textPrimary dark:text-dark-textPrimary"
          >
            Soubhagya Laxmi Ray
          </motion.h1>

          {/* Typing Animation for designation using react-typed */}
          <motion.p
            className="text-base sm:text-xl md:text-2xl text-light-textSecondary dark:text-dark-textSecondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ReactTyped
              strings={["Agricultural Engineer"]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1000}
              loop
              showCursor
            />
          </motion.p>
          <motion.p
            className="text-base sm:text-xl md:text-2xl text-light-textSecondary dark:text-dark-textSecondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Research Scholar in Soil and Water Conservation Engineering
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <a
              href="https://drive.google.com/file/d/1g7z_-_700ktqcJHw7Oi1LVoU7vTwt7Zr/view?usp=drive_link"
              download
              target="_blank"
              className="bg-light-accent dark:bg-dark-accent text-dark-textPrimary dark:text-dark-textPrimary py-2 px-6 rounded-full transition duration-300 hover:bg-light-accentHover dark:hover:bg-dark-accentHover"
            >
              Download CV
            </a>
            <a
              href="https://drive.google.com/drive/folders/1WZk4AYCxEJkFpNzl1iP2d9TF_xZJeMoq?usp=drive_link"
              target="_blank"
              className="bg-light-accent dark:bg-dark-accent text-dark-textPrimary dark:text-dark-textPrimary py-2 px-6 rounded-full transition duration-300 hover:bg-light-accentHover dark:hover:bg-dark-accentHover"
            >
              Certificates
            </a>
          </motion.div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center lg:justify-start space-x-6">
            <a
              href="mailto:slray3867@gmail.com"
              className="text-light-accent dark:text-dark-accent hover:text-light-accentHover dark:hover:text-dark-accentHover"
            >
              <SiGmail size={32} />
            </a>
            <a
              href="https://wa.me/8328926385"
              className="text-light-accent dark:text-dark-accent hover:text-light-accentHover dark:hover:text-dark-accentHover"
            >
              <IoLogoWhatsapp size={32} />
            </a>
            <a
              href="tel:8328926385"
              className="text-light-accent dark:text-dark-accent hover:text-light-accentHover dark:hover:text-dark-accentHover"
            >
              <FaPhone size={30} />
            </a>

            <a
              href="https://orcid.org/0009-0000-1809-7208"
              target="_blank"
              className="text-light-accent dark:text-dark-accent hover:text-light-accentHover dark:hover:text-dark-accentHover"
            >
              <FaOrcid size={32} />
            </a>
          </div>
        </motion.div>

        {/* Right Section (Photo) */}
        <motion.div
          className="w-[250px] h-[250px] aspect-square rounded-3xl grid place-items-center bg-gradient-to-br from-transparent via-[#3B82F6] to-sky-100 md:w-[400px] md:h-[400px] mt-8 lg:mt-0"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden rotate-12 transition-all hover:rotate-0 duration-300">
            <img
              src={PROFILE}
              alt="Soubhagya Laxmi Ray"
              className="block w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
