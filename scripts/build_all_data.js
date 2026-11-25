import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  WORLD_HINTS,
  wonderTexts,
  storyTexts,
  simulateTexts,
  simGuidanceTexts,
  simHintTexts,
  reflectTexts,
  feedbackTexts,
  qTexts
} from './check_chars.js';
import { ALL_WORLDS_QUESTIONS } from './build_questions.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// 1. Generate src/mathData.js
const mathDataContent = `/* =========================================================================
   MATH DATA & PROCEDURAL QUESTION BANK (10 Worlds × 10 Questions = 100 Questions)
   Procedurally generated Grade 8 "Profit and Loss" questions.
   Numbers are chosen so every answer is exact (to the cent).
   Each question carries diagram data for <ProfitDiagram/>.
   ========================================================================= */

export const WESTERN_NAMES = [
  "Leo", "Emma", "Alex", "Oliver", "Sophia", "Jack", "Maya", "Lucas",
  "Ethan", "Chloe", "Noah", "Liam", "Harper", "Ava", "Mason", "Ella",
  "James", "Mia", "Logan", "Charlotte"
];

export const PRACTICE_WORLDS = [
  { id: 0, name: "Market Square", icon: "🏪", range: "Q1–10", difficulty: 1 },
  { id: 1, name: "Lemonade Lane", icon: "🍋", range: "Q11–20", difficulty: 1 },
  { id: 2, name: "Profit Peak", icon: "📈", range: "Q21–30", difficulty: 2 },
  { id: 3, name: "Loss Lagoon", icon: "📉", range: "Q31–40", difficulty: 2 },
  { id: 4, name: "Price Tag Plaza", icon: "🏷️", range: "Q41–50", difficulty: 2 },
  { id: 5, name: "Discount Dock", icon: "🛍️", range: "Q51–60", difficulty: 3 },
  { id: 6, name: "Break-Even Bridge", icon: "⚖️", range: "Q61–70", difficulty: 3 },
  { id: 7, name: "Backwards Bazaar", icon: "🔙", range: "Q71–80", difficulty: 3 },
  { id: 8, name: "Bulk Buy Bay", icon: "📦", range: "Q81–90", difficulty: 4 },
  { id: 9, name: "Business Champion", icon: "🏆", range: "Q91–100", difficulty: 4 }
];

export const RULES = {
  pl: "✦ PROFIT = SP − CP · LOSS = CP − SP",
  pct: "✦ % IS ALWAYS ON THE COST PRICE",
  sp: "✦ SP = CP × MULTIPLIER",
  cp: "✦ CP = SP ÷ MULTIPLIER",
  disc: "✦ DISCOUNT IS ON THE MARKED PRICE",
  even: "✦ BREAK EVEN: SALES = COSTS",
  bulk: "✦ TOTAL SALES − TOTAL COST"
};

export const WORLD_HINTS = ${JSON.stringify(WORLD_HINTS, null, 2)};

export const r2 = v => Math.round(v * 100) / 100;
export const money = v => '$' + (Number.isInteger(v) ? v.toLocaleString('en-US') : v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
export const num = v => { const r = r2(v); return Number.isInteger(r) ? r.toLocaleString('en-US') : String(r); };

// Structured 100 Questions (10 worlds × 10 questions)
export const PRACTICE_QUESTIONS = ${JSON.stringify(
  ALL_WORLDS_QUESTIONS.map((worldList, wIdx) =>
    worldList.map((item, qIdx) => ({
      ...item,
      prompt: qTexts[wIdx * 10 + qIdx],
      spokenPrompt: qTexts[wIdx * 10 + qIdx],
      hint: WORLD_HINTS[wIdx].hint,
      spokenHint: WORLD_HINTS[wIdx].hint
    }))
  ),
  null,
  2
)};

export function getQuestion(worldIndex = 0, questionIndex = 0) {
  const worldList = PRACTICE_QUESTIONS[worldIndex] || PRACTICE_QUESTIONS[0];
  const question = worldList[questionIndex] || worldList[0];
  const world = PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0];
  return {
    ...question,
    world
  };
}

export function makeQuestion(worldIndex = 0, questionIndex = 0) {
  return getQuestion(worldIndex, questionIndex);
}
`;

fs.writeFileSync(path.join(ROOT, 'src', 'mathData.js'), mathDataContent, 'utf8');
console.log('✔ Wrote src/mathData.js');

// 2. Generate src/utils/lessonScript.js
const lessonScriptContent = `/* =========================================================================
   LESSON SCRIPT — single source of truth for every spoken line.
   ---------------------------------------------------------------------------
   • UI components DISPLAY these exact strings.
   • src/utils/narration.js wraps them in styled segments for playback.
   • scripts/generate_audio.js reads ALL_PHRASES to pre-generate the MP3s.
   Because all three read the same strings, on-screen text and audio can
   never drift apart (1:1 parity).
   ========================================================================= */

export const WONDER = {
  paragraph: "${wonderTexts[0]}",
  question: "${wonderTexts[1]}"
};

export const STORY = [
  { body: "${storyTexts[0]}", style: 'statement' },
  { body: "${storyTexts[1]}", style: 'emphasis' },
  { body: "${storyTexts[2]}", style: 'statement' },
  { body: "${storyTexts[3]}", style: 'thinking' },
  { body: "${storyTexts[4]}", style: 'emphasis' },
  { body: "${storyTexts[5]}", style: 'statement' },
  { body: "${storyTexts[6]}", style: 'encouragement' },
  { body: "${storyTexts[7]}", style: 'celebration' }
];

export const SIMULATE = {
  1: "${simulateTexts[0]}",
  2: "${simulateTexts[1]}",
  3: "${simulateTexts[2]}"
};

export const SIMULATE_GUIDANCE = ${JSON.stringify(simGuidanceTexts, null, 2)};
export const SIMULATE_HINTS = ${JSON.stringify(simHintTexts, null, 2)};

export const REFLECT = {
  question: "${reflectTexts[0]}"
};

export const FEEDBACK = {
  splitDone: "${feedbackTexts[0]}",
  buildDone: "${feedbackTexts[1]}",
  reverseDone: "${feedbackTexts[2]}",
  tryAgain: "${feedbackTexts[3]}",
  practiceCorrect: "${feedbackTexts[4]}",
  practiceWrong: "${feedbackTexts[5]}",
  lessonDone: "${feedbackTexts[6]}"
};

export const PRACTICE_HINTS = ${JSON.stringify(WORLD_HINTS.map(h => h.hint), null, 2)};
export const PRACTICE_QUESTIONS_TEXT = ${JSON.stringify(qTexts, null, 2)};

/** Every phrase that should exist as a pre-generated MP3, with its voice style. */
export const ALL_PHRASES = [
  // Wonder
  { text: WONDER.paragraph, style: 'statement' },
  { text: WONDER.question, style: 'question' },

  // Story (8 slides)
  ...STORY.map(s => ({ text: s.body, style: s.style })),

  // Simulation station intros
  { text: SIMULATE[1], style: 'instruction' },
  { text: SIMULATE[2], style: 'instruction' },
  { text: SIMULATE[3], style: 'question' },

  // Simulation activity guidance (9 activities)
  ...SIMULATE_GUIDANCE.map(g => ({ text: g, style: 'instruction' })),

  // Simulation activity hints (9 hints)
  ...SIMULATE_HINTS.map(h => ({ text: h, style: 'thinking' })),

  // Reflect
  { text: REFLECT.question, style: 'thinking' },

  // Feedback lines
  { text: FEEDBACK.splitDone, style: 'celebration' },
  { text: FEEDBACK.buildDone, style: 'celebration' },
  { text: FEEDBACK.reverseDone, style: 'celebration' },
  { text: FEEDBACK.tryAgain, style: 'encouragement' },
  { text: FEEDBACK.practiceCorrect, style: 'celebration' },
  { text: FEEDBACK.practiceWrong, style: 'encouragement' },
  { text: FEEDBACK.lessonDone, style: 'celebration' },

  // 10 Practice World Hints
  ...PRACTICE_HINTS.map(h => ({ text: h, style: 'thinking' })),

  // 100 Practice Questions
  ...PRACTICE_QUESTIONS_TEXT.map(q => ({ text: q, style: 'question' }))
];
`;

fs.writeFileSync(path.join(ROOT, 'src', 'utils', 'lessonScript.js'), lessonScriptContent, 'utf8');
console.log('✔ Wrote src/utils/lessonScript.js');

// 3. Generate src/utils/narration.js
const narrationContent = `/* =========================================================================
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
`;

fs.writeFileSync(path.join(ROOT, 'src', 'utils', 'narration.js'), narrationContent, 'utf8');
console.log('✔ Wrote src/utils/narration.js');

// 4. Update scripts/generate_audio.js
const generateAudioScriptContent = `/* =========================================================================
   OFFLINE AUDIO GENERATION — ElevenLabs "Alice"
   Usage:  node scripts/generate_audio.js           (skips files that exist)
           node scripts/generate_audio.js --force   (re-generate everything)
   • Reads phrases from src/utils/lessonScript.js (same text the UI shows)
   • Applies per-style voice settings
   • Saves MP3s to public/assets/audio/ and rewrites src/utils/audioMap.js
   • Rate-limited at 350 ms between API calls
   ========================================================================= */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { ALL_PHRASES } from '../src/utils/lessonScript.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'assets', 'audio');
const MAP_FILE = path.join(ROOT, 'src', 'utils', 'audioMap.js');

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
const MODEL_ID = 'eleven_multilingual_v2';

const STYLE_SETTINGS = {
  celebration:   { stability: 0.15, similarity_boost: 0.50, style: 0.70, use_speaker_boost: true },
  encouragement: { stability: 0.20, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  question:      { stability: 0.25, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
  emphasis:      { stability: 0.20, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.30, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.25, similarity_boost: 0.55, style: 0.45, use_speaker_boost: true },
  instruction:   { stability: 0.25, similarity_boost: 0.55, style: 0.45, use_speaker_boost: true }
};

function readEnvKey() {
  if (process.env.VITE_ELEVENLABS_API_KEY) return process.env.VITE_ELEVENLABS_API_KEY;
  for (const f of ['.env.local', '.env']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    const m = fs.readFileSync(p, 'utf8').match(/^\\s*VITE_ELEVENLABS_API_KEY\\s*=\\s*"?([^"\\r\\n]+)"?/m);
    if (m) return m[1].trim();
  }
  return '';
}

const slugify = text =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 40);

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const force = process.argv.includes('--force');
  const apiKey = readEnvKey();
  if (!apiKey) {
    console.error('✖ VITE_ELEVENLABS_API_KEY not found in .env.local');
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // De-duplicate by exact text (first style wins)
  const seen = new Set();
  const phrases = ALL_PHRASES.filter(p => {
    if (!p.text || seen.has(p.text)) return false;
    seen.add(p.text);
    return true;
  });

  console.log(\`Found \${phrases.length} unique phrases to generate.\`);

  const map = {};
  let made = 0, skipped = 0, failed = 0;

  for (const [i, p] of phrases.entries()) {
    const hash = crypto.createHash('md5').update(p.text).digest('hex').slice(0, 8);
    const fileName = \`audio_\${slugify(p.text)}_\${hash}.mp3\`;
    const filePath = path.join(OUT_DIR, fileName);
    const publicPath = \`/assets/audio/\${fileName}\`;

    if (!force && fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
      map[p.text] = publicPath;
      skipped++;
      continue;
    }

    const s = STYLE_SETTINGS[p.style] || STYLE_SETTINGS.statement;
    process.stdout.write(\`[\${i + 1}/\${phrases.length}] (\${p.style}) "\${p.text.slice(0, 45)}…" \`);
    try {
      const res = await fetch(\`https://api.elevenlabs.io/v1/text-to-speech/\${VOICE_ID}\`, {
        method: 'POST',
        headers: { 'xi-api-key': apiKey, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
        body: JSON.stringify({ text: p.text, model_id: MODEL_ID, voice_settings: s })
      });
      if (!res.ok) throw new Error(\`\${res.status} \${await res.text()}\`);
      fs.writeFileSync(filePath, Buffer.from(await res.arrayBuffer()));
      map[p.text] = publicPath;
      made++;
      console.log('✔');
    } catch (err) {
      failed++;
      console.log(\`✖ \${err.message}\`);
    }
    await sleep(350);
  }

  console.log(\`\\nDone! Generated: \${made}, Skipped: \${skipped}, Failed: \${failed}\`);

  // Write audioMap.js
  const mapSource = \`/* Auto-generated by scripts/generate_audio.js — do not edit. */\\nexport const audioMap = \${JSON.stringify(map, null, 2)};\\n\`;
  fs.writeFileSync(MAP_FILE, mapSource);
  console.log(\`✔ Updated \${MAP_FILE} (\${Object.keys(map).length} entries)\`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
`;

fs.writeFileSync(path.join(ROOT, 'scripts', 'generate_audio.js'), generateAudioScriptContent, 'utf8');
console.log('✔ Wrote scripts/generate_audio.js');
