import { Users, Megaphone, Building2 } from "lucide-react"
import { UseCaseFeature } from "@/components/ui/use-case-feature"

const demoData = {
  badge: "Use Cases",
  heading: "Välj den lösning som passar dig bäst",
  description: "Vi erbjuder olika lösningar för olika behov",
  tabs: [
    {
      value: "rekrytering",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "Rekrytering",
      content: {
        tiers: [
          {
            id: "sourcing",
            name: "Enskild rekrytering",

            description: "När du enbart behöver anställa för en specifik roll",
            features: [
              "Sök i 36+ källor",
              "Smart matchning",
              "Realtidsdata",
              "20+ filter",
              "Specialist support",
            ],
            cta: "Börja nu",
          },
          {
            id: "sourcing-plus",
            name: "Ersättningsrekrytering",

            description: "När du behöver någon på plats snabbt",
            features: [
              "Uppstart inom 24 timmar",
              "Intresserade kandidater inom några dagar",
              "Anställning inom några veckor",
            ],
            cta: "Uppgradera",
          },

          {
            id: "talent-pool-plus",
            name: "Långsiktig bearbetning",

            description: "När du behöver en långsiktig bearbetning av kandidater med en viss kompetens",
            features: [
              "Allt i Talent Pool",
              "Team samarbete",
              "Workflow automation",
              "Custom branding",
              "Priority support",
            ],
            cta: "Uppgradera",
          },
          {
            id: "enterprise",
            name: "Nisch-rekrytering",
            price: { monthly: "Custom" },
            description: "När du har behov av en mer Headhunting-liknande rekrytering",
            features: [
              "Allt i Talent Pool+",
              "Dedikerad specialist",
              "API integration",
              "Custom rapporter",
              "SLA support",
            ],
            cta: "Kontakta oss",
          },
        ],
      }
    },
    {
      value: "employer-branding",
      icon: <Building2 className="h-auto w-4 shrink-0" />,
      label: "Employer Branding",
      content: {
        tiers: [
          {
            id: "social",
            name: "Social Media",

            description: "För sociala medier",
            features: [
              "Innehållsstrategi",
              "Automatisk publicering",
              "Engagemangsanalys",
              "A/B testning",
              "ROI mätning",
            ],
            cta: "Börja posta",
          },
          {
            id: "content",
            name: "Content",

            description: "För content marketing",
            features: [
              "Innehållsproduktion",
              "SEO optimering",
              "Målgruppsanalys",
              "Performance tracking",
              "Lead generation",
            ],
            cta: "Skapa content",
          },
          {
            id: "enterprise-brand",
            name: "Enterprise",
            price: { monthly: "Custom" },
            description: "För större varumärken",
            features: [
              "Allt i Content",
              "Brand strategy",
              "Custom analytics",
              "Dedikerat team",
              "24/7 support",
            ],
            cta: "Kontakta oss",
            highlighted: true,
          },
        ],
      }
    },
    {
      value: "annonsering",
      icon: <Megaphone className="h-auto w-4 shrink-0" />,
      label: "Annonsering",
      content: {
        tiers: [
          {
            id: "job-ads",
            name: "Job Ads",

            description: "För platsannonser",
            features: [
              "Multi-channel posting",
              "Smart targeting",
              "Performance tracking",
              "A/B testing",
              "Budget optimization",
            ],
            cta: "Börja annonsera",
          },
          {
            id: "campaigns",
            name: "Campaigns",

            description: "För större kampanjer",
            features: [
              "Campaign strategy",
              "Creative production",
              "Multi-platform reach",
              "Advanced analytics",
              "ROI optimization",
            ],
            cta: "Starta kampanj",
          },
          {
            id: "enterprise-ads",
            name: "Enterprise",
            price: { monthly: "Custom" },
            description: "För globala företag",
            features: [
              "Allt i Campaigns",
              "Global reach",
              "Custom integration",
              "Dedicated support",
              "Custom reporting",
            ],
            cta: "Kontakta oss",
            highlighted: true,
          },
        ],
      }
    }
  ]
};

export function UseCaseSectionDemo() {
  return <UseCaseFeature {...demoData} />;
}
