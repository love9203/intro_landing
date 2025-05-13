"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Platform {
  imagePath: string;
  label: string;
  width?: number;
  height?: number;
}

interface AudienceMappingAnimationProps {
  loop?: boolean;
  onComplete?: () => void;
}

const platforms: Platform[] = [
  { imagePath: "/images/logos/linkedin.webp", label: "LinkedIn", width: 48, height: 48 },
  { imagePath: "/images/logos/github.svg", label: "GitHub", width: 48, height: 48 },
  { imagePath: "/images/logos/stackoverflow.png", label: "StackOverflow", width: 48, height: 48 },
  { imagePath: "/images/logos/ycombinator.png", label: "Y Combinator", width: 48, height: 48 },
  { imagePath: "/images/logos/quora.png", label: "Quora", width: 48, height: 48 },
  { imagePath: "/images/logos/angellist.png", label: "AngelList", width: 48, height: 48 },
  { imagePath: "/images/logos/x.png", label: "X", width: 48, height: 48 },
  { imagePath: "/images/logos/meetup.png", label: "Meetup", width: 48, height: 48 },
  { imagePath: "/images/logos/reddit.png", label: "Reddit", width: 48, height: 48 },
];

const ICON_SIZE = 40;
const PLATFORM_SIZE = 100;

export function AudienceMappingAnimation({
  loop = false,
  onComplete,
}: AudienceMappingAnimationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalIcons = platforms.length;
  const highlightDuration = 600; // ms per icon

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const next = current + 1;
        if (next >= totalIcons) {
          if (loop) {
            return 0;
          } else {
            clearInterval(interval);
            onComplete?.();
            return current;
          }
        }
        return next;
      });
    }, highlightDuration);

    return () => clearInterval(interval);
  }, [loop, totalIcons, onComplete]);

  const progress = ((activeIndex + 1) / totalIcons) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto p-12 bg-white rounded-2xl border border-[#eff3f4] shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-16"
      >
        <h2 className="text-5xl font-bold text-center text-gray-900">
          Intro kartlägger din målgrupp
        </h2>

        <div className="grid grid-cols-3 gap-x-32 gap-y-16 justify-items-center">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              animate={{
                scale: activeIndex === index ? 1.1 : 1,
              }}
            >
              <motion.div
                className={`relative rounded-full bg-gray-50 w-[${PLATFORM_SIZE}px] h-[${PLATFORM_SIZE}px] flex items-center justify-center`}
                animate={{
                  boxShadow:
                    activeIndex === index
                      ? "0 0 30px 5px rgba(76, 175, 80, 0.4)"
                      : "none",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={platform.imagePath}
                  alt={platform.label}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  className="object-contain p-2"
                />
              </motion.div>
              <span className="mt-4 text-base font-medium text-gray-600">{platform.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#4CAF50]"
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: highlightDuration / 1000,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
