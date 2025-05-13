import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Your Company",
  description: "Choose an affordable plan that's packed with the best features.",
};

const features = [
  {
    category: "Features",
    items: [
      { name: "Edge content delivery", starter: true, growth: true, scale: true },
      { name: "Custom domains", starter: "1", growth: "3", scale: "Unlimited" },
      { name: "Team members", starter: "3", growth: "20", scale: "Unlimited" },
      { name: "Single sign-on (SSO)", starter: false, growth: false, scale: true },
    ],
  },
  {
    category: "Reporting",
    items: [
      { name: "Advanced analytics", starter: true, growth: true, scale: true },
      { name: "Basic reports", starter: false, growth: true, scale: true },
      { name: "Professional reports", starter: false, growth: false, scale: true },
      { name: "Custom report builder", starter: false, growth: false, scale: true },
    ],
  },
  {
    category: "Support",
    items: [
      { name: "24/7 online support", starter: true, growth: true, scale: true },
      { name: "Quarterly workshops", starter: false, growth: true, scale: true },
      { name: "Priority phone support", starter: false, growth: false, scale: true },
      { name: "1:1 onboarding tour", starter: false, growth: false, scale: true },
    ],
  },
];

const plans = [
  {
    name: "Starter",
    price: 19,
    highlighted: false,
  },
  {
    name: "Growth",
    price: 49,
    highlighted: true,
  },
  {
    name: "Scale",
    price: 99,
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing that grows with you
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                plan.highlighted
                  ? "bg-white shadow-xl"
                  : "bg-white/60 hover:bg-white hover:shadow-lg"
              } transition-all duration-200`}
            >
              <h3 className="text-lg font-semibold leading-8 text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /month
                </span>
              </p>
              <a
                href="#"
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                }`}
              >
                Buy plan
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16">
          {features.map((section) => (
            <div key={section.category} className="mt-10 first:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                {section.category}
              </h3>
              <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
                {section.items.map((feature) => (
                  <div key={feature.name} className="border-t border-gray-100 py-4">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex items-center gap-x-2">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <svg className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )
                      ) : (
                        <span className="text-sm text-gray-900">{feature.starter}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
