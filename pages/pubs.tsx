import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Footer from "../components/ThreeSlotFooter";
import WaveComponent from "../components/WaveComponent";
import PublicationCard from "../components/PublicationCard";

const Pubs: React.FC = () => {
  const publications = [
    {
      title:
        "Measuring Longitudinal Genome-wide Clonal Evolution of Pediatric Acute Lymphoblastic Leukemia at Single-Cell Resolution",
      journal: "bioRxiv",
      authors: [
        "Yakun Pang",
        "Tamara Prieto",
        "Veronica Gonzalez-Pena",
        "Athena Aragon",
        "Yuntao Xia",
        "Sheng Kao",
        "Sri Rajagopalan",
        "John Zinno",
        "Jean Quentin",
        "Julien Laval",
        "Dennis Yuan",
        "Nathaniel Omans",
        "David Klein",
        "Matthew MacKay",
        "Iwijn De Vlaminck",
        "John Easton",
        "William Evans",
        "Dan A. Landau",
        "Charles Gawad",
      ],
      doi: "doi.org/10.1101/2025.03.19.644196",
      featureImage: "/ball_abc2.png",
      abstract:
        "Over 80% of children with acute lymphoblastic leukemia (pALL) can be cured by treating them with multiple chemotherapeutic agents administered over several years, whereas pALL is incurable with 1-3 medications, suggesting significant variation in drug susceptibility across clonal populations. While bulk sequencing studies indicate that pALL cells contain relatively few genetic variants compared to other cancers, the true extent of genetic diversity at the single-cell level remains unknown. Here, we used three complementary approaches to investigate pALL genetic heterogeneity: error-corrected bulk sequencing, single-cell exome sequencing, and primary template-directed amplification (PTA)-enabled single-cell genome sequencing. We discovered that some ETV6-RUNX1 samples harbor multiple independent ras clones and that individual pALL cells harbor substantially more mutations (mean 3,553 per cell) than detected in bulk samples (mean 965 mutations), with variant signatures suggesting both early and late APOBEC-driven mutagenesis in ETV6-RUNX1 patients. Using PTA-based phylogenetic analysis of over 150 single-cell genomes from four pALL patients, we identified heritable phenotypes associated with specific genetic alterations, including some low-frequency clones that are preferentially selected for during chemotherapy treatment. Our findings reveal previously undetected genetic diversity in pALL and suggest that pre-existing mutations influence treatment response, with implications for future therapeutic strategies. This study provides a high-resolution framework for understanding cancer clonal evolution during treatment, yielding important new insights for developing more effective therapeutic approaches for pALL.",
    },
    {
      title:
        "Genotype-to-phenotype mapping of somatic clonal mosaicism via single-cell co-capture of DNA mutations and mRNA transcripts",
      journal: "bioRxiv",
      authors: [
        "Dennis J Yuan",
        "John Zinno",
        "Theo Botella",
        "Dalia Dhingra",
        "Shu Wang",
        "Allegra Hawkins",
        "Ariel Swett",
        "Jesus Sotelo",
        "Ramya Raviram",
        "Clayton Hughes",
        "Catherine Potenski",
        "Akira Yokoyama",
        "Nobuyuki Kakiuchi",
        "Seishi Ogawa",
        "Dan A Landau",
      ],
      doi: "doi.org/10.1101/2024.05.22.595241",
      featureImage: "/scG2P.png",
      abstract:
        "Somatic mosaicism is a hallmark of malignancy that is also pervasively observed in human physiological aging, with clonal expansions of cells harboring mutations in recurrently mutated driver genes. Bulk sequencing of tissue microdissection captures mutation frequencies, but cannot distinguish which mutations co-occur in the same clones to reconstruct clonal architectures, nor phenotypically profile clonal populations to delineate how driver mutations impact cellular behavior. To address these challenges, we developed single-cell Genotype-to-Phenotype sequencing (scG2P) for high-throughput, highly-multiplexed, single-cell joint capture of recurrently mutated genomic regions and mRNA phenotypic markers in cells or nuclei isolated from solid tissues. We applied scG2P to aged esophagus samples from five individuals with high alcohol and tobacco exposure and observed a clonal landscape dominated by a large number of clones with a single driver event, but only rare clones with two driver mutations. NOTCH1 mutants dominate the clonal landscape and are linked to stunted epithelial differentiation, while TP53 mutants and double-driver mutants promote clonal expansion through both differentiation biases and increased cell cycling. Thus, joint single-cell highly multiplexed capture of somatic mutations and mRNA transcripts enables high resolution reconstruction of clonal architecture and associated phenotypes in solid tissue somatic mosaicism.",
    },
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
        <h4 className="text-sm font-semibold select-none pb-2 w-1/2 text-center mx-auto border-gray-300">
          Select a publication to learn more about it
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
