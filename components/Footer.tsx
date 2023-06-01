const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-200 py-4 text-center fixed bottom-0 left-0 w-full">
      <p>&copy; {new Date().getFullYear()} John Zinno</p>
    </footer>
  );
};

export default Footer;
