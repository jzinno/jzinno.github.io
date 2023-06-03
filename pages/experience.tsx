import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveComponent from "../components/WaveComponent";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Experience - John Zinno</title>
      </Head>
      <Header />
      <main>
        <h1>Some content</h1>
        {/* Add your Experience content here */}
      </main>
      <div className="text-center fixed bottom-0 left-0 w-full">
        <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
