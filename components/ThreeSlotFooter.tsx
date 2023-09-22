const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between py-4 text-center fixed bottom-0 left-0 w-full p-4">
      <div className="item-center opacity-70 hover:shadow-2xl transition duration-500 ease-in-out transform hover:opacity-100 hover:-translate-y-1 hover:scale-110">
        <a
          href="mailto:johnzinno14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </a>
      </div>
      <div className="text-sm opacity-70">
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
