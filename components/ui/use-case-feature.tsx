"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PricingTier {
  id: string;
  name: string;

  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlighted?: boolean;
}

interface TabContent {
  badge?: string;
  title?: string;
  description?: string;
  tiers: PricingTier[];
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface UseCaseFeatureProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

export function UseCaseFeature({
  badge = "Use Cases",
  heading = "Välj den lösning som passar dig bäst",
  description = "Vi erbjuder olika lösningar för olika behov",
  tabs = [],
}: UseCaseFeatureProps) {
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
        <Tabs defaultValue={tabs[0]?.value} className="mt-8">
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
          <div className="mx-auto mt-8 max-w-screen-xl">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="space-y-8"
              >
                <div className="text-center space-y-4">
                  {tab.content.badge && (
                    <Badge variant="outline" className="bg-background">
                      {tab.content.badge}
                    </Badge>
                  )}
                  {tab.content.title && (
                    <h2 className="text-3xl font-semibold lg:text-4xl">
                      {tab.content.title}
                    </h2>
                  )}
                  {tab.content.description && (
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {tab.content.description}
                    </p>
                  )}
                </div>
                <div className={`grid gap-6 mx-auto ${
                  tab.content.tiers.length > 3 
                    ? 'sm:grid-cols-2 lg:grid-cols-4 max-w-[80rem]' 
                    : 'sm:grid-cols-2 lg:grid-cols-3 max-w-6xl'
                }`}>
                  {tab.content.tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col h-full"
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-0 right-0">
                          <div className="mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                            🔥 Most Popular
                          </div>
                        </div>
                      )}
                      <div className="flex flex-col h-full justify-between space-y-4">
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">{tier.name}</h3>

                          <p className="mt-2 text-muted-foreground text-sm">
                            {tier.description}
                          </p>
                        </div>
                        <ul className="space-y-3">
                          {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <svg
                                className="h-5 w-5 flex-shrink-0 text-gray-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span
                                className="text-gray-600"
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className="w-full bg-black text-white hover:bg-gray-800"
                        >
                          {tier.cta}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
