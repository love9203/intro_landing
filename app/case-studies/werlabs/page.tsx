export default function WerlabsCaseStudy() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Hur Werlabs effektiviserade sin rekryteringsprocess och kunde fokusera på att intervjua kandidater istället för att leta efter dom.
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
              Frontend Developer, UX Designer, Tech Lead, Project Manager.
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
            - Effektivisera första steget i rekryteringsprocessen
            <br />
            - Få ett stort inflöde av kandidater utan att kompromissa med kvalité
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <blockquote className="mt-12 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
        "Intro är partnern för oss att växa med. Deras teknik att hitta och automatisera dialogen med kandidater ihop med Intro-teamets expertis och service gör att vi idag har en väldigt effektiv rekryteringsprocess"
        <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
            <img 
              src="/images/avatars/sara_werlabs.avif" 
              alt="Sara Stomerz" 
              className="w-full h-full object-cover"
            />
          </div>
          - Sara Stomerz, Head of People & Culture på Werlabs
        </footer>
      </blockquote>

      {/* Results section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Werlabs – Ledande inom hälsotester</h2>
        <div className="space-y-6 text-gray-600">
          <br />
          <p>
            Werlabs är Sveriges ledande företag inom hälsotester och blodanalyser. Med ett omfattande nätverk av provtagningscentraler hjälper de privatpersoner och företag att ta kontroll över sin hälsa genom moderna och tillgängliga blodanalyser.
          </p>
          <p>
            Som snabbväxande företag står Werlabs inför den ständiga utmaningen att hitta och attrahera topptalanger inom medicin och tech. Intro har pratat med Sara Stomerz som är Head of People & Culture hos Werlabs om deras upplevelse av vår tjänst.
          </p>
        </div>
      </div>

      {/* Challenge section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Utmaningen</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            "Vi är ett företag som vuxit väldigt snabbt sedan starten 2013 och vår utmaning har varit i det tidiga skedet av rekryteringsprocessen – hur får vi in bra folk i den takt vi växer?", berättar Sara.
            <br />
            <br />
            "Jag har personlig erfarenhet av manuell search och det tar väldigt mycket tid, något som jag eller våra rekryterande chefer inte har. När vi fick höra om Intro blev vi därför väldigt nyfikna."
            <br />
            <br />
            "Vi provade försiktigt med en roll till vårt Tech team för några år sedan då det är en typisk roll som generellt kräver mycket searcharbete för att hitta och komma åt guldkornen. Man har ju testat och hört om olika typer av lösningar genom åren som skulle komma och 'lösa problemet' och rekryteringsföretag som lovar men tillslut måste bryta sina löften, så var helt klart skeptiska men ändå tillräckligt nyfikna att prova."
          </p>
        </div>
      </div>

      {/* Solution section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Lösning och resultat</h2>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            Samarbetet med Intro har gett Werlabs flera viktiga fördelar:
            <br />
            <br />
            • Bara högkvalitativa kandidater skickas vidare, vilket blir en ytterligare effektivisering i processerna
            <br />
            • En partner som kan search – möjlighet att bolla olika roller och få värdefull feedback och insikter från Intro-teamet om hur man hittar de bästa kandidaterna
            <br />
            • Effektiviteten, tekniken, automationen, tidsbesparing och förståelsen & kunskapen från Intro-teamet
            <br />
            • Snabbt, hög träffsäkerhet och kvalité på kandidater
          </p>
        </div>
        <div className="space-y-6 text-gray-600 mt-4">
          <p>
            På frågan om Sara skulle rekommendera Intro till andra är svaret tydligt:
            <br />
            <br />
            "Absolut! Det skulle jag göra, det har jag redan gjort flertalet gånger till vänner och kollegor i branschen. Smidigt, bra stöd, bra kompetens – kvalité!"
            <br />
            <br />
            Detta resulterade i kortare rekryteringstider och bättre matchning mellan kandidater och roller.
          </p>
        </div>
      </div>

      {/* Recommendation section */}
      <div className="mt-16">
        <blockquote className="mt-6 border-l-4 border-indigo-600 pl-6 italic text-gray-700">
          "Intro är partnern för oss att växa med. Deras teknik att hitta och automatisera dialogen med kandidater ihop med Intro-teamets expertis och service gör att vi idag har en väldigt effektiv rekryteringsprocess"
          <footer className="mt-4 text-sm text-gray-500 flex items-center gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
            <img 
              src="/images/avatars/sara_werlabs.avif" 
              alt="Sara Stomerz" 
              className="w-full h-full object-cover"
            />
          </div>
          - Sara Stomerz, Head of People & Culture på Werlabs
        </footer>
        </blockquote>
      </div>
    </div>
  )
}
