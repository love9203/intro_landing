interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  // Define the slugs for all case studies
  const slugs = ['bybrick', 'ninetech', 'ostgotatrafiken', 'sse', 'werlabs'];

  return slugs.map((slug) => ({
    slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;
  
  // Dynamically import the case study component
  const CaseStudyComponent = require(`../${slug}/page`).default;
  
  return <CaseStudyComponent />;
}
