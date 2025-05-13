import { ReactNode } from 'react'

interface CaseStudyLayoutProps {
  children: ReactNode
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header section with consistent styling */}
      <header className="pt-12 pb-0 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <a href="/case-studies" className="text-sm text-indigo-600 hover:text-indigo-800">
              ← Back to Case Studies
            </a>
          </nav>
        </div>
      </header>

      {/* Main content area */}
      <main className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-indigo max-w-none">
            {children}
          </article>
        </div>
      </main>

    </div>
  )
}
