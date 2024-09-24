import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Footer from "../components/ThreeSlotFooter";
import WaveComponent from "../components/WaveComponent";
import { FaChevronRight } from "react-icons/fa";

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "(Sr.) Genomics Data Scientist / AI",
      company: "New York Genome Center & Weill Cornell Medicine,",
      duration: "September 2022 - Senior January 2024 - Present",
      responsibilities: [
        "Developing deep learning models for single-cell multiomics data",
        "Developing novel phylogenetic methods for single-cell multiomics data",
        "Developing massive scale data processing pipelines for single-cell multiomics data",
      ],
    },
    {
      role: "Bioinformatics, Data Engineering",
      company: "NYU Langone Health,",
      duration: "December 2021 - January 2023",
      responsibilities: [
        "Developing high-volume genomic data processing pipelines (WGS/ATAC/RNA-seq)",
        "Identifying novel germline genetic markers for improved melanoma prognosis prediction",
        "Integrating various data types to identify complex genetic signatures and markers for immunotherapy response",
      ],
    },
    {
      role: "Assistant Research Scientist",
      company: "NYU Center for Genomics and Systems Biology,",
      duration: "January 2018 - September 2022",
      responsibilities: [
        "Bioinformaitcs and data analysis",
        "CRISPR/Cas9 genome editing",
        "Superresolution microscopy",
      ],
    },
    {
      role: "Teaching Assistant",
      company: "Stony Brook Univeristy,",
      duration: "July 2017 - December 2017 ",
      responsibilities: [
        "Held office hour in biochemistry",
        "Prepared and graded exams and quizzes",
        "Supervised laboratory experiments",
      ],
    },
    {
      role: "Teaching Assistant",
      company: "Florida Southern College,",
      duration: "August 2014 — May 2016",
      responsibilities: [
        "Held office hour in organic chemistry and biochemistry",
        "Prepared and graded exams and quizzes",
        "Supervised laboratory experiments",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Experience - John Zinno</title>
      </Head>
      <main className="flex flex-col justify-center items-center p-4 text-center pb-16">
        <h1 className="text-2xl font-bold text-slate-800 mb-4 select-none">
          Work Experience
        </h1>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-4 p-4 border rounded-lg shadow-lg bg-white w-3/4 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <h2 className="text-xl text-slate-800 font-bold">{exp.role}</h2>
            <h3 className="text-lg text-slate-800">{exp.company}</h3>
            <h4 className="text-gray-500">{exp.duration}</h4>
            {exp.responsibilities.map((resp, i) => (
              <div
                key={i}
                className="flex items-center justify-center text-slate-800"
              >
                <FaChevronRight className="text-sm" />
                <div className="px-1 text-sm">{resp}</div>
              </div>
            ))}
          </div>
        ))}
      </main>
      <Sidebar />
      <div className="text-center fixed bottom-0 left-0 w-full">
        <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
