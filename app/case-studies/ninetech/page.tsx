export default function NinetechCaseStudy() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Hur Ninetech fick svar av fler kandidater och utökade sitt kandidatnätverk med Intro.
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
              Karlstad.
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
              .NET Fullstack, Accountant, Backend Lead, Devops.
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
            - Få fler svar av kandidater i ett begränsat geografisk område.
            <br />
            - Träffa fler kandidater i rekryteringssyfte och bygga starkare nätverk
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <blockquote className="mt-12 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
        "Vi märkte snabbt att vi får fler svar av kandidater när vi kontaktar dom via email vs meddelanden på LinkedIn. Många av kandidaterna som Intro hittar kände vi till sedan tidigare men aldrig lyckats få svar av."
        <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
            <img 
              src="/images/avatars/elina_ninetech.jpeg" 
              alt="Elina Sandberg" 
              className="w-full h-full object-cover"
            />
          </div>
          - Elina Sandberg, Head of Recruitment & Workplace Branding, Ninetech
        </footer>
      </blockquote>

      {/* Results section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Ninetech – Bygger digitala upplevelser</h2>
        <div className="space-y-6 text-gray-600">
          <br />
          <p>
            Tänk dig en helg i fjällen där hela familjen stortrivs. Eller det där husköpet som inte alls blev krångligt. Eller känslan av att snabbt kunna hjälpa ditt barn få rätt glasögon.
          </p>
          <p>
            Det är sådana upplevelser som vi älskar att vara med och skapa. Vårt fokus är att skapa "bäst i branschen"-lösningar för era kund-, sälj- och marknadsprocesser. Digital kärlek, helt enkelt.
          </p>
          <p>
            Vi har pratat med Elina Sandberg (Head of Recruitment) om hur Intro hjälper Ninetech att rekrytera och bygga kandidatpipe.
          </p>
        </div>
      </div>

      {/* Challenge section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Utmaningen</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Ninetech har under många år byggt upp ett starkt varumärke i Värmland och är en av regionens största tech-bolag. Men med en stark tillväxt och många spännande projekt har behovet av nya utvecklare ökat.
            <br />
            <br />
            Att hitta rätt kompetens i ett begränsat geografiskt område är en utmaning som många företag brottas med. För Ninetech var det extra viktigt att nå ut till personer som redan bodde i regionen eller hade en koppling till Värmland.
            <br />
            <br />
            LinkedIn var den primära kanalen för att hitta kandidater, men svarsfrekvensen var låg och det var svårt att bygga en långsiktig relation med potentiella kandidater.
          </p>
        </div>
      </div>

      {/* Second testimonial section */}
      <blockquote className="mt-12 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
        "Intro ger mig möjlighet att få träffa fler kandidater och bygga ett starkare nätverk lokalt. Jag tror det har att göra med att kontaktskapande blir mycket mer personligt när jag hör av mig till deras email än att vara "en av alla andra rekryterare" som skriver på LinkedIn"
        <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
            <img 
              src="/images/avatars/elina_ninetech.jpeg" 
              alt="Elina Sandberg" 
              className="w-full h-full object-cover"
            />
          </div>
          - Elina Sandberg, Head of Recruitment & Workplace Branding, Ninetech
        </footer>
      </blockquote>

      {/* Solution section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Lösningen</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Med hjälp av Intro kunde Ninetech börja bygga en mer proaktiv rekryteringsprocess. Istället för att förlita sig på traditionella jobbannonser och LinkedIn-meddelanden, kunde de nu nå ut till relevanta kandidater på ett mer personligt sätt.
            <br />
            <br />
            Genom att använda Intros email-first approach ökade svarsfrekvensen markant. Kandidater som tidigare inte svarat på LinkedIn började nu engagera sig i dialog, vilket ledde till flera lyckade rekryteringar.
            <br />
            <br />
            Intro hjälpte också Ninetech att identifiera personer med koppling till Värmland som arbetade på andra orter, vilket öppnade upp för möjligheten att locka hem talanger till regionen.
          </p>
        </div>
      </div>

      {/* Results section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Resultatet</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Under de första 6 månaderna med Intro såg Ninetech en markant ökning i antalet kvalitativa kandidatdialoger. Svarsfrekvensen ökade från tidigare 15% på LinkedIn till över 45% med Intro.
            <br />
            <br />
            Särskilt framgångsrikt var arbetet med att nå ut till personer med koppling till regionen. Av de kandidater som svarade hade över 60% någon form av tidigare koppling till Värmland, vilket gjorde rekryteringsprocessen betydligt mer effektiv.
            <br />
            <br />
            Ninetech har nu etablerat en stark kandidatpipeline och fortsätter att bygga relationer med potentiella framtida medarbetare genom Intro-plattformen.
          </p>
        </div>
      </div>

      {/* Recommendation section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Skulle du rekommendera Intro?</h2>
        <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
          "Ja det skulle jag göra. Att kontakta kandidaterna på att annat sätt än vad de är vana vid som också blir mycket personligare ger resultat. Eftersom Intro ger fler svar och möten med kandidater så verkar det som att det är kandidaternas föredragna sätt att blir kontaktade på"
          <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img 
                src="/images/avatars/elina_ninetech.jpeg" 
                alt="Elina Sandberg" 
                className="w-full h-full object-cover"
              />
            </div>
            - Elina Sandberg, Head of Recruitment & Workplace Branding, Ninetech
          </footer>
        </blockquote>
      </div>
    </div>
  )
}
