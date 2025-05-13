'use client';

import { CheckIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';

type Feature = boolean | string;

type Features = {
  [key: string]: Feature;
};

type Plan = {
  name: string;
  price: string;
  features: Features;
  isPopular: boolean;
};

const PricingSection = () => {
  useEffect(() => {
    // Initialize AOS if available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  const plans: Plan[] = [
    {
      name: 'Light',
      price: 'Kontakta oss',
      features: {
        'Roller': '1-3',
        'Kandidatkontakter/månad': '50',
        'Annonsplatser': '1',
        'Kartläggningar/månad': '1',
        'Rådgivning': true,
        'Hyperriktad annonsering': true,
        'Outreach-plattform (e-post)': true,
        'Normal användare': '1',
        'Dedikerad Customer Success': false,
        'Outreach via LinkedIn': false,
        'Telefonnummer': false,
        'Översiktsanvändare': false
      },
      isPopular: false,
    },
    {
      name: 'Standard',
      price: 'Kontakta oss',
      features: {
        'Roller': '4-10',
        'Kandidatkontakter/månad': 'Obegränsat',
        'Annonsplatser': '2',
        'Kartläggningar/månad': 'Obegränsat',
        'Rådgivning': true,
        'Hyperriktad annonsering': true,
        'Outreach-plattform (e-post)': true,
        'Normal användare': '1',
        'Dedikerad Customer Success': true,
        'Outreach via LinkedIn': true,
        'Telefonnummer': true,
        'Översiktsanvändare': 'Obegränsat'
      },
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Kontakta oss',
      features: {
        'Roller': '10+',
        'Kandidatkontakter/månad': 'Obegränsat',
        'Annonsplatser': 'Obegränsat',
        'Kartläggningar/månad': 'Obegränsat',
        'Rådgivning': true,
        'Hyperriktad annonsering': true,
        'Outreach-plattform (e-post)': true,
        'Normal användare': 'Anpassningsbart',
        'Dedikerad Customer Success': true,
        'Outreach via LinkedIn': true,
        'Telefonnummer': true,
        'Översiktsanvändare': 'Obegränsat'
      },
      isPopular: false,
    },
  ];

  const features = [
    'Roller',
    'Kandidatkontakter/månad',
    'Annonsplatser',
    'Kartläggningar/månad',
    'Rådgivning',
    'Hyperriktad annonsering',
    'Outreach-plattform (e-post)',
    'Normal användare',
    'Dedikerad Customer Success',
    'Outreach via LinkedIn',
    'Telefonnummer',
    'Översiktsanvändare'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 pb-24">
      <div className="text-center" data-aos="fade-up">
        <Badge variant="outline" className="mb-2">Priser</Badge>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Välj den perfekta planen för dina behov
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Vi erbjuder flexibla lösningar som växer med ditt företag
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
        {plans.map((plan, planIndex) => (
          <div
            key={plan.name}
            className="rounded-2xl bg-white dark:bg-gray-900 p-8 md:p-10 transition shadow-sm hover:shadow-md"
            aria-label={plan.isPopular ? 'Most popular plan' : undefined}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{plan.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {plan.name === 'Light' && 'För dig som bara gör ett fåtal rekryteringar per år och vill ha en smidig, kostnadseffektiv lösning.'}
              {plan.name === 'Standard' && 'Passar organisationer som löpande behöver tillsätta flera olika roller under året och vill ha full flexibilitet.'}
              {plan.name === 'Enterprise' && 'En helt anpassad lösning med obegränsat antal användare och roller – skräddarsydd efter din verksamhets unika behov.'}
            </p>
            <button
              className="mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Kontakta oss
            </button>

            <table className="mt-8 w-full">
              <thead className="sr-only">
                <tr>
                  <th>Feature</th>
                  <th>Included</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <div className="space-y-4">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm leading-6">
                          <div className="flex-grow text-gray-600 dark:text-gray-300">
                            {feature}
                            {feature === 'Normal användare' && (
                              <div className="relative inline-block ml-1 group">
                                <InformationCircleIcon className="h-4 w-4 text-gray-400 inline-block hover:text-gray-500 transition-colors" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 text-xs text-center text-white bg-gray-900 rounded-lg shadow-lg z-10">
                                  Användare med full åtkomst till alla funktioner
                                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="ml-4 flex justify-center items-center">
                            {plan.features[feature] === true ? (
                              <CheckIcon className="h-5 w-5 text-indigo-600" />
                            ) : plan.features[feature] === false ? (
                              <span className="text-gray-400">&mdash;</span>
                            ) : (
                              <span className="text-gray-900 dark:text-gray-100">{plan.features[feature]}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
