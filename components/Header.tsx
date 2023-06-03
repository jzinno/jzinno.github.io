import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 py-4 drop-shadow-lg opacity-90">
      <nav className="max-w-4xl mx-auto flex justify-between">
        <Link href="/" className="text-white text-xl font-bold">
          Home
        </Link>
        <Link href="/aboutme" className="text-white text-xl font-bold">
          About Me
        </Link>
        <Link href="/edu" className="text-white text-xl font-bold">
          Education
        </Link>
        <Link href="/experience" className="text-white text-xl font-bold">
          Experience
        </Link>
        <Link href="/pubs" className="text-white text-xl font-bold">
          Publications
        </Link>
      </nav>
    </header>
  );
};

export default Header;
