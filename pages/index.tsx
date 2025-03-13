import Head from "next/head";
import Image from "next/image";
import Footer from "../components/ThreeSlotFooter";
import WaveComponent from "../components/WaveComponent";
import ParticleBackground from "../components/ParticleBackground";
import Sidebar from "../components/Sidebar";

const images = [
  { src: "/wcm.png", alt: "wcm" },
  { src: "/nygc.png", alt: "nygc" },
  { src: "/smaht.png", alt: "smaht" },
  { src: "/cegs.png", alt: "cegs" },
  { src: "/landau.png", alt: "landau" },
  { src: "/stealth.png", alt: "stealth" },
  { src: "/RxCovea.png", alt: "RxCovea" },
  { src: "/thetree-2.png", alt: "thetree" },
];

const previousImages = [
  { src: "/nyulh.png", alt: "nyulh" },
  { src: "/nyu.png", alt: "nyu" },
  { src: "/cgsb.png", alt: "cgsb" },
  { src: "/sbu.png", alt: "sbu" },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      <Head>
        <title>John Zinno</title>
        <meta property="og:image" content="/angelslanding.png" />
      </Head>
      <main className="flex pt-14 justify-center items-center h-auto bg-gray-100 w-full">
        <div className="shadow-xl rounded-xl bg-gray-100 m-2">
          <div className="flex py-8 justify-center items-center h-auto max-w-4xl bg-slate-900 rounded-xl drop-shadow-xl opacity-90">
            <ParticleBackground />
            <div className="">
              <div className="flex justify-center items-top">
                <Image
                  src="/angelslanding.png"
                  alt="Description of image"
                  width={250}
                  height={250}
                  className="rounded-xl z-10 select-none"
                />
              </div>
              <h1 className="text-4xl tracking-wide subpixel-antialiased text-slate-300 text-center select-none py-2 z-10">
                John Zinno
              </h1>
              <p className="text-lg subpixel-antialiased text-slate-300 text-center px-4 z-10">
                <strong>I like to train deep neural nets;</strong> in that pursuit I get to do so many exciting things.
                We develop multi-omics technologies to understand the relationship between genotype and phenotype at unprecedented scales, thousands of whole genomes and trascriptomes in the same cells per patient toward understanding somatic mosaicism. We can look back in time over phylogenetic trees of cells to see when critical mutations happen, thier heritable cell states, and discover novel biology in the process. With that comes a lot of exciting engineering problems and even more exciting biology. But the discoveries in biology are the product of the engineering (and wet lab wizards). Processing tens of thousands whole genomes neccessitates leveraging distributed computing over a large GPU cluster with specialized code and many similar feats. I also get to architect and train SOTA models for <i>de novo</i> cfDNA cancer detection, take advantage of microsatellites for phylogenetic reconstruction in high-throughput targeted scDNAseq, develop jitted JAX somatic evolution kernels for approximate bayesian computation, and author interfaces for LLMs with genomics facing APIs. I'm enthusiastic about and active in the open source "AI" community and looking forward to what we build.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Sidebar />
      <div className="flex flex-col items-center h-full w-full mb-16">
        <div className="w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 place-items-center">
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
          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Previous Affiliations</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 place-items-center">
            {previousImages.map((image, index) => (
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
      </div>
      <div className="text-center fixed bottom-0 left-0 w-full">
        <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
