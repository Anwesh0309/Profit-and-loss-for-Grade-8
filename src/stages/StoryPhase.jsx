import React, { useState, useEffect, useRef } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { narrate, stopNarration } from '../utils/audio.js';
import { getStoryNarration } from '../utils/narration.js';
import { STORY } from '../utils/lessonScript.js';

const STORY_META = [
  { title: "Cost Price & Selling Price", quote: "CP = what you paid · SP = what you sell for", bubble: "SP higher → profit!" },
  { title: "Profit & Loss", quote: "Profit = SP − CP · Loss = CP − SP", bubble: "$40 → $50 is a $10 profit!" },
  { title: "Profit Percentage", quote: "Profit % = profit ÷ CP × 100", bubble: "Always use the COST price!" },
  { title: "Using Multipliers", quote: "25% profit → × 1.25 · 10% loss → × 0.9", bubble: "Divide to work backwards!" },
  { title: "Marked Price & Discount", quote: "$150 − 20% = $120", bubble: "Discount on marked price, profit on cost!" },
  { title: "Breaking Even", quote: "$40 ÷ $0.80 = 50 cups", bubble: "Every extra cup is profit!" },
  { title: "Leo's Bikes Solved", quote: "Paid $250 · Got $240 → $10 loss", bubble: "20% of different amounts!" },
  { title: "Step Into the Simulation Lab!", quote: "Ready to become a Business Boss?", bubble: "Click below to enter the interactive lab!" }
];

// Body text comes from lessonScript.js so the narration matches it word-for-word
const STORY_SLIDES = STORY_META.map((m, i) => ({
  id: i + 1,
  image: `/assets/images/slide${i + 1}.png`,
  body: STORY[i].body,
  ...m
}));

export function StoryPhase({ muted, onDone, onSlideChange }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = STORY_SLIDES[slideIdx];

  const onSlideChangeRef = useRef(onSlideChange);
  useEffect(() => {
    onSlideChangeRef.current = onSlideChange;
  }, [onSlideChange]);

  // Notify parent of slide change (without triggering narration resets)
  useEffect(() => {
    if (onSlideChangeRef.current) {
      onSlideChangeRef.current(slideIdx + 1, STORY_SLIDES.length);
    }
  }, [slideIdx]);

  // Audio narration for the active slide
  useEffect(() => {
    narrate(getStoryNarration(slideIdx), !muted);
    return () => stopNarration();
  }, [slideIdx, muted]);

  const handleReplay = () => {
    stopNarration();
    narrate(getStoryNarration(slideIdx), !muted);
  };

  const goNext = () => {
    stopNarration();
    if (slideIdx < STORY_SLIDES.length - 1) {
      setSlideIdx(i => i + 1);
    } else {
      onDone();
    }
  };

  const goPrev = () => {
    stopNarration();
    if (slideIdx > 0) setSlideIdx(i => i - 1);
  };

  const goToSlide = (idx) => {
    if (idx !== slideIdx) {
      stopNarration();
      setSlideIdx(idx);
    }
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Story Card with Maximum Grade 4 Visual Legibility & Scaled Image */}
      <div className="w-full max-w-5xl max-h-[92vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Left Column: Extra Large Image Illustration */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 h-80 sm:h-[420px] md:h-[450px] w-full bg-black/40 flex items-center justify-center shrink-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Column: Extra Large Typography & Callout Pills */}
        <div className="flex flex-col items-start text-left justify-center gap-4.5 overflow-y-auto max-h-full py-1">
          {/* Slide Title with Speaker Replay Button */}
          <div className="flex items-center gap-3 w-full justify-between">
            <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-amber-400 leading-tight drop-shadow-md">
              {slide.title}
            </h2>
            <button
              onClick={handleReplay}
              className="p-2.5 rounded-full bg-amber-400/20 hover:bg-amber-400/40 text-amber-300 text-xl cursor-pointer transition shadow-md shrink-0 flex items-center justify-center hover:scale-105 active:scale-95"
              title="Listen to slide narration"
            >
              🔊
            </button>
          </div>

          {/* Body Narrative */}
          <p className="text-slate-100 text-xl sm:text-2xl leading-relaxed font-extrabold drop-shadow-sm">
            {slide.body}
          </p>

          {/* Pull-Quote Sparkle Pill */}
          <div className="w-full bg-[#1e0e45] border-2 border-amber-400/60 rounded-2xl px-6 py-3.5 text-center text-amber-300 font-display font-900 text-lg sm:text-xl flex items-center justify-center gap-3 shadow-lg">
            <span className="shrink-0 text-2xl">✨</span>
            <span className="leading-snug">"{slide.quote}"</span>
            <span className="shrink-0 text-2xl">✨</span>
          </div>

          {/* Mascot Speech Bubble Pill */}
          <div className="flex items-center gap-4 w-full mt-1">
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-4xl shadow-lg shrink-0">
              🦁
            </div>
            <div className="bg-white text-[#0c031d] rounded-2xl px-7 py-3.5 font-display font-900 text-lg sm:text-xl shadow-xl flex-1 text-left leading-snug">
              {slide.bubble}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Row: Back, Dots, Next */}
      <div className="w-full max-w-4xl flex items-center justify-between mt-3 z-20 shrink-0">
        <button
          onClick={goPrev}
          disabled={slideIdx === 0}
          className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/30 text-white font-display font-900 text-xl sm:text-2xl px-10 py-4 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-xl hover:scale-105"
        >
          ← Back
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-3.5">
          {STORY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all cursor-pointer ${
                i === slideIdx
                  ? 'w-4.5 h-4.5 bg-amber-400 shadow-[0_0_18px_rgba(250,204,21,0.9)]'
                  : 'w-3.5 h-3.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="btn-gold text-xl sm:text-2xl px-11 py-4 font-900 flex items-center gap-2 shadow-[0_0_35px_rgba(250,204,21,0.85)] hover:scale-105"
        >
          <span>{slideIdx === STORY_SLIDES.length - 1 ? 'Enter Lab 🧪' : 'Next'}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
