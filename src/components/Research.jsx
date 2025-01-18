import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants for smooth fade-in effect
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Research() {
  const [activeTab, setActiveTab] = useState("All");

  const publications = {
    All: [
      {
        authors:
          "Soubhagya Laxmi Ray, Ambika Prasad Sahu, Jagadish Chandra Paul, Dwarika Mohan Das, Sanjay Kumar Raul, Subrat Kumar Kundu",
        year: "25 December 2024",
        title:
          "Climate Change Impact on Hydro-climatic Fluxes in Kantamal Catchment of the Middle Mahanadi River Basin, India",
        journal: "Journal of Agricultural Engineering",
        volume: "61",
        issue: "6",
        pages: "1894",
        doi: "https://doi.org/10.52151/jae2024616.1894",
      },
      {
        authors:
          "Soubhagya Laxmi Ray, Ambika Prasad Sahu, Jagadish Chandra Paul, Dwarika Mohan Das, Sanjay Kumar Raul, Prachi Pratyasha Jena",
        year: "1 June 2024",
        title:
          "Application of innovative trend analysis for rainfall variability in the middle catchment of Mahanadi River basin, India",
        journal: "Journal of Agrometeorology",
        volume: "26",
        issue: "2",
        pages: "264-267",
        doi: "https://doi.org/10.54386/jam.v26i2.2542",
      },
      {
        authors:
          "Soubhagya Laxmi Ray, Ansuman Pati, Anwesha Jhankar, Ambika Prasad Sahu, Jagadish Chandra Paul, Bharat Chandra Sahoo,Dwarika Mohan Das, Pradipta Majhi",
        year: "14 March 2023",
        title:
          "Advancements in Modeling Protocols for Assessing Climate Change Impacts on Water Resources: A Review",
        journal: "International Journal of Environment and Climate Change",
        volume: "13",
        issue: "4",
        pages: "190-197",
        doi: "10.9734/IJECC/2023/v13i41726",
      },
      {
        authors:
          "Dwarika Mohan Das, Sanjay Kumar Raul, Bharat Chandra Sahoo, Jagadish Chandra Paul, Sangeeta Bhuyan, Soubhagya Laxmi Ray,...",
        year: "December 2023",
        title:
          "Performance of evapotranspiration methods for hydrological simulations using SWAT in a sub-tropical and sub-humid catchment of India",
        journal: "Indian Journal of Soil Conservation",
        volume: "51",
        issue: "3",
        pages: "196-208",
        doi: "10.59797/ijsc.v51.i3.136",
      },
      {
        authors:
          "Soubhagya Laxmi Ray, Ambika Prasad Sahu, Jagadish Chandra Paul, Dwarika Mohan Das",
        year: "2024",
        title:
          "Alterations of Hydro-climatic Fluxes in the Kantamal Catchment of Middle Mahanadi River Basin Under Climate Change",
        event:
          "International Conference on Building Small Holder Climate Resilience for Achieving Sustainable Food Systems",
      },
      {
        authors:
          "Soubhagya Laxmi Ray, Ambika Prasad Sahu, Jagadish Chandra Paul, Dwarika Mohan Das, Sanjay Kumar Raul, Prachi Pratyasha Jena",
        year: "2024",
        title:
          "Innovative Trend Analysis of Rainfall Variability in the Middle Catchment of the Mahanadi River Basin, India",
        event:
          "Indian Society of Agricultural Engineers (ISAE) 58th Annual Convention on Engineering Innovations for Next-gen Digital Agriculture & International Symposium on Agricultural Engineering Education for Aspiring Youth in Transforming Agriculture",
      },
      {
        authors: "Soubhagya Laxmi Ray, Ambika Prasad Sahu",
        year: "2024",
        title: "Transforming Watershed Management with Digital Innovations",
        journal: "Science Horizon, Odisha Bigyan Academy",
        volume: "9",
        issue: "12",
        pages: "418",
      },
    ],
    Research: [
      {
        authors:
          "Soubhagya Laxmi Ray, Ambika Prasad Sahu, Jagadish Chandra Paul, Dwarika Mohan Das, Sanjay Kumar Raul, Subrat Kumar Kundu",
        year: "25 December 2024",
        title:
          "Climate Change Impact on Hydro-climatic Fluxes in Kantamal Catchment of the Middle Mahanadi River Basin, India",
        journal: "Journal of Agricultural Engineering",
        volume: "61",
        issue: "6",
        pages: "1894",
        doi: "https://doi.org/10.52151/jae2024616.1894",
      },
      {
        authors:
          "Soubhagya Laxmi Ray, Ambika Prasad Sahu, Jagadish Chandra Paul, Dwarika Mohan Das, Sanjay Kumar Raul, Prachi Pratyasha Jena",
        year: "1 June 2024",
        title:
          "Application of innovative trend analysis for rainfall variability in the middle catchment of Mahanadi River basin, India",
        journal: "Journal of Agrometeorology",
        volume: "26",
        issue: "2",
        pages: "264-267",
        doi: "https://doi.org/10.54386/jam.v26i2.2542",
      },
      {
        authors:
          "Soubhagya Laxmi Ray, Ansuman Pati, Anwesha Jhankar, Ambika Prasad Sahu, Jagadish Chandra Paul, Bharat Chandra Sahoo,Dwarika Mohan Das, Pradipta Majhi",
        year: "14 March 2023",
        title:
          "Advancements in Modeling Protocols for Assessing Climate Change Impacts on Water Resources: A Review",
        journal: "International Journal of Environment and Climate Change",
        volume: "13",
        issue: "4",
        pages: "190-197",
        doi: "10.9734/IJECC/2023/v13i41726",
      },
      {
        authors:
          "Dwarika Mohan Das, Sanjay Kumar Raul, Bharat Chandra Sahoo, Jagadish Chandra Paul, Sangeeta Bhuyan, Soubhagya Laxmi Ray,...",
        year: "December 2023",
        title:
          "Performance of evapotranspiration methods for hydrological simulations using SWAT in a sub-tropical and sub-humid catchment of India",
        journal: "Indian Journal of Soil Conservation",
        volume: "51",
        issue: "3",
        pages: "196-208",
        doi: "10.59797/ijsc.v51.i3.136",
      },
    ],
    Articles: [
      {
        authors: "Soubhagya Laxmi Ray, Ambika Prasad Sahu",
        year: "2024",
        title: "Transforming Watershed Management with Digital Innovations",
        journal: "Science Horizon, Odisha Bigyan Academy",
        volume: "9",
        issue: "12",
        pages: "418",
      },
    ],
    Conferences: [
      {
        authors:
          "Soubhagya Laxmi Ray, Ambika Prasad Sahu, Jagadish Chandra Paul, Dwarika Mohan Das",
        year: "2024",
        title:
          "Alterations of Hydro-climatic Fluxes in the Kantamal Catchment of Middle Mahanadi River Basin Under Climate Change",
        event:
          "International Conference on Building Small Holder Climate Resilience for Achieving Sustainable Food Systems",
      },
      {
        authors:
          "Soubhagya Laxmi Ray, Ambika Prasad Sahu, Jagadish Chandra Paul, Dwarika Mohan Das, Sanjay Kumar Raul, Prachi Pratyasha Jena",
        year: "2024",
        title:
          "Innovative Trend Analysis of Rainfall Variability in the Middle Catchment of the Mahanadi River Basin, India",
        event:
          "Indian Society of Agricultural Engineers (ISAE) 58th Annual Convention on Engineering Innovations for Next-gen Digital Agriculture & International Symposium on Agricultural Engineering Education for Aspiring Youth in Transforming Agriculture",
      },
    ],
  };

  const highlightText = (text) => {
    const regex = /Soubhagya Laxmi Ray/g;
    return text.split(regex).map((part, index) =>
      index % 2 === 0 ? (
        part
      ) : (
        <span
          className="font-bold text-light-accent dark:text-dark-accent"
          key={index}
        >
          {regex.source}
        </span>
      )
    );
  };

  return (
    <section
      id="research"
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
          Publications
        </motion.h2>

        <div className="text-center mb-6">
          <button
            onClick={() => setActiveTab("All")}
            className={`px-4 py-2 mx-2 my-2 rounded-lg ${
              activeTab === "All"
                ? "bg-light-accent dark:bg-dark-accent text-white"
                : "bg-light-background dark:bg-dark-background"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("Research")}
            className={`px-4 py-2 mx-2 my-2  rounded-lg ${
              activeTab === "Research"
                ? "bg-light-accent dark:bg-dark-accent text-white"
                : "bg-light-background dark:bg-dark-background"
            }`}
          >
            Research Papers
          </button>
          <button
            onClick={() => setActiveTab("Articles")}
            className={`px-4 py-2 mx-2 my-2  rounded-lg ${
              activeTab === "Articles"
                ? "bg-light-accent dark:bg-dark-accent text-white"
                : "bg-light-background dark:bg-dark-background"
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab("Conferences")}
            className={`px-4 py-2 mx-2 my-2  rounded-lg ${
              activeTab === "Conferences"
                ? "bg-light-accent dark:bg-dark-accent text-white"
                : "bg-light-background dark:bg-dark-background"
            }`}
          >
            Conferences
          </button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          {publications[activeTab].map((pub, index) => (
            <div
              key={index}
              className="p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md"
            >
              <h4 className="text-xl font-medium text-light-textPrimary dark:text-dark-textPrimary">
                {pub.title}
              </h4>
              <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                <strong>Authors:</strong> {highlightText(pub.authors)}
              </p>
              <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                <strong>Date Published:</strong> {pub.year}
              </p>
              {pub.journal && (
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  <strong>Journal:</strong>{" "}
                  <span className="font-bold text-light-accent dark:text-dark-accent">
                    {pub.journal}
                  </span>
                </p>
              )}
              {pub.volume && pub.issue && pub.pages && (
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  <strong>Volume:</strong> {pub.volume}, <strong>Issue:</strong>{" "}
                  {pub.issue}, <strong>Pages:</strong> {pub.pages}
                </p>
              )}
              {pub.doi && (
                <p className="text-sm text-light-accent dark:text-dark-accent">
                  <strong>DOI:</strong>{" "}
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                    {pub.doi}
                  </a>
                </p>
              )}
              {pub.event && (
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  <strong>Event:</strong> {pub.event}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
