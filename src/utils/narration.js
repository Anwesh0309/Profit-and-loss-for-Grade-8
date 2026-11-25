/* =========================================================================
   NARRATION SCRIPTS — maps each lesson phase to its spoken segments.
   Only paragraph text and questions are narrated — NEVER titles.
   Every string comes from lessonScript.js, the same source the UI displays.
   ========================================================================= */
import { say, ask, think, instruct, cheer, encourage } from './audio.js';
import {
  WONDER,
  STORY,
  SIMULATE,
  SIMULATE_GUIDANCE,
  SIMULATE_HINTS,
  REFLECT,
  FEEDBACK,
  PRACTICE_HINTS
} from './lessonScript.js';

export function wonderNarration() {
  return [say(WONDER.paragraph), ask(WONDER.question)];
}

export function getStoryNarration(slideIndex) {
  const slide = STORY[slideIndex];
  return slide ? [{ text: slide.body, style: slide.style }] : [];
}

export function simulateStationIntro(station) {
  if (station === 3) return [ask(SIMULATE[3])];
  return [instruct(SIMULATE[station])];
}

export function simulateActivityGuidance(station, actIdx) {
  const idx = (station - 1) * 3 + actIdx;
  const text = SIMULATE_GUIDANCE[idx];
  return text ? [instruct(text)] : [];
}

export function simulateActivityHint(station, actIdx) {
  const idx = (station - 1) * 3 + actIdx;
  const text = SIMULATE_HINTS[idx];
  return text ? [think(text)] : [];
}

export function practiceQuestionNarration(questionText) {
  return [ask(questionText)];
}

export function practiceHintNarration(worldIndex) {
  const text = PRACTICE_HINTS[worldIndex] || PRACTICE_HINTS[0];
  return [think(text)];
}

export function reflectQuestionNarration() {
  return [think(REFLECT.question)];
}

export const feedbackNarration = {
  splitDone: () => [cheer(FEEDBACK.splitDone)],
  buildDone: () => [cheer(FEEDBACK.buildDone)],
  reverseDone: () => [cheer(FEEDBACK.reverseDone)],
  tryAgain: () => [encourage(FEEDBACK.tryAgain)],
  practiceCorrect: () => [cheer(FEEDBACK.practiceCorrect)],
  practiceWrong: () => [encourage(FEEDBACK.practiceWrong)],
  lessonDone: () => [cheer(FEEDBACK.lessonDone)]
};
