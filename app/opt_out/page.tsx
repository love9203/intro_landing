import React from 'react';

export default function OptOut() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Candidates own their own data</h1>
      
      <p className="text-gray-600 mb-8">
        We only process voluntarily submitted professional information on request from our customers. Here are our 10 principles for usage of candidate information.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">1.) Recruitment purposes only</h2>
          <p className="text-gray-600">We only help our customers for the purpose of finding or hiring candidates for full-time, part-time or freelance positions.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2.) Relevant offers</h2>
          <p className="text-gray-600">We do our best to present candidates with opportunities that match their skillset and interests from relevant people within the company. Candidates that are completely off the market can always <a href="https://app.intro.io/opt-out" className="text-blue-600 hover:underline">opt-out</a>.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3.) Keep it professional</h2>
          <p className="text-gray-600">We avoid processing political, religious and all other sorts of sensitive information. Your professional skills and experience is all that matters to us.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4.) Voluntary information</h2>
          <p className="text-gray-600">We never track candidates – we only use information candidates have voluntarily submitted to the open web.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5.) Always on-demand</h2>
          <p className="text-gray-600">We don't process data about candidates until we get a request from one of our customers.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6.) Minimal storage time</h2>
          <p className="text-gray-600">We keep as little data as possible, for as short time as possible.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7.) Candidate notification</h2>
          <p className="text-gray-600">We let candidates know that we've used their data before or by the time they're contacted by our customers.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8.) Full transparency</h2>
          <p className="text-gray-600">If candidates are curious about what data we've used, they can <a href="https://search.intro.io/request-access" className="text-blue-600 hover:underline">request access</a> to it.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9.) Candidates are in control</h2>
          <p className="text-gray-600">We always allow candidates to <a href="https://app.intro.io/opt-out" className="text-blue-600 hover:underline">request removal</a> of the information we've used.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10.) Regulatory compliance</h2>
          <p className="text-gray-600">The world is starting to take privacy seriously, with the GDPR leading the way. Intro is compliant and committed to adopting further regulation in this space. <a href="/data_protection" className="text-blue-600 hover:underline">Read our guide on GDPR for sourcing</a>.</p>
        </div>
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Opt-out</h2>
        <p className="text-gray-600 mb-6">
          If you want to permanently erase any collected data and make sure to never be contacted again, enter your email address on <a href="https://app.intro.io/opt-out" className="text-blue-600 hover:underline">this page</a>.
        </p>
      </div>
    </div>
  );
}
