import { Metadata } from "next";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudyContent } from "@/components/case-study/case-study-content";
import { CaseStudyQuote } from "@/components/case-study/case-study-quote";
import { CaseStudyResults } from "@/components/case-study/case-study-results";

export const metadata: Metadata = {
  title: "byBrick Case Study | How Intro Improved Their Tech Recruitment",
  description: "Discover how byBrick achieved better candidate matching and response rates compared to LinkedIn using Intro's recruitment platform",
};

export default function ByBrickCaseStudy() {
  return (
    <article className="container mx-auto px-4 py-12">
      <CaseStudyHeader 
        company="byBrick"
        title="How byBrick Improved Their Tech Recruitment Success Rate with Intro"
        description="A rapidly growing group of technical specialist companies finds better candidates and higher response rates through Intro's platform"
        logo="/logos/bybrick.svg"
      />

      <CaseStudyContent>
        <h2>About byBrick</h2>
        <p>
          byBrick is a dynamic consortium of five specialized technical companies, each bringing unique expertise to help clients optimize their development and business operations. Their diverse portfolio demands a precise and efficient recruitment process to maintain their high standards of technical excellence.
        </p>

        <h2>The Challenge</h2>
        <p>
          As a Group Recruitment Manager, Tobias Carlsson faced two primary challenges in his recruitment efforts:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Finding candidates who precisely matched their specific technical requirements</li>
          <li>Achieving better response rates from qualified candidates</li>
        </ul>

        <CaseStudyQuote
          quote="I've used LinkedIn Recruiter for years, and LinkedIn has always struggled with precise matching. When searching for a specific role, you quickly end up with mismatches in their search tool."
          author="Tobias Carlsson"
          role="Group Recruitment Manager"
        />

        <h2>The Solution</h2>
        <p>
          byBrick implemented Intro alongside their existing LinkedIn Recruiter to compare results. This parallel testing approach allowed them to:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Evaluate the quality of candidate matches</li>
          <li>Compare response rates between platforms</li>
          <li>Assess the overall quality of candidate interactions</li>
        </ul>

        <CaseStudyResults
          results={[
            "Higher accuracy in finding candidates matching specific criteria",
            "Increased response rates compared to LinkedIn",
            "Higher quality first interviews with candidates",
            "Improved candidate engagement through smart email sequences",
            "Better project tracking with comprehensive statistics"
          ]}
        />

        <h2>Expert Support</h2>
        <p>
          Beyond the platform's technical capabilities, byBrick found significant value in Intro's personalized support system. Unlike traditional platforms offering only web courses, Intro provides direct access to search experts who help optimize search strategies and message content.
        </p>

        <CaseStudyQuote
          quote="Intro is better than LinkedIn and has the potential to develop the product further. But I also recommend the Intro team - you won't find better support and search expertise anywhere else."
          author="Tobias Carlsson"
          role="Group Recruitment Manager"
        />
      </CaseStudyContent>
    </article>
  );
}
