import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Resume: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Resume - John Zinno</title>
      </Head>

      <Header />

      <main>
        <h1>Some content</h1>
        {/* Add your resume content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
