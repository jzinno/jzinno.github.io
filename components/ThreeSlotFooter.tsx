const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between py-4 text-center fixed bottom-0 left-0 w-full">
      <div>
        <p>not sure yet</p>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} John Zinno</p>
      </div>
      <div>
        <p>Logo images here of stuff used to make</p>
      </div>
    </footer>
  );
};

export default Footer;
