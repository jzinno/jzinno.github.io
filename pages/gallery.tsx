import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Footer from "../components/ThreeSlotFooter";
import WaveComponent from "../components/WaveComponent";
import GalleryCard from "../components/GalleryCard";

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      featureImage: "/TP53_diffmap.png",
      title: "Phenotype - Genotype Linkage",
      about: "This is the first image in the gallery",
      blog: "",
    },
    {
      featureImage: "/ball_abc.png",
      title:
        "Single cell  whole genome sequencing Approximate Bayesian Computation",
      about: "This is the first image in the gallery",
      blog: "",
    },
    {
      featureImage: "/omicron.png",
      title: "Evolution of SARS-CoV-2",
      about:
        "High transmissibility is a hallmark of the Omicron variant of SARS-CoV-2. Understanding the molecular determinants of Omicron’s transmissibility will impact development of intervention strategies. Here we map the electrostatic potential surface of the Spike protein to show that major SARS-CoV-2 variants have accumulated positive charges in solvent-exposed regions of the Spike protein, especially its ACE2-binding interface. Significantly, the Omicron Spike-ACE2 complex has complementary electrostatic surfaces. In contrast, interfaces between Omicron and neutralizing antibodies tend to have similar positively charged surfaces. Structural modeling demonstrates that the electrostatic property of Omicron’s Spike receptor binding domain (S RBD) plays a role in enhancing ACE2 recognition and destabilizing Spike-antibody complexes. Specifically, the Omicron S RBD has favorable electrostatic interaction energy with ACE2 that is 3-5 times greater than the Delta variant over a range of 20 Å, implying efficient recognition of host receptors. Computed binding affinities of six representative S RBD-antibody complexes show that Omicron can escape most antibodies targeting the ACE2-binding region of S RBD. Interestingly, a straightforward assessment of the electrostatic surfaces of 18 neutralizing antibodies correctly predicted the Omicron escape status of 80% of cases. Collectively, our structural analysis implies that Omicron S RBD interaction interfaces have been optimized to simultaneously promote access to human ACE2 receptors and evade antibodies. These findings suggest that electrostatic interactions are a major contributing factor for increased Omicron transmissibility relative to other variants",
      blog: "",
    },
    {
      featureImage: "/TP53_diffmap.png",
      title: "Image 1",
      about: "This is the first image in the gallery",
      blog: "https://example.com/blog/image1",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Gallery - John Zinno</title>
      </Head>
      <main className="flex-1">
        <h1 className="text-2xl font-bold select-none my-4 w-1/2 text-center mx-auto border-gray-300">
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </div>
      </main>
      <Sidebar />
      <div className="text-center fixed bottom-0 left-0 w-full">
        <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
