import { Card, CardContent } from "@/components/ui/card";
import cyber from "@/assets/cyber.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/chuchulev/",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://x.com/0xW3bster",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-chuchulev/",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/chuuch",
    icon: FaGithub,
  },
];

export default function ProfileCard() {
  return (
    <Card className="max-w-5xl w-full mx-auto shadow-md bg-gray-200/20 dark:bg-slate-900">
      <CardContent className="p-4 flex gap-6 items-center">
        {/* Profile Image */}
        <div className="w-64">
          <img
            src={cyber}
            alt="Profile"
            className="w-full h-full rounded-xl object-contain"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-primary">Даниел Чучулев</h2>
          <p className="text-sm text-muted-foreground">
            Одитор | Фулстак Програмист
          </p>
          <p className="mt-2 text-sm italic">
            Прогресът не е резултат от късмет или щастлива случайност, а от
            усилията полагани всекидневно.
          </p>
          <div className="flex gap-2 my-2">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <Link
                  key={index}
                  to={social.href}
                  aria-label={social.name}
                  className="text-muted-foreground hover:text-primary transition-colors text-xl"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
