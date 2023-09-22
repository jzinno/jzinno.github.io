import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/ThreeSlotFooter";
import WaveComponent from "../components/WaveComponent";
import ParticleBackground from "../components/ParticleBackground";
import Sidebar from "../components/Sidebar";

const images = [
  { src: "/wcm.png", alt: "wcm" },
  { src: "/nygc.png", alt: "nygc" },
  { src: "/nyulh.png", alt: "nyulh" },
  { src: "/nyu.png", alt: "nyu" },
  { src: "/landau.png", alt: "landau" },
  { src: "/smaht.png", alt: "smaht" },
  { src: "/cegs.png", alt: "cegs" },
  { src: "/thetree-2.png", alt: "thetree" },
  // add more images as needed
];
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>John Zinno</title>
      </Head>
      <main className="flex py-8 justify-center items-center h-auto bg-gray-100 w-full">
        <div className="flex py-8 justify-center items-center h-auto max-w-4xl bg-slate-900 rounded-xl drop-shadow-2xl opacity-90">
          <ParticleBackground />
          <div>
            <div className="flex justify-center items-top">
              <Image
                src="/angelslanding.png"
                alt="Description of image"
                width={250}
                height={250}
                className="rounded-xl z-10 select-none"
              />
            </div>
            <h1 className="text-3xl tracking-wide subpixel-antialiased text-slate-300 text-center select-none z-10">
              John Zinno
            </h1>
            <p className="text-lg subpixel-antialiased text-slate-300 text-center select-none px-4 z-10">
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
      <Sidebar/>
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid grid-cols-4 gap-14 p-10 justify-items-center place-items-center">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={250}
              height={250}
              className="object-cover"
            />
          ))}
        </div>
      </div>
      <div className="text-center fixed bottom-0 left-0 w-full">
        <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
