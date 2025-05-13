"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface InboxMessage {
  animationDelay?: number;
  id: string;
  name: string;
  subject: string;
  preview: string;
  sentAt: string;           // ISO 8601
  starred?: boolean;
  read?: boolean;
}

interface InboxProps {
  messages?: InboxMessage[];
  onMessageClick?: (m: InboxMessage) => void;
  className?: string;
}

export default function Inbox({
  messages: initial = [],
  onMessageClick = () => {},
  className,
}: InboxProps) {
  const [messages, setMessages] = useState<InboxMessage[]>([]);
  const timeouts = useRef<number[]>([]);
  const hasAnimated = useRef(false);
  const prefersReduced = useReducedMotion();

  // staggered entrance once
  useEffect(() => {
    // Reset messages when initial changes
    setMessages([]);
    hasAnimated.current = false;
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    // Add messages one by one with delays
    initial.forEach((msg, idx) => {
      const id = window.setTimeout(() => {
        setMessages(prev => [msg, ...prev])  // Add new message at the start of the array
      }, 1000 + (idx * 2000));
      timeouts.current.push(id);
    });

    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, [initial]);

  const variants = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : 40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: prefersReduced ? 0 : 40 },
  };

  return (
    <div
      className={cn(
        "rounded-3xl shadow-lg bg-gray-50/50 flex flex-col h-[450px] w-full p-3",
        className
      )}
    >
      {/* header */}
      <div className="px-4 py-2 mb-3 flex items-center justify-between">
        <h3 className="text-base font-medium">Inbox</h3>
        <span className="text-xs font-semibold bg-primary text-primary-foreground rounded-full px-2 py-0.5">
          {messages.filter((m) => !m.read).length} new
        </span>
      </div>

      {/* list */}
      <ul className="flex-1 overflow-y-auto" role="list">
        {messages.length === 0 ? (
          <li className="flex items-center justify-center h-full text-muted-foreground italic">
            No messages yet
          </li>
        ) : (
          <AnimatePresence initial={true}>
            {messages.map((m) => (
              <motion.li
                key={m.id}
                layout
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ 
                  type: "spring", 
                  stiffness: 80, 
                  damping: 15,
                  delay: m.animationDelay ? m.animationDelay / 1000 : 0
                }}
                role="button"
                tabIndex={0}
                onClick={() => onMessageClick(m)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onMessageClick(m);
                }}
                className="flex gap-4 px-4 py-3 border-b hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring outline-none"
              >
                {/* left controls */}
                <div className="flex flex-col items-center gap-2 pt-1">
                  <Checkbox
                    aria-label="Select message"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-pressed={m.starred}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMessages((prev) =>
                        prev.map((x) =>
                          x.id === m.id ? { ...x, starred: !x.starred } : x
                        )
                      );
                    }}
                  >
                    <Star
                      className={cn(
                        "w-4 h-4",
                        m.starred ? "fill-yellow-400 text-yellow-400" : ""
                      )}
                    />
                  </Button>
                </div>

                {/* body */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <div className="flex-1 min-w-0 flex gap-2">
                      <span className="font-medium truncate">{m.name}</span>
                      <span className="text-muted-foreground truncate">- {m.subject}</span>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {new Date(m.sentAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {m.preview}
                  </p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        )}
      </ul>
    </div>
  );
}
