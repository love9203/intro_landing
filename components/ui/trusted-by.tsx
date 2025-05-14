import React from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

interface TrustedByProps {
  className?: string;
}

export function TrustedBy({ className }: TrustedByProps) {
  const avatars = [
    'images/avatars/elina_ninetech.jpeg',
    'images/avatars/emelie_strategic9.jpeg',
    'images/avatars/emelie_telander_futureordering.jpeg',
    'images/avatars/linda_sse.jpg',
    'images/avatars/marcus_limetta.jpeg',
    'images/avatars/peter_extrapreneur.jpeg',
    'images/avatars/simon_lindgren_werlabs.webp',
    'images/avatars/sofie_stretch.jpeg',
    'images/avatars/tobias-bybrick.jpeg',
    'images/avatars/zeraldin_ostgotatrafiken.jpeg'
  ];

  const trustpilotRating = {
    logo: 'images/platform_images/Trustpilot_logo.png',
    rating: '4.2',
    stars: 4.2
  };

  return (
    <div className={cn("w-full px-4 pt-8 pb-16", className)}>
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm text-gray-600 mb-6">
        Skapat för konsultchefer med mycket på sitt bord
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-8">
          {/* Avatars */}
          <div className="flex -space-x-4">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden hover:-translate-y-1 transition-transform duration-200"
              >
                <Image
                  src={avatar}
                  alt={`Trusted user ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-200 hidden md:block" />

          {/* Trustpilot Rating */}
          <a 
            href="https://www.trustpilot.com/review/intro.io?date=last12months&languages=all" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 text-[#333333] no-underline min-h-[33px]"
          >
            <div className="relative flex items-center">
              <Image 
                src={trustpilotRating.logo} 
                alt="Trustpilot" 
                width={92} 
                height={38} 
                className="h-[33px] w-auto object-contain"
              />
            </div>

            <div 
              className="flex items-center gap-[9px]" 
              style={{ fontFamily: '-apple-system, system-ui, "Segoe UI", sans-serif' }}
            >
              <div className="flex items-center translate-y-[1px]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-[21px] h-[21px] ${
                      i < Math.floor(trustpilotRating.stars) 
                        ? 'text-[#00B67A]' 
                        : 'text-[#00B67A] opacity-30'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <span 
                className="text-[14px] leading-none text-[#333333]" 
                style={{ fontFamily: '-apple-system, system-ui, "Segoe UI", sans-serif' }}
              >
                {trustpilotRating.rating} rating
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
