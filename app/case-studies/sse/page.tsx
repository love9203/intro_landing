import { CaseStudyResults } from "@/components/case-study/case-study-results";

export default function SSECaseStudy() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Handelshögskolan i Stockholm × Intro – Så förvandlades rekryterings­utmaningar till strategiska framgångar
        </h1>
        <p className="text-md text-gray-600">
          Lästid: 4 minuter
        </p>
      </div>

      {/* Key points section */}
      <div className="grid gap-6 mt-12">
        <div className="flex gap-4">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Ort</h3>
            <p className="mt-2 text-gray-600">
              Stockholm
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Roller</h3>
            <p className="mt-2 text-gray-600">
              Senior Backend Developer, Cloud Engineer, System Architect
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Mål med Intro:</h3>
            <p className="mt-2 text-gray-600">
              - Hitta seniora utvecklare i Växjö med omnejd
              <br />
              - Attrahera tech-talanger från storstäderna
              <br />
              - Bygga ett starkare employer brand i tech-communityn
            </p>
          </div>
        </div>

      </div>

      {/* Testimonial section */}
      <blockquote className="mt-12 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
        "Intro har hjälpt oss att hitta och attrahera senior tech-kompetens till Växjö på ett sätt som vi inte lyckats med tidigare. Det personliga angreppssättet gör verkligen skillnad."
        <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
            <img 
              src="/images/avatars/linda_sse.jpg" 
              alt="Johan Svensson" 
              className="w-full h-full object-cover"
            />
          </div>
          - Linda Ackered, HR Business Partner, Handelshögskolan i Stockholm
        </footer>
      </blockquote>

      {/* Company intro section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Handelshögskolan i Stockholm – Ledande i Norden och Baltikum</h2>
        <div className="space-y-6 text-gray-600">
          <br />
          <p>
          Som Nordens och Baltikums ledande handelshögskola är Handelshögskolan i Stockholm (HHS) känd för att locka till sig studenter och forskare i världsklass. Men när det kom till att attrahera lika kvalificerade medarbetare bakom kulisserna – särskilt inom nischade IT-roller – stötte HR-teamet på en allt tuffare arbetsmarknad.
          </p>
          <p>
            Vi har pratat med Linda Ackered som jobbar som HR Business Partner på Handelshögskolan och stödjer både den administrativa personalen och fakulteten i deras rekrytering.
          </p>
        </div>
      </div>

      {/* Challenge section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Utmaningen</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>Specialiserade krav – Roller som DevOps-ingenjörer och data scientists krävde djup domänkunskap för att hitta rätt profiler.</li>
            <li>Begränsad budget – Utrymmet för dyra headhunting-lösningar var minimalt.</li>
            <li>Tidsbrist – HR-teamet behövde ett sätt att kombinera personlig kandidatkontakt med effektivitet.</li>
          </ol>
        </div>
      </div>

      {/* Solution section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Lösningen</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Med Intro kunde Fortnox implementera en mer proaktiv och personlig rekryteringsstrategi. Plattformen hjälpte till att identifiera utvecklare med koppling till Småland eller som visade intresse för en livsstilsförändring bort från storstaden.
            <br />
            <br />
            Genom att fokusera på personlig kommunikation via email kunde Fortnox bättre förmedla sina unika fördelar som arbetsgivare och fördelarna med att bo och arbeta i Växjö.
          </p>
        </div>
      </div>

      {/* Results section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Resultatet</h2>
        <div className="space-y-6 mt-4">
          <CaseStudyResults
            results={[
              "Högre träffsäkerhet i att hitta kandidater som matchar specifika kriterier",
              "Ökade svarsfrekvenser jämfört med LinkedIn",
              "Bättre kvalitet på första intervjuer med kandidater",
              "Förbättrat kandidatengagemang genom smarta e-postsekvenser",
              "Bättre projektuppföljning med omfattande statistik"
            ]}
          />
          <div className="text-gray-600">
            <p>
              Under det första året med Intro såg Fortnox flera positiva resultat:
              <br />
              <br />
              • 8 seniora utvecklare rekryterades via plattformen
              <br />
              • 40% av de rekryterade kom från storstadsregioner
              <br />
              • Tiden för att fylla seniora positioner minskade med 45%
              <br />
              • Employer brand-värdet ökade markant i tech-communityn
              <br />
              <br />
              Särskilt framgångsrikt var arbetet med att nå ut till personer som hade någon form av koppling till regionen och som var öppna för en förändring i livsstil.
            </p>
          </div>
        </div>
      </div>

      {/* Recommendation section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Skulle du rekommendera Intro?</h2>
        <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
          "Definitivt! Intro har varit en game-changer för vår tech-rekrytering. Det personliga angreppssättet och möjligheten att nå rätt kandidater har gjort stor skillnad för vår förmåga att attrahera senior kompetens till Växjö."
          <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img 
                src="/images/avatars/johan_fortnox.jpeg" 
                alt="Johan Svensson" 
                className="w-full h-full object-cover"
              />
            </div>
            - Johan Svensson, Tech Recruitment Manager, Fortnox
          </footer>
        </blockquote>
      </div>
    </div>
  )
}
