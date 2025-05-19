import { GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <header>
        <title>TheDailyBlock | Начало</title>
      </header>
      <div className="flex flex-col items-center justify-center bg-transparent text-white py-40 relative scrollbar-custom">
        {/* Add radial gradient background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="w-[600px] h-[600px] dark:bg-blue-700/20 opacity-70 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl text-center space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-primary ">
              <span className="text-teal-400">The Daily Block</span> -{" "}
              Българският форум за{" "}
              <span className="text-purple-400">Блокчейн</span> и{" "}
              <span className="text-pink-400">Уеб 3 </span> технологии.
            </h1>
            <p className="mt-6 text-lg dark:text-gray-300 text-gray-400 ">
              Потопете се в света на{" "}
              <span className="text-teal-300 font-semibold">
                децентрализираните технологии
              </span>
              , където иновациите срещат сигурността. Бъдете в крак с най-новите
              тендеции в
              <span className="text-blue-300 font-semibold">
                {" "}
                блокчейн протоколите
              </span>
              , смарт контрактите, и
              <span className="text-purple-300 font-semibold">
                {" "}
                софтуерното инженерство.
              </span>
              .
            </p>
            <p className="mt-4 text-md text-gray-400/80 dark:text-gray-400 italic ">
              Независимо дали сте програмист, инвеститор или просто любопитен -
              вие сте на правилното място.
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-white font-bold text-lg mt-10 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Link to="/about" className="flex items-center gap-2">
                Научи повече
                <GraduationCap size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
