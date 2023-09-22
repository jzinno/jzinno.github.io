import Link from "next/link";

const links = [
  { href: "/", text: "Home" },
  { href: "/experience", text: "Experience" },
  { href: "/edu", text: "Education" },
  { href: "/pubs", text: "Publications" },
  { href: "/gallery", text: "Gallery" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 py-4 shadow-lg opacity-90">
      <nav className="max-w-max mx-auto flex justify-between items-center divide-dotted divide-x-2 ">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="px-4 hover:px-6 text-white text-xl font-bold hover:text-gray-300 hover:scale-105 cursor-pointer select-none transition-all duration-200 ease-in-out"
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
