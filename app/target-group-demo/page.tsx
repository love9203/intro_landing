'use client'

import { TargetGroupMapping } from "@/components/ui/target-group-mapping"

export default function TargetGroupDemo() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Target Group Mapping Demo</h1>
          <p className="text-muted-foreground text-lg">
            A visual representation of our data source integration
          </p>
        </div>

        <TargetGroupMapping />
      </div>
    </div>
  )
}
