import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { narrate, stopNarration } from '../utils/audio.js';
import { simulateStationIntro, simulateActivityGuidance, simulateActivityHint, feedbackNarration } from '../utils/narration.js';
import { SIMULATE_GUIDANCE, SIMULATE_HINTS } from '../utils/lessonScript.js';
import { Balance, PriceTag, DealCards, money, C_PROFIT, C_LOSS } from '../components/ProfitDiagram.jsx';

/* =========================================================================
   SIMULATION STATIONS — Profit and Loss (Grade 8)
   Station 1 · Lemonade Stand   → SEE profit, loss and break-even on a balance
   Station 2 · Price Tag Maker  → TRY it: set prices for a % profit or loss
   Station 3 · Business Detective → APPLY: backwards, bulk & combined deals
   ========================================================================= */

const parseVal = str => {
  const s = String(str ?? '').replace(/[$,%\s]/g, '');
  return s === '' ? NaN : Number(s);
};
const near = (str, want, tol = 0.006) => { const v = parseVal(str); return Number.isFinite(v) && Math.abs(v - want) <= tol; };
const r2 = v => Math.round(v * 100) / 100;

/* ------------------------------------------------------------------------
   STATION DATA
   ------------------------------------------------------------------------ */
const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: Grand Opening",
      desc: SIMULATE_GUIDANCE[0],
      icon: "🍋",
      costs: [['🍋 Lemons', 18], ['🍬 Sugar', 7], ['🥤 Cups', 15]],
      adjust: 'price', price: 0.8, cups: 50,
      goal: { text: 'Profit of exactly $20', test: (p, c, cost) => Math.abs(p * c - cost - 20) < 0.005 },
      fields: [['rev', 'Total sales ($)', 60], ['amt', 'Profit ($)', 20], ['pct', 'Profit % (on cost)', 50]],
      hint: SIMULATE_HINTS[0]
    },
    {
      id: 2,
      title: "Activity 2: Break-Even Point",
      desc: SIMULATE_GUIDANCE[1],
      icon: "⚖️",
      costs: [['🍋 Lemons', 18], ['🍬 Sugar', 7], ['🥤 Cups', 15]],
      adjust: 'cups', price: 0.5, cups: 20,
      goal: { text: 'Exactly break even', test: (p, c, cost) => Math.abs(p * c - cost) < 0.005 },
      fields: [['rev', 'Total sales at break-even ($)', 40], ['cups', 'Cups needed for a $10 profit', 100]],
      hint: SIMULATE_HINTS[1]
    },
    {
      id: 3,
      title: "Activity 3: Rainy Day",
      desc: SIMULATE_GUIDANCE[2],
      icon: "🌧️",
      costs: [['🍋 Lemons', 30], ['🍬 Sugar', 12], ['🥤 Cups', 18]],
      adjust: 'price', price: 1, cups: 30,
      goal: { text: 'A loss of exactly 25%', test: (p, c, cost) => Math.abs(p * c - cost * 0.75) < 0.005 },
      fields: [['rev', 'Total sales ($)', 45], ['amt', 'Loss ($)', 15], ['pct', 'Loss % (on cost)', 25]],
      hint: SIMULATE_HINTS[2]
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Helmet Shop",
      desc: SIMULATE_GUIDANCE[3],
      icon: "🪖",
      cp: 80, target: 100, tagLabel: 'SELLING PRICE',
      fields: [['mult', 'Multiplier', 1.25], ['amt', 'Profit ($)', 20]],
      hint: SIMULATE_HINTS[3]
    },
    {
      id: 2,
      title: "Activity 2: Clearance Sale",
      desc: SIMULATE_GUIDANCE[4],
      icon: "📱",
      cp: 250, target: 220, tagLabel: 'SELLING PRICE',
      fields: [['mult', 'Multiplier', 0.88], ['amt', 'Loss ($)', 30]],
      hint: SIMULATE_HINTS[4]
    },
    {
      id: 3,
      title: "Activity 3: Marked Price Puzzle",
      desc: SIMULATE_GUIDANCE[5],
      icon: "⌚",
      cp: 120, target: 160, tagLabel: 'MARKED PRICE', discount: 10,
      fields: [['mult', 'Discount multiplier', 0.9], ['amt', 'Profit ($)', 24]],
      hint: SIMULATE_HINTS[5]
    }
  ],
  3: [
    {
      id: 1,
      title: "Activity 1: Leo's Two Bikes",
      desc: SIMULATE_GUIDANCE[6],
      icon: "🚲",
      cards: [{ name: '🚲 Bike A', cpKey: 'a', sp: '$120', note: '+20% profit', noteCol: C_PROFIT }, { name: '🚲 Bike B', cpKey: 'b', sp: '$120', note: '−20% loss', noteCol: C_LOSS }],
      fields: [['a', 'Cost of bike A ($)', 100], ['b', 'Cost of bike B ($)', 150], ['loss', 'Overall LOSS ($)', 10], ['pct', 'Overall loss % (on $250)', 4]],
      done: "🎉 Paid $250, received $240 — a $10 loss (4%). The 20%s were of DIFFERENT cost prices!",
      hint: SIMULATE_HINTS[6]
    },
    {
      id: 2,
      title: "Activity 2: Working Backwards",
      desc: SIMULATE_GUIDANCE[7],
      icon: "🧥",
      cards: [{ name: '🧥 Jacket', cpKey: 'cp', sp: '$84', note: '+40% profit', noteCol: C_PROFIT }],
      fields: [['mult', 'Multiplier for 40% profit', 1.4], ['cp', 'Cost price ($)', 60], ['amt', 'Profit ($)', 24]],
      done: "🎉 $84 ÷ 1.4 = $60. (40% of $84 is $33.60 — that would be the wrong base!)",
      hint: SIMULATE_HINTS[7]
    },
    {
      id: 3,
      title: "Activity 3: Mango Market",
      desc: SIMULATE_GUIDANCE[8],
      icon: "🥭",
      cards: [{ name: '🥭 50 mangoes', cp: '$40', spKey: 'rev', note: '10 spoiled', noteCol: '#facc15' }],
      fields: [['each', 'Cost of one mango ($)', 0.8], ['rev', 'Money from sales ($)', 60], ['amt', 'Profit ($)', 20], ['pct', 'Profit % (on cost)', 50]],
      done: "🎉 40 mangoes × $1.50 = $60. Profit $20 on $40 → 50% profit, even with spoiled fruit!",
      hint: SIMULATE_HINTS[8]
    }
  ]
};

export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Station 1
  const [price, setPrice] = useState(0);
  const [cups, setCups] = useState(0);
  const [ans1, setAns1] = useState({});
  const [ok1, setOk1] = useState({});

  // Station 2
  const [tag, setTag] = useState(0);
  const [ans2, setAns2] = useState({});
  const [ok2, setOk2] = useState({});

  // Station 3
  const [ans3, setAns3] = useState({});
  const [ok3, setOk3] = useState({});

  const currentActivity = STATION_ACTIVITIES[station][actIdx];
  const say = list => narrate(list, !muted);

  useEffect(() => {
    const a = STATION_ACTIVITIES[station][actIdx];
    setShowHint(false);
    setFeedback(null);
    setPrice(a.price || 0);
    setCups(a.cups || 0);
    setAns1({});
    setOk1({});
    setTag(a.cp || 0);
    setAns2({});
    setOk2({});
    setAns3({});
    setOk3({});
  }, [station, actIdx]);

  useEffect(() => {
    stopNarration();
    say(simulateActivityGuidance(station, actIdx));
    return () => stopNarration();
  }, [station, actIdx, muted]);

  /* ---------- Station 1: Lemonade Stand ---------- */
  const s1 = station === 1 ? currentActivity : null;
  const cost1 = s1 ? s1.costs.reduce((a, [, v]) => a + v, 0) : 0;
  const rev1 = r2(price * cups);
  const goal1 = s1 ? s1.goal.test(price, cups, cost1) : false;
  const bump = (k, d) => {
    setFeedback(null);
    if (k === 'price') setPrice(p => Math.max(0.1, Math.min(5, r2(p + d))));
    else setCups(c => Math.max(0, Math.min(150, c + d)));
  };
  const check1 = () => {
    const ok = {};
    s1.fields.forEach(([k, , v]) => { ok[k] = near(ans1[k], v); });
    setOk1(ok);
    if (goal1 && Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: `🎉 ${cups} cups × ${money(price)} = ${money(rev1)} vs cost ${money(cost1)} — perfect!` });
      say(feedbackNarration.splitDone());
    } else {
      setFeedback({ success: false, text: !goal1 ? `Not there yet: ${s1.goal.text.toLowerCase()}. Keep adjusting!` : 'The stand is set — now check the red boxes. Percentages use the COST.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 2: Price Tag Maker ---------- */
  const s2 = station === 2 ? currentActivity : null;
  const tagOk = s2 ? Math.abs(tag - s2.target) < 0.005 : false;
  const salePrice2 = s2 && s2.discount ? r2(tag * (1 - s2.discount / 100)) : tag;
  const pl2 = s2 ? r2(salePrice2 - s2.cp) : 0;
  const addTag = d => { setTag(t => Math.max(0, r2(t + d))); setFeedback(null); };
  const check2 = () => {
    const ok = {};
    s2.fields.forEach(([k, , v]) => { ok[k] = near(ans2[k], v, 0.0001 + (k === 'mult' ? 0 : 0.005)); });
    setOk2(ok);
    if (tagOk && Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: s2.discount ? `🎉 Marked ${money(tag)} → 10% off → ${money(salePrice2)} → ${money(pl2)} profit = 20% of $120!` : `🎉 ${money(s2.cp)} × ${s2.fields[0][2]} = ${money(tag)}` });
      say(feedbackNarration.buildDone());
    } else {
      setFeedback({ success: false, text: !tagOk ? 'The price tag is not right yet. Use the multiplier on the COST price.' : 'Tag is right! Now check the red boxes.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 3: Business Detective ---------- */
  const s3 = station === 3 ? currentActivity : null;
  const fieldVal = k => s3.fields.find(f => f[0] === k)[2];
  const cards3 = s3 ? s3.cards.map(c => ({
    ...c,
    cp: c.cpKey ? (ok3[c.cpKey] ? money(fieldVal(c.cpKey)) : '?') : c.cp,
    sp: c.spKey ? (ok3[c.spKey] ? money(fieldVal(c.spKey)) : '?') : c.sp
  })) : [];
  const check3 = () => {
    const ok = {};
    s3.fields.forEach(([k, , v]) => { ok[k] = near(ans3[k], v, 0.0001 + 0.005); });
    setOk3(ok);
    if (Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: s3.done });
      say(feedbackNarration.reverseDone());
    } else {
      setFeedback({ success: false, text: 'Check the red boxes. Remember: CP × multiplier = SP, and percentages use the cost price.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Navigation ---------- */
  const nextActivity = () => {
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      onNext();
    }
  };

  const prevActivity = () => {
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  const STATIONS = [
    { n: 1, icon: '🍋', name: 'Station 1: Lemonade Stand', sub: 'Profit, loss & break-even' },
    { n: 2, icon: '🏷️', name: 'Station 2: Price Tag Maker', sub: 'Price for a % profit or loss' },
    { n: 3, icon: '🕵️', name: 'Station 3: Business Detective', sub: 'Backwards & tricky deals' }
  ];

  const inputCls = ok =>
    `bg-[#14082c] border-2 rounded-xl px-3 py-2 text-white font-display font-900 text-base text-center outline-none w-24 shadow-inner ${
      ok === true ? 'border-emerald-400' : ok === false ? 'border-rose-400' : 'border-cyan-400/70 focus:border-amber-400'
    }`;

  const handleToggleHint = () => {
    stopNarration();
    setShowHint(h => {
      const next = !h;
      if (next) say(simulateActivityHint(station, actIdx));
      return next;
    });
  };

  const hintBtn = (
    <button
      onClick={handleToggleHint}
      className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-900 text-xs px-3 py-2 rounded-xl transition cursor-pointer"
    >
      💡 Hint
    </button>
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Glass Card Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Cyan Accent Bar */}
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              {STATIONS.map(s => (
                <button
                  key={s.n}
                  onClick={() => {
                    setStation(s.n);
                    setActIdx(0);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === s.n
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${
                      station === s.n ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-display font-900 text-base sm:text-lg leading-tight">{s.name}</p>
                      <p className="text-xs font-extrabold text-slate-300 mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                  <span className="text-base">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={onNext}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0 gap-3">
                <h3 className="font-display font-900 text-xl sm:text-2xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15 shrink-0">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description */}
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-extrabold mb-3 shrink-0">
                {currentActivity.desc}
              </p>

              {/* ===================== STATION 1: LEMONADE STAND ===================== */}
              {station === 1 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-2 overflow-y-auto">
                    <div className="flex flex-wrap gap-1.5 justify-center shrink-0">
                      {s1.costs.map(([n, v]) => <span key={n} className="bg-[#14082c] rounded-full px-2.5 py-0.5 border border-sky-400/40 text-[11px] font-900 text-sky-200">{n} ${v}</span>)}
                      <span className="bg-sky-500/20 rounded-full px-2.5 py-0.5 border border-sky-400 text-[11px] font-900 text-white">Cost: {money(cost1)}</span>
                    </div>
                    <svg viewBox="0 0 360 200" className="w-full flex-1 min-h-[110px]">
                      <Balance cost={cost1} revenue={rev1} costLabel={money(cost1)} revLabel={ok1.rev ? money(rev1) : '?'} y={22} />
                    </svg>
                    <div className="grid grid-cols-2 gap-2 shrink-0">
                      {[['price', 'Price per cup', money(price), [-0.5, -0.1, 0.1, 0.5]], ['cups', 'Cups sold', String(cups), [-10, -1, 1, 10]]].map(([k, lab, val, steps]) => (
                        <div key={k} className={`bg-[#14082c] rounded-xl px-2 py-1.5 border-2 ${s1.adjust === k ? 'border-amber-400/60' : 'border-white/10 opacity-60'}`}>
                          <div className="flex justify-between text-[11px] font-900"><span className="text-slate-300">{lab}</span><span className="text-amber-300 text-sm">{val}</span></div>
                          {s1.adjust === k ? (
                            <div className="flex gap-1 mt-1">
                              {steps.map(d => <button key={d} onClick={() => bump(k, d)} className="flex-1 h-7 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[11px] font-900 cursor-pointer">{d > 0 ? '+' : '−'}{k === 'price' ? Math.abs(d).toFixed(2) : Math.abs(d)}</button>)}
                            </div>
                          ) : <p className="text-[10px] font-bold text-slate-400 mt-1">fixed for this activity</p>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Hit the target</p>
                    <div className={`rounded-xl px-3 py-1.5 border-2 text-xs font-900 ${goal1 ? 'bg-emerald-950/60 border-emerald-400/60 text-emerald-200' : 'bg-rose-950/40 border-rose-400/40 text-rose-200'}`}>{goal1 ? '✔' : '✗'} {s1.goal.text}</div>
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Work out the numbers</p>
                    {s1.fields.map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-300 flex-1 leading-tight">{lab}</span>
                        <input type="number" value={ans1[k] ?? ''} onChange={e => setAns1(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check1()} className={inputCls(ok1[k]) + ' !w-20 !py-1'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check1} className="btn-gold flex-1 text-sm font-900 px-3 py-2">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 2: PRICE TAG MAKER ===================== */}
              {station === 2 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col items-center justify-center gap-2 overflow-y-auto">
                    <span className="bg-[#14082c] rounded-full px-3 py-1 border border-sky-400/50 text-sm font-900 text-sky-200 shrink-0">{s2.icon} Cost price: {money(s2.cp)}</span>
                    <svg viewBox="0 40 360 120" className="w-full max-w-md shrink-0">
                      <PriceTag cx={180} cy={100} label={s2.tagLabel} value={money(tag)} col={tagOk ? '#4ade80' : '#facc15'} w={230} h={100} />
                    </svg>
                    <div className="flex flex-wrap justify-center gap-1.5 shrink-0">
                      {[-100, -10, -1, 1, 10, 100].map(d => (
                        <button key={d} onClick={() => addTag(d)} className={`w-12 h-8 rounded-lg border text-xs font-900 cursor-pointer ${d > 0 ? 'bg-emerald-500/15 border-emerald-400/50 text-emerald-200' : 'bg-rose-500/15 border-rose-400/50 text-rose-200'}`}>{d > 0 ? '+' : '−'}${Math.abs(d)}</button>
                      ))}
                    </div>
                    <div className="bg-[#14082c] rounded-xl px-3 py-1.5 border border-white/10 text-xs font-900 text-slate-200 text-center shrink-0">
                      {s2.discount ? <>After {s2.discount}% off, customers pay <span className="text-amber-300">{money(salePrice2)}</span> · </> : null}
                      Shop's result: <span style={{ color: pl2 > 0 ? C_PROFIT : pl2 < 0 ? C_LOSS : '#facc15' }}>{pl2 > 0 ? '▲ profit' : pl2 < 0 ? '▼ loss' : '⚖ break even'}</span>
                    </div>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Build the price tag</p>
                    <div className={`rounded-xl px-3 py-1.5 border-2 text-xs font-900 ${tagOk ? 'bg-emerald-950/60 border-emerald-400/60 text-emerald-200' : 'bg-rose-950/40 border-rose-400/40 text-rose-200'}`}>{tagOk ? '✔ Tag is correct' : '✗ Tag not right yet'}</div>
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Show your working</p>
                    {s2.fields.map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-300 flex-1 leading-tight">{lab}</span>
                        <input type="number" value={ans2[k] ?? ''} onChange={e => setAns2(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check2()} className={inputCls(ok2[k]) + ' !w-20 !py-1'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check2} className="btn-gold flex-1 text-sm font-900 px-3 py-2">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 3: BUSINESS DETECTIVE ===================== */}
              {station === 3 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col items-center justify-center">
                    <svg viewBox="0 10 360 175" className="w-full h-full">
                      <DealCards items={cards3} y={20} />
                    </svg>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">Crack the case</p>
                    {s3.fields.map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-200 flex-1 leading-tight">{lab}</span>
                        <input type="number" value={ans3[k] ?? ''} onChange={e => setAns3(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check3()} className={inputCls(ok3[k]) + ' !w-20 !py-1'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check3} className="btn-gold flex-1 text-sm font-900 px-3 py-2">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* Hint + feedback strip */}
              {showHint && (
                <div className="p-2.5 mt-2 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shrink-0">
                  💡 {currentActivity.hint}
                </div>
              )}
              {feedback && (
                <div className={`p-2.5 mt-2 rounded-2xl text-sm font-900 w-full text-center shadow-xl shrink-0 fade-in-up ${
                  feedback.success ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
                }`}>
                  {feedback.text}
                </div>
              )}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-3 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button
                onClick={nextActivity}
                className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
