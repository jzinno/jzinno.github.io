const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between py-4 text-center fixed bottom-0 left-0 w-full p-4">
      <div>
        <p></p>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} John Zinno</p>
      </div>
      <div className="item-center opacity-70 hover:shadow-2xl transition duration-500 ease-in-out transform hover:opacity-100 hover:-translate-y-1 hover:scale-110">
        <a
          href="https://github.com/jzinno"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github-mark/github-mark.svg"
            alt="Github logo"
            width="24"
            height="24"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
