import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import { Footer } from "./components/navigation/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen mx-auto px-4 sm:px-6 lg:px-8 dark:bg-slate-950">
      <Navbar />
      <main className="flex items-center justify-center p-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
