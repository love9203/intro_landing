import { Gallery4, Gallery4Props } from "../ui/gallery4";

const demoData: Gallery4Props = {
  title: "Case studies",
  description:
    "Över 700 företag och 1000+ användare nyttjar Intro till att hitta, kontakta och anställa toppkandidater. Se varför de litar på oss.",
  items: [
    {
      id: "shadcn-ui",
      title: "Östgötatrafiken",
      description:
        "Upptäck hur Östgötatrafiken använder Intro för att hitta och attrahera specialister inom embedded systems och AI.",
      href: "/case-studies/ostgotatrafiken",
      image: "/images/case_studies/ostgotatrafiken_sliced.png",
    },
    {
      id: "tailwind",
      title: "byBrick",
      description:
        "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
      href: "/case-studies/bybrick",
      image: "/images/case_studies/bybrick.svg",
    },
    {
      id: "astro",
      title: "Handelshögskolan i Stockholm",
      description:
        "Se hur Handelshögskolan i Stockholm (HHS) effektiviserade sin tech-rekrytering med hjälp av Intro.",
      href: "/case-studies/sse",
      image: "/images/case_studies/hhs.svg",
    },
    {
      id: "react",
      title: "Werlabs",
      description:
        "Upptäck hur Werlabs effektiviserade sin rekryteringsprocess och kunde fokusera på att intervjua kandidater istället för att leta efter dom.",
      href: "/case-studies/werlabs",
      image: "/images/case_studies/werlabs.svg",
    },
    {
      id: "nextjs",
      title: "Ninetech",
      description:
        "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
      href: "/case-studies/ninetech",
      image: "/images/case_studies/ninetech_new.svg",
    },
  ],
};

export function CaseStudies() {
  return (
    <div id="case-studies">
      <Gallery4 {...demoData} />
    </div>
  );
}
