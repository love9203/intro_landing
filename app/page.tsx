import { Hero } from "../components/ui/animated-hero";
import { HowItWorks } from "../components/sections/how-it-works";
import { ClientLogos } from "../components/sections/client-logos";
import { UseCaseSectionDemo } from "../components/sections/use-case-demo";
import { ProductFeatures } from "../components/sections/product-features";
import { TestimonialSection } from "../components/sections/testimonial-section";
import { Faq3Demo } from "../components/blocks/faq3";
import { CaseStudies } from "../components/sections/case-studies";
import { TrustedBy } from "../components/ui/trusted-by";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <ClientLogos />
      <UseCaseSectionDemo />
      <TestimonialSection />
      <ProductFeatures />
      <Faq3Demo />
      <CaseStudies />
    </div>
  );
}
