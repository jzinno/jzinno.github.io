import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>John Zinno</title>
      </Head>

      <Header />
      <main className="flex justify-center items-center h-64 bg-gray-100 w-full">
        <div className="flex justify-center items-center h-32 max-w-4xl bg-slate-800 rounded-lg drop-shadow-lg">
          <div>
            <h1 className="text-3xl text-slate-400 text-center select-none">
              Welcome to My Website
            </h1>
            <p className="text-xl text-slate-400 text-center select-none px-4">
              Here you can find my qualifications, experience, projects, and
              interests.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
