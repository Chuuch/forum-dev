import { Routes, Route } from "react-router-dom";
import {
  Home,
  LoginPage,
  RegisterPage,
  Profile,
  Dashboard,
  NotFound,
} from "./views";
import Layout from "./layout";
import ContactPage from "./views/Contact";
import AboutPage from "./views/About";
import News from "./views/News";
import SmartContracts from "./views/SmartContracts";
import Settings from "./views/user/Settings";
import Blockchain from "./views/Blockchain";
import Terms from "./views/policy/Terms";
import Privacy from "./views/policy/Privacy";
import Disclaimer from "./views/policy/Disclaimer";
import Moderation from "./views/policy/Moderation";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile:id" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/smart-contracts" element={<SmartContracts />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/moderation-policy" element={<Moderation />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
