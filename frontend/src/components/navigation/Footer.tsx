import { Link } from "react-router-dom";

const links = [
  { href: "/terms-of-service", label: "Общи условия" },
  { href: "/privacy-policy", label: "Политика за поверителност" },
  { href: "/disclaimer", label: "Отказ от отговорност" },
  { href: "/moderation-policy", label: "Политика за модерация" },
];

export function Footer() {
  return (
    <footer className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-row justify-center mt-10 gap-4 text-md">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="text-xs leading-5 text-gray-700 hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center border-gray-900/10 lg:mt-10">
        <p className="text-xs leading-5 text-gray-700 mb-10">
          &copy; 2025 TheDailyBlock. Всички права запазени.
        </p>
      </div>
    </footer>
  );
}
