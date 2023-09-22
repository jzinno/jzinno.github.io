import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/ThreeSlotFooter";
import WaveComponent from "../components/WaveComponent";

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Gallery - John Zinno</title>
      </Head>
      <Header />
      <main>
        <h1>Some content</h1>
        {/* Add your Gallery content here */}
      </main>
      <div className="text-center fixed bottom-0 left-0 w-full">
        <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
