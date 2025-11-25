import { Link } from "react-router-dom";
import logo from "@/assets/images/shop-logo.png";

interface HeaderLinks {
  name: string;
  url: string;
}

interface HeaderProps {
  headerLinks: HeaderLinks[];
}

const Header = ({ headerLinks }: HeaderProps) => {
  return (
    <header className="flex flex-row justify-between items-center w-full px-10 bg-header text-white h-[80px]">
      <div className="flex flex-row gap-2 items-center">
        <img src={logo} alt="shop-logo" className="w-full h-[40px]" />
      </div>
      <nav className="hidden md:flex md:flex-row md:gap-4">
        {headerLinks.map((link) => {
          return (
            <Link key={link.url} to={link.url}>
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
