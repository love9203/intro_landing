interface CaseStudyQuoteProps {
  quote: string;
  author: string;
  role: string;
}

export function CaseStudyQuote({ quote, author, role }: CaseStudyQuoteProps) {
  return (
    <blockquote className="border-l-4 border-blue-500 pl-4 my-8">
      <p className="text-xl italic mb-4">{quote}</p>
      <footer className="text-gray-600">
        <strong>{author}</strong>
        <span className="mx-2">·</span>
        <span>{role}</span>
      </footer>
    </blockquote>
  );
}
