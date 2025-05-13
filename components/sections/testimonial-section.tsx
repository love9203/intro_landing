import { Testimonials } from "../ui/testimonials";

const testimonials = [
  {
    image: '/images/avatars/simon_lindgren_werlabs.webp',
    text: 'Den mest utmanande delen är ofta det inledande skedet av rekryteringsprocessen, och det är där Intro levererar. Deras lösning överträffar manuell sourcing, är mer kostnadseffektiv och resulterar i en märkbart högre kvalitet på kandidaterna. Intros tillvägagångssätt gör det möjligt för oss att attrahera dem genuint intresserad, vilket gör det lättare att sälja Werlabs som arbetsgivare.',
    name: 'Simon Lindgren',
    username: 'CTO, Werlabs'
  },
  {
    image: '/images/avatars/emelie_telander_futureordering.jpeg',
    text: 'Tillsammans med Intro kan vi fokusera på intervjuerna under rekryteringsprocessen. Användningen av deras plattform hjälper oss att automatisera de första stegen av rekryteringsprocessen, med målet att nå talanger. Intro erbjuder det vi letar efter, ett lyft för vår rekrytering som verkligen fungerar och ständigt hjälper oss att nå utvecklare inom sociala medier, med hjälp av deras sökmotor.',
    name: 'Emelie Telander',
    username: 'CMO & HR, Future Ordering'
  },
  {
    image: '/images/avatars/linda_sse.jpg',
    text: 'Att kontakten görs via mail gör det mer effektivt när det gäller att sticka ut och få svar från eftertraktade kandidater. Dessutom är det praktiskt att ha allt samlat i ett system. Superbra kontaktperson (Viktor), han har varit fantastisk. Han har hört av sig till mig och haft koll på hur det gått för oss, vilket har varit jätteuppskattat. Han kom med feedback på hur mailen ser ut och följde upp. Han har varit en klippa att ha med.',
    name: 'Linda Ackered',
    username: 'HR Business Partner, Handelshögskolan i Stockholm'
  },
  {
    image: '/images/avatars/marcus_limetta.jpeg',
    text: 'Great company to work with. Knowledgeable and professional. We have been working with them for over 2 years and they constantly deliver more than expected.',
    name: 'Marcus Johnson',
    username: 'CEO, Limetta'
  },
  {
    image: '/images/avatars/sofie_stretch.jpeg',
    text: 'We have worked with Intro more than a year now and our network of candidates has expanded enormously, with little effort from me as a sourcing recruiter. Whatever help we have needed from Intro (setting up strategies, adjusting searches, drafting contact letters etc.) they have always given us quick and professional help.',
    name: 'Sofie Havgård',
    username: 'Talent Manager & IT Consultant, Stretch'
  },
  {
    image: '/images/avatars/tobias-bybrick.jpeg',
    text: 'Intro ger mig mycket bättre hitrate på rätt kandidater samt att jag får fler svar än vad jag får på LinkedIn. Det har dessutom varit mycket bättre första intervjuer med kandidater som har kommit fram via Intro',
    name: 'Tobias Carlsson',
    username: 'Group Recruitment Manager, byBrick'
  },
  {
    image: '/images/avatars/emelie_strategic9.jpeg',
    text: 'We have been using Intro.io successfully, and it has truly been a game-changer. The platform makes the search process incredibly smooth and consistently helps us find top candidates. But what really sets it apart is the support from the entire team - especially Simon, who is an incredible sparring partner, always available with sharp insights and valuable advice. It feels less like using a tool and more like having a trusted expert by our side. Highly recommend!',
    name: 'Emelie Wilander',
    username: 'Business Developer, Strategic 9'
  },
  {
    image: '/images/avatars/zeraldin_ostgotatrafiken.jpeg',
    text: 'Intro ger mig väldigt mycket att göra, vilket är det jag vill i en rekryteringsprocess. Jag har alltför många gånger upplevt det motsatta att vi inte har tillräckligt med bra kandidater i process. Nu kan jag välja och vraka bland kvalitativa kandidater.',
    name: 'Zeraldin Hajdarevic',
    username: 'Tech & IT-Infrastr. Östgötatrafiken'
  },
  {
    image: '/images/avatars/peter_extrapreneur.jpeg',
    text: 'We have used Intro for many years, sometimes with a pause as our recruitment needs and way of working has changed. It has been interesting to follow them as a customer during the years, experiencing their service develop and adapt to evolving market conditions and technical landscape. What has been consistent during the years is the flexible and supportive approach their sales and customer success reps have. But most important is talking about actual results, and as current users it is the best tool/service we used in this area (and to be honest we tried a lot).',
    name: 'Peter Thörn',
    username: 'Founder & CEO, Extrapreneur'
  }
];

export function TestimonialSection() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16">
      <Testimonials testimonials={testimonials} />
    </div>
  )
}
