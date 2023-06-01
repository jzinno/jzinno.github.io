import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 py-4 drop-shadow-md opacity-90">
      <nav className="max-w-xl mx-auto flex justify-between">
        <Link href="/" className="text-white text-xl font-bold">
          Home
        </Link>
        <Link href="/aboutme" className="text-white text-xl font-bold">
          About Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
