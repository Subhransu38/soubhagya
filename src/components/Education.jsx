import { motion } from "framer-motion";

const Education = () => {
  const educationDetails = [
    {
      title: "Ph. D.",
      year: "2022 – Present",
      institution:
        "Odisha University of Agriculture and Technology, Bhubaneswar",
      college: "College of Agricultural Engineering and Technology, OUAT",
      specialization: "Soil and Water Conservation Engineering",
      score: "8.92 CGPA",
      thesis:
        "Modelling hydrological response of the Mahanadi basin under climate change scenario based on integrated VIC-Budyko framework approach",
    },
    {
      title: "Master of Technology",
      year: "2021 – 2022",
      institution:
        "Odisha University of Agriculture and Technology, Bhubaneswar",
      college: "College of Agricultural Engineering and Technology, OUAT",
      specialization:
        "Agricultural Engineering (Soil and Water Conservation Engineering)",
      score: "8.04 CGPA",
      thesis:
        "Climate Change Effect on Hydrological Fluxes of the Kantamal Catchment using SWAT",
    },
    {
      title: "Bachelor of Technology",
      year: "2016 – 2020",
      institution: "Centurion University of Technology and Management, Odisha",
      college: "School of Engineering and Technology, CUTM, Odisha",
      specialization: "Agricultural Engineering",
      score: "9.13 CGPA",
      thesis: "Solar Based Automatic Drip Irrigation System",
    },
    {
      title: "Intermediate",
      year: "2014 – 2016",
      institution: "Council of Higher Secondary Education Odisha",
      college: "Biju Pattnaik Junior College, Jagatsinghpur, Odisha",
      score: "60.33 %",
    },
    {
      title: "Matriculation",
      year: "2014",
      institution: "Board of Secondary Education Odisha",
      college: "Vivekananda High School, Jagatsinghpur, Odisha",
      score: "75 %",
    },
  ];

  const extraCourses = [
    {
      title: "PGDCA",
      year: "2020",
      institution: "LCC Institute of IT and Management",
      score: "86 %",
    },
    {
      title: "Python for Machine Learning & Data Science Masterclass",
      year: "2023",
      institution: "Udemy",
      instructor: "Jose Portilla",
    },
    {
      title: "Complete Remote Sensing and GIS - ArcGIS - Erdas",
      year: "2024",
      institution: "Udemy",
      instructor: "Lakhwinder Singh",
    },
  ];

  const trainings = [
    {
      title: "21-day Winter School",
      year: "2023",
      institution:
        "Geospatial Technology Centre (funded by RKVY), CAET, Bhubaneswar",
      description:
        "Advanced Applications of Remote Sensing and GIS in Natural Resources Management",
    },
    {
      title: "In-Plant Training",
      year: "2019",
      institution: "ICAR-Indian Institute of Soil & Water Conservation, Agra",
      description:
        "Natural Resource Management with a focus on Soil and Water Conservation and Watershed Management",
    },
    {
      title: "In-Plant Training",
      year: "2018, 2019",
      institution:
        "Odisha Farm Machinery Research and Development Centre, Bhubaneswar",
      description:
        "Operational & Maintenance of Tractor, Power Tiller, Combine Harvester, Transplanter, Reaper, Brush Cutter, Diesel Pump Set",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="education"
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
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-light-accent dark:text-dark-accent">
              Formal Education
            </h3>
            {educationDetails.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md"
              >
                <h4 className="text-xl font-medium text-light-textPrimary dark:text-dark-textPrimary">
                  {edu.title}
                </h4>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  {edu.year} | {edu.institution}
                </p>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  {edu.college}
                </p>
                {edu.specialization && (
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                    Specialization: {edu.specialization}
                  </p>
                )}
                <p className="text-sm text-light-accent dark:text-dark-accent">
                  {edu.score}
                </p>
                {edu.thesis && (
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                    Thesis: {edu.thesis}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-light-accent dark:text-dark-accent">
              Extra Courses & Trainings
            </h3>

            {/* Extra Courses */}
            {extraCourses.map((course, index) => (
              <div
                key={index}
                className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md"
              >
                <h4 className="text-xl font-medium text-light-textPrimary dark:text-dark-textPrimary">
                  {course.title}
                </h4>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  {course.year} | {course.institution}
                </p>
                {course.instructor && (
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                    Instructor: {course.instructor}
                  </p>
                )}
                {course.score && (
                  <p className="text-sm text-light-accent dark:text-dark-accent">
                    {course.score}
                  </p>
                )}
              </div>
            ))}

            {/* Trainings */}
            {trainings.map((training, index) => (
              <div
                key={index}
                className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md"
              >
                <h4 className="text-xl font-medium text-light-textPrimary dark:text-dark-textPrimary">
                  {training.title}
                </h4>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  {training.year} | {training.institution}
                </p>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  {training.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
