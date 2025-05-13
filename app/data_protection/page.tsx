import React from 'react';
import Link from 'next/link';

export default function DataProtectionPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Uppsökande rekrytering och GDPR</h1>
      
      <p className="text-lg mb-8">
        Världen har börjat ta integritet på nätet på allvar, med GDPR som ledande kraft. 
        Här är vad vi vet om GDPR och uppsökande rekrytering.
      </p>

      <p className="mb-8">
        Vi har samlat omfattande juridisk rådgivning om GDPR och rekrytering under de senaste åren. 
        Men Intro är inte ett advokatbyrå och detta är inte juridisk rådgivning. Vi delar bara våra 
        insikter för att bättre förstå hur GDPR relaterar till uppsökande rekrytering.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Definitioner</h2>
        <p className="mb-4">Det finns tre nyckelbegrepp inom GDPR.</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Den registrerade</h3>
            <p>
              Registrerade är kandidater som kan identifieras genom deras personuppgifter. 
              'Personuppgifter' har en bred definition och inkluderar namn, adress, titlar 
              samt kulturell och genetisk information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Data controller</h3>
            <p>
              Den personuppgiftsansvarige är den enhet som bestämmer syftet och medlen för 
              databehandlingen. Vanligtvis är arbetsgivaren den som bestämmer varför och hur 
              de behandlar kandidaternas personliga information. Du förblir controller även om 
              du använder en extern tjänst som Intro eller en rekryteringsbyrå.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Data processor</h3>
            <p>
              En processor är en enhet som behandlar data efter instruktioner från den 
              registeransvarige. En styrenhet kan ha flera processorer. Om du använder Intro 
              för att hitta och nå ut till kandidater är Intro din processor.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Gäller GDPR för oss?</h2>
          <p>GDPR gäller alla organisationer (även utanför EU) som behandlar personuppgifter om EU-medborgare.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Vad kan hända om vi inte följer GDPR?</h2>
          <p>
            Tillsynsmyndigheten kan sanktionera varningar, påminnelser och korrigerande order 
            samt böter upp till 20 miljoner euro (eller upp till 4% av din årliga globala omsättning).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Är det lagligt för min organisation att hitta och nå ut till kandidater?</h2>
          <p>
            När du hittar och kontaktar passiva kandidater bearbetar du personuppgifter. 
            För att göra detta lagligt måste du följa kraven i GDPR.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Rättslig grund</h2>
          <p>
            Om din organisation anställer och de uppgifter du bearbetar är för <a href="https://gdpr-info.eu/art-5-gdpr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">specifika, uttryckliga och legitima ändamål</a> följer du GDPR. Eftersom rekrytering anses vara 
            ett legitimt intresse behöver du inte uttryckligt samtycke - så länge du följer 
            kraven nedan. Observera att detta endast gäller för professionell, icke-känslig 
            information. Om du vill behandla genetisk, religiös eller annan känslig information 
            behöver du uttryckligt samtycke.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Underrättelse</h2>
          <p>
            Enligt GDPR-reglerna måste du skicka e-post till kandidater "inom rimlig tid efter 
            att ha fått personuppgifterna, men senast inom en månad" för att meddela dem att du 
            behandlar deras information och detaljerna i behandlingen.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Transparens</h2>
          <p>
            När du meddelar kandidaten att du behandlar deras uppgifter måste du inkludera den 
            information som krävs enligt <a href="https://gdpr-info.eu/art-14-gdpr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">artikel 14</a> i GDPR, såsom syftet med behandlingen, vilken 
            information du behandlar, källorna, hur och hur länge du lagra uppgifterna samt 
            informera den registrerade om deras rättigheter enligt GDPR.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Kontrollera</h2>
          <p>
            Kandidaterna måste ha rätt att få tillgång till, korrigera och begära att de 
            uppgifter du bearbetar raderas.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Låter det komplicerat?</h2>
          <p>
            Goda nyheter. Intro hjälper dig att följa GDPR. Bläddra ner för att lära dig mer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Följer vi GDPR om vi använder Intro?</h2>
          <p>
            Ja, vår produkt är utformad för att hjälpa dig att följa kraven ovan. Vi inkluderar 
            till exempel ett integritetsmeddelande vid första kontakten med kandidaten och 
            meddelar dem på ett transparent sätt om behandlingen. Vi ger dem också en chans att 
            kontrollera de bearbetade uppgifterna. Läs mer om vår inställning till kandidater <Link href="/opt_out" className="text-blue-600 hover:underline">här</Link>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Som processor, hur följer Intro GDPR?</h2>
          <p>
            Intros övergång från att vara en sökmotor till en automatiserad tjänst utformades 
            med GDPR i åtanke. Precis som en rekryteringsbyrå behandlar vi endast kandidatuppgifter 
            på begäran från våra kunder. <Link href="/opt_out" className="text-blue-600 hover:underline">Läs mer om hur vi söker kandidater</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
