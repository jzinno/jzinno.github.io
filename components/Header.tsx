import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="max-w-3xl mx-auto flex justify-between">
        <Link href="/" className="text-white text-xl font-bold">
          Home
        </Link>
        <Link href="/resume" className="text-white text-xl font-bold">
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Header;
