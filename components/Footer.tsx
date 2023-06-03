const Footer: React.FC = () => {
  return (
    <footer className="py-2 text-center fixed bottom-0 left-0 w-full select-none text-black">
      <p>&copy; {new Date().getFullYear()} John Zinno</p>
    </footer>
  );
};

export default Footer;
