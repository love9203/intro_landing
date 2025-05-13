"use client"

import * as React from "react"
import { UseCaseCard, type UseCaseTier } from "@/components/ui/use-case-card"

interface UseCaseSectionProps {
  title: string
  subtitle: string
  tiers: UseCaseTier[]
}

export function UseCaseSection({
  title,
  subtitle,
  tiers,
}: UseCaseSectionProps) {
  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-medium md:text-5xl">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <UseCaseCard
            key={tier.name}
            tier={tier}
            paymentFrequency="monthly"
          />
        ))}
      </div>
    </section>
  )
}
