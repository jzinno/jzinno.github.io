import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Footer from "../components/ThreeSlotFooter";
import WaveComponent from "../components/WaveComponent";
import PublicationCard from "../components/PublicationCard";

const Pubs: React.FC = () => {
  const publications = [
    {
      title:
        "Omicron Spike protein has a positive electrostatic surface that promotes ACE2 recognition and antibody escape",
      journal: "Frontiers in Virology",
      authors: [
        "Hin Hark Gan",
        "John Zinno",
        "Fabio Piano",
        "Kristin C Gunsalus",
      ],
      doi: "doi.org/10.3389/fviro.2022.894531",
      featureImage: "/omicron.png",
      abstract:
        "High transmissibility is a hallmark of the Omicron variant of SARS-CoV-2. Understanding the molecular determinants of Omicron’s transmissibility will impact development of intervention strategies. Here we map the electrostatic potential surface of the Spike protein to show that major SARS-CoV-2 variants have accumulated positive charges in solvent-exposed regions of the Spike protein, especially its ACE2-binding interface. Significantly, the Omicron Spike-ACE2 complex has complementary electrostatic surfaces. In contrast, interfaces between Omicron and neutralizing antibodies tend to have similar positively charged surfaces. Structural modeling demonstrates that the electrostatic property of Omicron’s Spike receptor binding domain (S RBD) plays a role in enhancing ACE2 recognition and destabilizing Spike-antibody complexes. Specifically, the Omicron S RBD has favorable electrostatic interaction energy with ACE2 that is 3-5 times greater than the Delta variant over a range of 20 Å, implying efficient recognition of host receptors. Computed binding affinities of six representative S RBD-antibody complexes show that Omicron can escape most antibodies targeting the ACE2-binding region of S RBD. Interestingly, a straightforward assessment of the electrostatic surfaces of 18 neutralizing antibodies correctly predicted the Omicron escape status of 80% of cases. Collectively, our structural analysis implies that Omicron S RBD interaction interfaces have been optimized to simultaneously promote access to human ACE2 receptors and evade antibodies. These findings suggest that electrostatic interactions are a major contributing factor for increased Omicron transmissibility relative to other variants.",
    },
    {
      title:
        "The Caenorhabditis elegans TDRD5/7-like protein, LOTR-1, interacts with the helicase ZNFX-1 to balance epigenetic signals in the germline",
      journal: "PLoS Genetics",
      authors: [
        "Elisabeth A. Marnik",
        " Miguel V. Almeida",
        "P. Giselle Cipriani",
        "George Chung",
        "Edoardo Caspani",
        "Emil Karaulanov",
        "Falk Butter",
        "Catherine S. Sharp",
        "John Zinno",
        "Hin Hark Gan",
        "Fabio Piano",
        "René F Ketting",
        "Kristin C. Gunsalus",
        "Dustin L. Updike",
      ],
      doi: "doi.org/10.1371/journal.pgen.1010245",
      featureImage: "/lotr1.png",
      abstract:
        "LOTUS and Tudor domain containing proteins have critical roles in the germline. Proteins that contain these domains, such as Tejas/Tapas in Drosophila, help localize the Vasa helicase to the germ granules and facilitate piRNA-mediated transposon silencing. The homologous proteins in mammals, TDRD5 and TDRD7, are required during spermiogenesis. Until now, proteins containing both LOTUS and Tudor domains in Caenorhabditis elegans have remained elusive. Here we describe LOTR-1 (D1081.7), which derives its name from its LOTUS and Tudor domains. Interestingly, LOTR-1 docks next to P granules to colocalize with the broadly conserved Z-granule helicase, ZNFX-1. The Tudor domain of LOTR-1 is required for its Z-granule retention. Like znfx-1 mutants, lotr-1 mutants lose small RNAs from the 3’ ends of WAGO and mutator targets, reminiscent of the loss of piRNAs from the 3’ ends of piRNA precursor transcripts in mouse Tdrd5 mutants. Our work shows that LOTR-1 acts with ZNFX-1 to bring small RNA amplifying mechanisms towards the 3’ ends of its RNA templates.",
    },
    {
      title:
        "Novel LOTUS-domain proteins are organizational hubs that recruit C. elegans Vasa to germ granules",
      journal: "eLife",
      authors: [
        "Patricia Giselle Cipriani",
        "Olivia Bay",
        "John Zinno",
        "Michelle Gutwein",
        "Hin Hark Gan",
        "George Chung",
        "Jia-Xuan Chen",
        "Hala Fahs",
        "Yu Guan",
        "Thomas F Duchaine",
        "Matthias Selbach",
        "Fabio Piano",
        "Kristin C Gunsalus",
      ],
      doi: "doi.org/10.7554/eLife.60833",
      featureImage: "/mips.png",
      abstract:
        "We describe MIP-1 and MIP-2, novel paralogous C. elegans germ granule components that interact with the intrinsically disordered MEG-3 protein. These proteins promote P granule condensation, form granules independently of MEG-3 in the postembryonic germ line, and balance each other in regulating P granule growth and localization. MIP-1 and MIP-2 each contain two LOTUS domains and intrinsically disordered regions and form homo- and heterodimers. They bind and anchor the Vasa homolog GLH-1 within P granules and are jointly required for coalescence of MEG-3, GLH-1, and PGL proteins. Animals lacking MIP-1 and MIP-2 show temperature-sensitive embryonic lethality, sterility, and mortal germ lines. Germline phenotypes include defects in stem cell self-renewal, meiotic progression, and gamete differentiation. We propose that these proteins serve as scaffolds and organizing centers for ribonucleoprotein networks within P granules that help recruit and balance essential RNA processing machinery to regulate key developmental transitions in the germ line.",
    },
    // Add more publications as needed
  ];

  return (
    <div className="flex flex-col text-slate-800text-lg text-slate-800 min-h-screen bg-gray-100">
      <Head>
        <title>Pubs - John Zinno</title>
      </Head>
      <main className="flex flex-col justify-center items-center p-4 text-center">
        <h1 className="text-2xl font-bold select-none pb-2 w-1/2 text-center mx-auto border-gray-300">
          Publications
        </h1>
        <h4
          className="text-lg font-semibold select-none p-2 w-1/2 text-center mx-auto border-gray-300"
          style={{ maxWidth: "50rem" }}
        >
          Selcet a publication to learn more about it.
        </h4>
        <div className="grid grid-cols-1 mb-20 px-10 gap-4">
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
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

export default Pubs;
