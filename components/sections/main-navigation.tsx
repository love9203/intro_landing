"use client";

import { Navbar1, Navbar1Props } from "../ui/navbar1";
import { Book, Sunset, Trees, Zap } from "lucide-react";

const demoData: Navbar1Props = {
  logo: {
    url: "/",
    src: "images/intro_logo.svg",
    alt: "Intro",
    title: "Intro",
  },
  menu: [
    {
      title: "Produkter",
      url: "#",
      items: [
        {
          title: "Intro Email",
          description: "3x konvertering jämfört med Linkedin",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/products/analytics",
        },
        {
          title: "Intro Annonsering",
          description: "Annonsering med laserprecision, slipp inflöde av okvalificerade kandidater",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/products/engagement",
        },
        {
          title: "Go-To-Talent",
          description: "Din heltäckande lösning för att rekrytera seniora kandidater",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/products/security",
        },
      ],
    },
    {
      title: "Support",
      url: "#",
      items: [
        {
          title: "Help Center & FAQ",
          description: "Få alla svar du behöver här",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/help",
        },
        {
          title: "Kontakta oss",
          description: "Vi finns här för att hjälpa dig med alla frågor du har",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/contact",
        },
        {
          title: "För kandidater",
          description: "Kontrollera aktuell status för våra tjänster",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/status",
        },
        {
          title: "Terms of Service",
          description: "Våra villkor för användning av våra tjänster",
          icon: <Book className="size-5 shrink-0" />,
          url: "/terms",
        },
      ],
    },
    {
      title: "Priser",
      url: "/pricing",
    },
    {
      title: "Kundberättelser",
      url: "/#case-studies",
      onClick: async (e: React.MouseEvent) => {
        e.preventDefault();
        const currentPath = window.location.pathname;
        if (currentPath !== '/') {
          window.location.href = '/#case-studies';
        } else {
          document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  ],
};

export function MainNavigation() {
  return <Navbar1 {...demoData} />;
}
