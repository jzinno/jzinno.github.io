import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>John Zinno</title>
      </Head>

      <Header />

      <main>
        <h1>Welcome to My Resume Website</h1>
        <p>Here you can find my qualifications and experience.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
