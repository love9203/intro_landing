import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap, Code, Target, LineChart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  features?: string[];
  buttonText: string;
  imageSrc?: string;
  imageAlt?: string;
  images?: Array<{
    src: string;
    alt: string;
    description?: string;
  }>;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Boost Revenue",
      content: {
        badge: "Modern Tactics",
        title: "Make your site a true standout.",
        description:
          "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
        buttonText: "See Plans",
        imageSrc:
          "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        imageAlt: "Modern office workspace with laptop",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Higher Engagement",
      content: {
        badge: "Expert Features",
        title: "Boost your site with top-tier design.",
        description:
          "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
        buttonText: "See Tools",
        imageSrc:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageAlt: "Team collaboration meeting",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Stunning Layouts",
      content: {
        badge: "Elite Solutions",
        title: "Build an advanced web experience.",
        description:
          "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
        buttonText: "See Options",
        imageSrc:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80",
        imageAlt: "Data analytics dashboard",
      },
    },
    {
      value: "tab-4",
      icon: <Code className="h-auto w-4 shrink-0" />,
      label: "Clean Code",
      content: {
        badge: "Developer Experience",
        title: "Write better code, faster.",
        description:
          "Leverage modern development practices and tools to write clean, maintainable code that scales with your business needs.",
        buttonText: "View Stack",
        imageSrc:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageAlt: "Code editor with programming code",
      },
    },
    {
      value: "tab-5",
      icon: <Target className="h-auto w-4 shrink-0" />,
      label: "Precise Results",
      content: {
        badge: "Performance Metrics",
        title: "Achieve measurable outcomes.",
        description:
          "Track and optimize your web performance with precise analytics and metrics that help you make data-driven decisions.",
        buttonText: "See Metrics",
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageAlt: "Analytics dashboard with charts",
      },
    },
    {
      value: "tab-6",
      icon: <LineChart className="h-auto w-4 shrink-0" />,
      label: "Growth Strategy",
      content: {
        badge: "Business Impact",
        title: "Scale your digital presence.",
        description:
          "Implement proven growth strategies that help you expand your market reach and achieve sustainable business success.",
        buttonText: "Learn More",
        imageSrc:
          "https://images.unsplash.com/photo-1553484771-11998c592b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageAlt: "Business growth chart",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="pt-16 pb-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-8 md:gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  {tab.content.features && (
                    <ul className="space-y-2">
                      {tab.content.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-primary"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="feature-image bg-[#F8F9FD] rounded-2xl p-8 w-full max-w-3xl">
                  {tab.content.images ? (
                    <div className="flex flex-col gap-8">
                      {tab.content.images.map((image, index) => (
                        <div key={index} className="space-y-4">
                          <div className="bg-white rounded-xl shadow-lg p-3 w-full">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-auto"
                            />
                          </div>
                          {image.description && (
                            <p className="text-sm text-muted-foreground text-center px-4">
                              {image.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : tab.content.imageSrc ? (
                    <div className={`bg-white rounded-xl shadow-lg p-3 ${tab.value === 'tab-2' ? 'w-[64%]' : tab.value === 'tab-4' ? 'w-[70%]' : 'w-full'} mx-auto`}>
                      <div>
                        <img
                          src={tab.content.imageSrc}
                          alt={tab.content.imageAlt}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
