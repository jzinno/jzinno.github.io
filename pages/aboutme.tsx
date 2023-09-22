import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/ThreeSlotFooter";
import WaveComponent from "../components/WaveComponent";

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>About Me - John Zinno</title>
      </Head>
      <Header />
      <main>
        <section className="text-center py-12 px-4">
          <h1 className="text-4xl mb-4">About Me</h1>
          <p className="text-xl text-gray-700">
            Hello! I'm John Zinno, a full-stack developer with a passion for
            problem-solving and creating intuitive user experiences. With a
            background in Computer Science and several years of experience in
            the tech industry, I have a strong understanding of software
            development principles and modern technologies.
          </p>
        </section>
      </main>
      <div className="text-center fixed bottom-0 left-0 w-full">
        <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
