import Link from 'next/link'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: 'ninetech',
      title: 'Hur Ninetech fick svar av fler kandidater',
      description: 'Läs om hur Ninetech ökade sin svarsfrekvens och byggde ett starkare kandidatnätverk med hjälp av Intro.',
      company: 'Ninetech',
      location: 'Karlstad'
    },
    {
      slug: 'werlabs',
      title: 'Werlabs ökade svarsfrekvensen med 200%',
      description: 'Upptäck hur Werlabs effektiviserade sin rekryteringsprocess och dramatiskt förbättrade kandidatengagemanget.',
      company: 'Werlabs',
      location: 'Stockholm, Göteborg, Malmö'
    },
    {
      slug: 'sse',
      title: 'Handelshögskolan i Stockholm rekryterar IT-talanger',
      description: 'Se hur Handelshögskolan i Stockholm (HHS) effektiviserade sin tech-rekrytering med hjälp av Intro.',
      company: 'Handelshögskolan i Stockholm',
      location: 'Växjö'
    },
    {
      slug: 'visma',
      title: 'Visma effektiviserar tech-rekrytering',
      description: 'Läs om hur Visma ökade kvaliteten på kandidatdialoger och förbättrade sin rekryteringsprocess med Intro.',
      company: 'Visma',
      location: 'Stockholm, Uppsala, Linköping'
    },
    {
      slug: 'ostgotatrafiken',
      title: 'Östgötatrafiken rekryterar AI-specialister',
      description: 'Upptäck hur Östgötatrafiken använder Intro för att hitta och attrahera specialister inom embedded systems och AI.',
      company: 'Östgötatrafiken',
      location: 'Linköping'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Kundberättelser</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.slug} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Link href={`/case-studies/${study.slug}`} className="block space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-gray-900">{study.title}</h2>
                  <p className="text-gray-600">{study.description}</p>
                </div>
                
                <div className="pt-4 border-t flex items-center justify-between text-sm text-gray-500">
                  <span>{study.company}</span>
                  <span>{study.location}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
