const Footer: React.FC = () => {
    return (
      <footer className="flex justify-between py-4 text-center fixed bottom-0 left-0 w-full">
        <div>
          <p>Content for div 1</p>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} John Zinno</p>
        </div>
        <div>
          <p>Content for div 3</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  