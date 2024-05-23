import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Footer from "../components/ThreeSlotFooter";
import WaveComponent from "../components/WaveComponent";
import GalleryCard from "../components/GalleryCard";

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      featureImage: "/oci-blog.jpg",
      title:
        "Accelerating Human Somatic Mosaicism Research with Single-Cell Genomics and GPU Computing",
      about:
        "In collaboration Oracle we have developed pipelines for constructing the world's largest human single-cell multiomic phylogenies as record speeds. This was made possible through the innovative use of single-cell whole genome and whole transcriptome sequencing (SMART PTA), which allows for the analysis of genetic material at an unprecedented single-cell resolution and scale. By leveraging Oracle's GPU computing resources, the project significantly accelerated the processing of massive datasets, enabling the rapid analysis of many thousands of single-cell genomes. This work not only enhances our understanding of human somatic evolution but also paves the way for future advancements in personalized medicine and genomic research.",
      blog: "https://blogs.oracle.com/cloud-infrastructure/post/oci-ny-genome-center-singlecell-genome-collab",
    },
    {
      featureImage: "/torus.gif",
      title: "Spatial Moran Evolution on a Torus",
      about:
        "A fun visualization of spatial Moran evolution on a torus. The goal here was to build a simulation framework to perform approximate Bayesian computation on competing clones in the context of human esophageal tissue. This approximates their spatial distribution to an infinite surface via the torus topology given enough simulated cells. Later work has incorporated cell layers and dynamic lineage tracking to explore the spatial dynamics of clones gaining relative fitness perturbing mutations. Cells are pixels, color indicates globally normalized fitness on the viridis cmap.",
      blog: "",
    },
    {
      featureImage: "/TP53_diffmap.png",
      title: "Phenotype - Genotype Linkage",
      about: "",
      blog: "",
    },
    {
      featureImage: "/ball_abc.png",
      title:
        "Single cell  whole genome sequencing Approximate Bayesian Computation",
      about:
        "Here we look at single cell whole genome sequencing data on a pediatric B-ALL patient. Interestingly we observe two mutations in the same codon of JAK2. We use ABC to infer the joint posterior distribution of the age of onset and fitness of these B-ALL clones and find that the two mutations have similar characteristics, this finding is consistent with the phylogeny of the clones. It would be interesting to observe subclonal diversity where sibling clones have different fitness advantages. I'm sure we will see this in the future.",
      blog: "",
    },
    {
      featureImage: "/scABC-nn.png",
      title: "Simulating a simulator of Wright-Fisher evolution",
      about:
        "This is a very fun evolution of optimizing Wright-Fisher evolution simulators. blog post soon™",
      blog: "",
    },
    {
      featureImage: "/omicron.png",
      title: "Evolution of SARS-CoV-2",
      about:
        "High transmissibility is a hallmark of the Omicron variant of SARS-CoV-2. Understanding the molecular determinants of Omicron's transmissibility will impact development of intervention strategies. Here we map the electrostatic potential surface of the Spike protein to show that major SARS-CoV-2 variants have accumulated positive charges in solvent-exposed regions of the Spike protein, especially its ACE2-binding interface. Significantly, the Omicron Spike-ACE2 complex has complementary electrostatic surfaces. In contrast, interfaces between Omicron and neutralizing antibodies tend to have similar positively charged surfaces. Structural modeling demonstrates that the electrostatic property of Omicron's Spike receptor binding domain (S RBD) plays a role in enhancing ACE2 recognition and destabilizing Spike-antibody complexes. Specifically, the Omicron S RBD has favorable electrostatic interaction energy with ACE2 that is 3-5 times greater than the Delta variant over a range of 20 Å, implying efficient recognition of host receptors. Computed binding affinities of six representative S RBD-antibody complexes show that Omicron can escape most antibodies targeting the ACE2-binding region of S RBD. Interestingly, a straightforward assessment of the electrostatic surfaces of 18 neutralizing antibodies correctly predicted the Omicron escape status of 80% of cases. Collectively, our structural analysis implies that Omicron S RBD interaction interfaces have been optimized to simultaneously promote access to human ACE2 receptors and evade antibodies. These findings suggest that electrostatic interactions are a major contributing factor for increased Omicron transmissibility relative to other variants",
      blog: "",
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
        <div className="grid grid-cols-1 md:grid-cols-2  mb-20 lg:grid-cols-3 gap-4 p-4">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </div>
      </main>
      <Sidebar />
      <div className="z-50">
        <div className="text-center fixed bottom-0 left-0 w-full">
          <WaveComponent startColor="#ff5e62" endColor="#ff9966" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
