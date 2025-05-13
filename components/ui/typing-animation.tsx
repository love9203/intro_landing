"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingAnimationProps {
  className?: string
}

export function TypingAnimation({ className }: TypingAnimationProps) {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  const fullText1 = 'Java Developer'
  const fullText2 = 'Stockholm'
  const fullText3 = '4+ years experience'

  useEffect(() => {
    let currentIndex1 = 0
    let currentIndex2 = 0
    let currentIndex3 = 0
    let timeout1: NodeJS.Timeout
    let timeout2: NodeJS.Timeout
    let timeout3: NodeJS.Timeout

    const typeText1 = () => {
      if (currentIndex1 < fullText1.length) {
        setText1(prev => prev + fullText1[currentIndex1])
        currentIndex1++
        timeout1 = setTimeout(typeText1, 100)
      } else {
        setTimeout(startText2, 500)
      }
    }

    const startText2 = () => {
      if (currentIndex2 < fullText2.length) {
        setText2(prev => prev + fullText2[currentIndex2])
        currentIndex2++
        timeout2 = setTimeout(startText2, 100)
      } else {
        setTimeout(startText3, 500)
      }
    }

    const startText3 = () => {
      if (currentIndex3 < fullText3.length) {
        setText3(prev => prev + fullText3[currentIndex3])
        currentIndex3++
        timeout3 = setTimeout(startText3, 100)
      }
    }

    // Start cursor blinking
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)

    // Start the first text
    timeout1 = setTimeout(typeText1, 500)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className={`${className} flex items-center justify-end w-full h-full`}>
      <div className="space-y-6 pr-12">
        <div className="flex items-center space-x-4">
          <div className="w-1 h-6 bg-blue-500"></div>
          <div className="font-mono text-base text-muted-foreground">
            {text1}
            <span className={`${cursorVisible && text1.length < fullText1.length ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ml-[1px]`}>|</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-1 h-6 bg-blue-500"></div>
          <div className="font-mono text-base text-muted-foreground">
            {text2}
            <span className={`${cursorVisible && text1.length === fullText1.length && text2.length < fullText2.length ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ml-[1px]`}>|</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-1 h-6 bg-blue-500"></div>
          <div className="font-mono text-base text-muted-foreground">
            {text3}
            <span className={`${cursorVisible && text1.length === fullText1.length && text2.length === fullText2.length && text3.length < fullText3.length ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ml-[1px]`}>|</span>
          </div>
        </div>
      </div>
    </div>
  )
}
