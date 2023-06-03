import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveComponent from "../components/WaveComponent";
import ParticleBackground from "../components/ParticleBackground";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>John Zinno</title>
      </Head>
      <Header />
      <main className="flex py-8 justify-center items-center h-auto bg-gray-100 w-full">
        <div className="flex py-8 justify-center items-center h-auto max-w-4xl bg-slate-800 rounded-xl drop-shadow-lg opacity-90">
          <ParticleBackground />
          <div>
            <div className="flex justify-center items-top">
              <Image
                src="/angelslanding.png" // Path to your image
                alt="Description of image"
                width={250}
                height={250}
                className="rounded-xl z-10 select-none"
              />
            </div>
            <h1 className="text-3xl text-slate-300 text-center select-none z-10">
              John Zinno
            </h1>
            <p className="text-lg text-slate-300 text-center select-none px-4 z-10">
              As a Genomics Data Scientist, I am very interested in the power of
              deep learning and its potential in genomics and bioinformatics. My
              recent work particularly emphasizes using neural networks and
              generative models to decode complex genetic signatures, augmenting
              single-cell 'omics' annotation and revolutionizing our
              understanding of cellular diversity.
            </p>
          </div>
        </div>
      </main>
      <div className="text-center fixed bottom-0 left-0 w-full">
        <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
