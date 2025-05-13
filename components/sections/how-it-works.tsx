"use client"

import { FeatureSteps } from "../ui/feature-steps";
import { AnimatedSearchForm } from "@/components/ui/AnimatedSearchForm"
import { TargetGroupMapping } from "@/components/ui/target-group-mapping"
import Inbox from "@/components/ui/inbox"

const mockInboxData = [
  {
    id: "1",
    name: "Alice Smith",
    subject: ".NET Fullstack",
    preview: "It sounds interesting as I will probably in my next role try to find my way back more towards full stack...",
    sentAt: "2025-05-07T15:15:00+02:00",
    starred: false,
    read: false,
  },
  {
    id: "2",
    name: "Bob Johnson",
    subject: "Accountant Role",
    preview: "Hello! Nice to hear from you! That does sound interesting indeed! We can book a call if you want.",
    sentAt: "2025-05-07T15:19:00+02:00",
    read: false,
  },
  {
    id: "3",
    name: "Sarah Chen",
    subject: "Backend Lead",
    preview: "I will be going on parental leave on Thursday, for the next 12 months, so it is not something that is...",
    sentAt: "2025-05-07T15:23:00+02:00",
    starred: false,
    read: false,
  },
  {
    id: "4",
    name: "David Park",
    subject: "Devops",
    preview: "Hi! Thank you for your email! Sounds intriguing. I would like to hear a little more about you and how...",
    sentAt: "2025-05-07T15:27:00+02:00",
    read: false,
  },
  {
    id: "5",
    name: "Glenn Ross",
    subject: "Re: Full Stack Role?",
    preview: "Hi, that sounds great! Let's do a video meeting, I'm available: - Monday, February 12 at 3 pm, alt. -...",
    sentAt: "2025-05-07T15:31:00+02:00",
    read: false,
  },
]

const features = [
  { 
    step: 'Step 1', 
    title: 'Ange dina sökkriterier',
    content: 'Ladda upp eller länka din jobbannons, alternativt mata in dina krav i Intro.', 
    customContent: (
      <div className="absolute inset-0 bg-background flex items-center justify-center py-10 sm:py-12 px-3 sm:px-4">
        <div className="w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]">
          <AnimatedSearchForm />
        </div>
      </div>
    )
  },
  { 
    step: 'Step 2',
    title: 'Intro kartlägger din kandidatpool',
    content: 'Vi aggreggerar data från 20+ relevanta källor. Vi hittar även dolda kandidater.',
    customContent: (
      <div className="absolute inset-0 bg-background flex items-center justify-center py-10 sm:py-12 px-3 sm:px-4">
        <div className="w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]">
          <TargetGroupMapping />
        </div>
      </div>
    )
  },
  { 
    step: 'Step 3',
    title: 'Annonsering & riktad outreach',
    content: 'Din kartlagda målgrupp bearbetas på ett strukturerat sätt genom annonsering i sociala medier och genom email-kampanjer till deras personliga email.',
    customContent: (
      <div className="absolute inset-0 bg-background flex items-center justify-center py-10 sm:py-12 px-3 sm:px-4">
        <div className="w-[84%]">
          <img src="/images/platform_images/steg3.png" alt="Step 3" className="w-full h-auto" />
        </div>
      </div>
    )
  },
  { 
    step: 'Step 4',
    title: 'Svaren direkt till din inbox',
    content: 'Kandidater som är intresserade av din roll kommer direkt till din inbox.',
    customContent: (
      <div className="absolute inset-0 bg-background flex items-center justify-center py-10 sm:py-12 px-3 sm:px-4">
        <div className="w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]">
          <Inbox messages={mockInboxData} />
        </div>
      </div>
    )
  },
]

export function HowItWorks() {
  return (
    <FeatureSteps 
      features={features}
      title="Talent Acquisition med Intro"
      imageHeight="h-[500px]"
    />
  )
}
