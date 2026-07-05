interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <header className="bg-white py-4">
      <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <button onClick={() => onNavigate("home")} className="header">
          Home
        </button>

        <button onClick={() => onNavigate("search")} className="header">
          Search Products
        </button>

      </nav>
    </header>
  );
};

export default Header;