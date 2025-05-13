'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

interface AnimatedSearchFormProps {
  triggerAnimation?: boolean;
}

const placeholders = [
  'Title',
  'Location',
  'Years of experience',
  'Background',
  'Skills',
];

const searchFields = [
  'Java Developer',
  'Stockholm',
  '4+ years experience',
  'Consultancy Experience',
  'Springboot, AWS',
];

const CHAR_TYPING_SPEED = 50; // ms per character

const AnimatedInput: FC<{
  placeholder: string;
  text: string;
  delay: number;
}> = ({ placeholder, text, delay }) => {
  const [displayText, setDisplayText] = useState(placeholder);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) return;

    const timeout = setTimeout(() => {
      setIsTyping(true);
      const animate = async () => {
        setDisplayText(''); // Clear the text first
        for (let i = 0; i <= text.length; i++) {
          setDisplayText(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, CHAR_TYPING_SPEED));
        }
      };
      animate();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className="relative">
      <Input
        readOnly
        value={displayText}
        className={`h-10 sm:h-11 text-sm sm:text-base transition-colors ${isTyping ? 'text-foreground' : 'text-muted-foreground/60'}`}
      />
    </div>
  );
};

export const AnimatedSearchForm: FC<AnimatedSearchFormProps> = ({
  triggerAnimation = true,
}) => {
  const buttonControls = useAnimationControls();

  useEffect(() => {
    if (triggerAnimation) {
      const timeout = setTimeout(() => {
        buttonControls.start({ scale: [1, 0.95, 1] });
      }, searchFields.length * (1500 + CHAR_TYPING_SPEED * 20) + 1000);
      return () => clearTimeout(timeout);
    }
  }, [triggerAnimation, buttonControls]);

  return (
    <div className="w-full max-w-md mx-auto px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-[#eff3f4] shadow-[0_1px_3px_rgba(0,0,0,0.1)] py-5 sm:py-6 px-4 sm:px-5"
      >
        <div className="space-y-3 sm:space-y-4 mb-2">
          {searchFields.map((text, index) => (
            <AnimatedInput
              key={index}
              placeholder={placeholders[index]}
              text={text}
              delay={index * (1500 + CHAR_TYPING_SPEED * 20) + 500}
            />
          ))}
        </div>
        <motion.button
          animate={buttonControls}
          className="mt-5 sm:mt-6 w-full bg-[#307df6] text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-md hover:bg-[#2563eb] transition-colors text-sm sm:text-base font-medium"
        >
          Submit
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AnimatedSearchForm;
