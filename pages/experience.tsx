import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveComponent from "../components/WaveComponent";

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Genomics Data Scientist / AI",
      company: "New York Genome Center & Weill Cornell Medicine,",
      duration: "Sep 2022 - Present",
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
      <Header />
      <main className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-bold">{exp.role}</h2>
            <h3 className="text-lg">{exp.company}</h3>
            <h4 className="text-gray-500">{exp.duration}</h4>
            <ul className="list-disc list-inside">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      <div className="text-center fixed bottom-0 left-0 w-full">
        <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
