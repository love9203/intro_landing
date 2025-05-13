interface CaseStudyResultsProps {
  results: string[];
}

export function CaseStudyResults({ results }: CaseStudyResultsProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg my-8">
      <h3 className="text-2xl font-bold mb-4">Key Results</h3>
      <ul className="space-y-3">
        {results.map((result, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
