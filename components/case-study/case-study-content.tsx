interface CaseStudyContentProps {
  children: React.ReactNode;
}

export function CaseStudyContent({ children }: CaseStudyContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {children}
    </div>
  );
}
