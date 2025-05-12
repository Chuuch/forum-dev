import { Link, useLocation } from "react-router-dom";
import dailyblock from "../../../public/dailyblock.svg";
import { Button } from "../ui/button";
import { useAuth } from "../../context/AuthContext";
import { UserDropdown } from "../ui/user-dropdown";
import { ModeToggle } from "../ui/theme-toggle";

const links = [
  { href: "/", label: "Начало" },
  { href: "/news", label: "Новини" },
  { href: "/blockchain", label: "Блокчейн" },
  { href: "/smart-contracts", label: "смарт контракти" },
  { href: "/about", label: "за нас" },
  { href: "/contact", label: "контакти" },
];

export default function Navbar() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <nav className="w-full flex items-center justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-900">
      <Link to="/">
        <img src={dailyblock} alt="log" width={50} />
      </Link>
      <div className="flex items-center justify-between space-x-4 ml-10">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className={`text-md font-semibold leading-6 uppercase hover:text-teal-500 ${
              location.pathname === link.href
                ? "text-teal-500 underline"
                : "text-gray-500"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {user ? (
          <div className="flex items-center">
            <ModeToggle />
            <UserDropdown />
          </div>
        ) : (
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2 items-center mx-auto space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              asChild
              className="text-teal-500 dark:hover:bg-teal-600"
            >
              <Link to="/login">Вход</Link>
            </Button>
            <div className="flex items-center text-teal-700 h-10">|</div>
            <Button
              variant="ghost"
              asChild
              className="text-teal-500 dark:hover:bg-teal-600"
            >
              <Link to="/register">Създай профил</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
