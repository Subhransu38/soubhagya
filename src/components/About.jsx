import { motion } from "framer-motion";

export default function About() {
  const details = {
    introObjective:
      "Hi! I’m Soubhagya Laxmi Ray, born on December 22, 1998. I am an Agricultural Engineer and a dedicated Research Scholar in Soil and Water Conservation Engineering. My career objective is to contribute to sustainable agricultural practices by conducting impactful research in soil conservation and water management, ultimately supporting environmental and societal well-being.",
    researchInterests: [
      "Soil Conservation",
      "Water Management",
      "Sustainable Agriculture",
      "Climate Change",
      "Hydrological Modeling",
    ],
    achievements: [
      "Best poster presentation during 58th Annual Convention of Indian Society of Agricultural Engineers (ISAE)",
    ],
    languages: ["English", "Hindi", "Odia"],
    hobbies: ["Traveling", "Teaching", "Listening Songs"],
    skills: [
      { name: "Python", level: 70 },
      { name: "ArcGIS Pro", level: 80 },
      { name: "Variable Capacity Model", level: 85 },
      { name: "SWAT", level: 75 },
    ],
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-12 bg-light-secondary dark:bg-dark-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-light-textPrimary dark:text-dark-textPrimary"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Column */}
          <div className="space-y-6">
            {/* Intro and Career Objective */}
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-light-accent dark:text-dark-accent">
                Introduction
              </h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary mt-2">
                {details.introObjective}
              </p>
            </div>

            {/* Languages */}
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-light-accent dark:text-dark-accent">
                Languages
              </h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {details.languages.map((language, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-light-secondary dark:bg-dark-secondary rounded-full shadow text-sm text-light-textPrimary dark:text-dark-textPrimary"
                  >
                    {language}
                  </div>
                ))}
              </ul>
            </div>

            {/* Hobbies */}
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-light-accent dark:text-dark-accent">
                Hobbies
              </h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {details.hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-light-secondary dark:bg-dark-secondary rounded-full shadow text-sm text-light-textPrimary dark:text-dark-textPrimary"
                  >
                    {hobby}
                  </div>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Research Interests */}
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-light-accent dark:text-dark-accent">
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {details.researchInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-light-secondary dark:bg-dark-secondary rounded-full shadow text-sm text-light-textPrimary dark:text-dark-textPrimary"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-light-accent dark:text-dark-accent">
                Achievements
              </h3>
              <ul className="list-disc pl-5 mt-2 text-light-textSecondary dark:text-dark-textSecondary">
                {details.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-light-accent dark:text-dark-accent">
                Skills
              </h3>
              <div className="space-y-4 mt-4">
                {details.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm font-medium text-light-textPrimary dark:text-dark-textPrimary">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-light-secondary dark:bg-dark-secondary h-2 rounded-lg mt-1">
                      <div
                        className="bg-light-accent dark:bg-dark-accent h-2 rounded-lg"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
