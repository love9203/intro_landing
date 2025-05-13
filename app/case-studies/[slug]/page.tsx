interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;
  
  // Dynamically import the case study component
  const CaseStudyComponent = require(`../${slug}/page`).default;
  
  return <CaseStudyComponent />;
}
