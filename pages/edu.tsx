import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveComponent from "../components/WaveComponent";

const Education: React.FC = () => {
  const degrees = [
    {
      role: "M.S. Bioinformatics",
      company: "New York University,",
      duration: "Aug 2020 – May 2022",
      responsibilities: [],
    },
    {
      role: "M.S. Biochemistry & Cell Biology",
      company: "Stony Brook University,",
      duration: "Aug 2016 – Dec 2017",
      responsibilities: [],
    },
    {
      role: "B.S. Biology",
      company: "Florida Southern College,",
      duration: "Aug 2012 – May 2016",
      responsibilities: [],
    },
    {
      role: "B.S. Chemistry",
      company: "Florida Southern College,",
      duration: "Aug 2012 – May 2016",
      responsibilities: [],
    },
    {
      role: "Minor in Physics",
      company: "Florida Southern College,",
      duration: "Aug 2012 – May 2016",
      responsibilities: ["Concentration in Quantum and Statistical Mechanics"],
    },
    // Add more degrees as needed
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Education - John Zinno</title>
      </Head>
      <Header />
      <main className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Education</h1>
        {degrees.map((exp, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-bold">{exp.role}</h2>
            <h3 className="text-lg">{exp.company}</h3>
            <h4 className="text-gray-500">{exp.duration}</h4>
            <ul className="list-disc">
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

export default Education;
