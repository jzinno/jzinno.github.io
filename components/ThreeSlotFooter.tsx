import { FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between py-4 text-center fixed bottom-0 left-0 w-full p-4">
      <div className="item-center opacity-70 hover:shadow-2xl transition duration-200 ease-in-out transform hover:opacity-100 hover:-translate-y-1 hover:scale-110">
        <a
          href="mailto:johnzinno14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail className="w-6 h-6" />
        </a>
      </div>
      <div className="text-sm opacity-70">
        <p>&copy; {new Date().getFullYear()} John Zinno</p>
      </div>
      <div className="item-center opacity-70 hover:shadow-2xl transition duration-200 ease-in-out transform hover:opacity-100 hover:-translate-y-1 hover:scale-110">
        <a
          href="https://github.com/jzinno"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;