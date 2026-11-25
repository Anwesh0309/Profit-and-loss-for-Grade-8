import React from 'react';

/* =========================================================================
   PROFIT DIAGRAM — visuals for profit & loss.
   • Balance    cost vs selling scale that tips towards the bigger side
   • PriceTag   a single big price tag
   • DealCards  CP / SP cards for one or two items
   ========================================================================= */

export const C_PROFIT = '#4ade80';
export const C_LOSS = '#f87171';
export const money = v => {
  if (!Number.isFinite(v)) return '?';
  const r = Math.round(v * 100) / 100;
  return '$' + (Number.isInteger(r) ? r.toLocaleString('en-US') : r.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
};

/** Balance: left = cost, right = selling. labels are strings ('?' allowed). */
export function Balance({ cost, revenue, costLabel, revLabel, cx = 180, y = 40, w = 260, fs = 14 }) {
  const diff = (revenue - cost) / Math.max(cost, revenue, 1);
  const ang = Math.max(-14, Math.min(14, diff * 40));
  const rad = (ang * Math.PI) / 180;
  const L = [cx - (w / 2) * Math.cos(rad), y + 20 - (w / 2) * Math.sin(rad)];
  const R = [cx + (w / 2) * Math.cos(rad), y + 20 + (w / 2) * Math.sin(rad)];
  const state = Math.abs(revenue - cost) < 0.005 ? 'even' : revenue > cost ? 'profit' : 'loss';
  const pan = ([px, py], label, title, col) => (
    <g>
      <line x1={px} y1={py} x2={px - 34} y2={py + 46} stroke="#cbd5e1" strokeWidth="2" />
      <line x1={px} y1={py} x2={px + 34} y2={py + 46} stroke="#cbd5e1" strokeWidth="2" />
      <path d={`M${px - 46} ${py + 46} L${px + 46} ${py + 46} Q${px + 40} ${py + 66} ${px} ${py + 66} Q${px - 40} ${py + 66} ${px - 46} ${py + 46}Z`} fill={col} fillOpacity="0.85" stroke="#fff" strokeWidth="2" />
      <text x={px} y={py + 40} fill="#fff" fontSize={fs + 2} fontWeight="900" textAnchor="middle" stroke="#0c0520" strokeWidth="4" paintOrder="stroke">{label}</text>
      <text x={px} y={py + 84} fill={col} fontSize={fs - 2} fontWeight="900" textAnchor="middle">{title}</text>
    </g>
  );
  return (
    <g>
      <path d={`M${cx - 30} ${y + 150} L${cx + 30} ${y + 150} L${cx} ${y + 24}Z`} fill="#a78bfa" />
      <line x1={L[0]} y1={L[1]} x2={R[0]} y2={R[1]} stroke="#e9d5ff" strokeWidth="6" strokeLinecap="round" style={{ transition: 'all .4s' }} />
      <circle cx={cx} cy={y + 20} r="7" fill="#facc15" />
      {pan(L, costLabel, 'COST', '#38bdf8')}
      {pan(R, revLabel, 'SELLING', '#f472b6')}
      <text x={cx} y={y + 8} fill={state === 'profit' ? C_PROFIT : state === 'loss' ? C_LOSS : '#facc15'} fontSize={fs + 2} fontWeight="900" textAnchor="middle">
        {state === 'profit' ? '▲ PROFIT' : state === 'loss' ? '▼ LOSS' : '⚖ BREAK EVEN'}
      </text>
    </g>
  );
}

/** A big price tag. */
export function PriceTag({ cx = 180, cy = 100, label, value, col = '#facc15', w = 200, h = 100 }) {
  const x = cx - w / 2, y = cy - h / 2;
  return (
    <g>
      <path d={`M${x} ${y + h * 0.25} L${x + 26} ${y} L${x + w} ${y} L${x + w} ${y + h} L${x + 26} ${y + h} L${x} ${y + h * 0.75}Z`} fill="#14082c" stroke={col} strokeWidth="3" />
      <circle cx={x + 28} cy={cy} r="7" fill={col} />
      <text x={cx + 14} y={y + 30} fill="#c4b5fd" fontSize="14" fontWeight="900" textAnchor="middle">{label}</text>
      <text x={cx + 14} y={y + 72} fill="#fff" fontSize="32" fontWeight="900" textAnchor="middle">{value}</text>
    </g>
  );
}

/** Deal cards: items [{ name, cp, sp }] (strings). */
export function DealCards({ items, y = 20 }) {
  const n = items.length, w = n === 1 ? 200 : 150, gap = 24;
  const x0 = 180 - (n * w + (n - 1) * gap) / 2;
  return (
    <g>
      {items.map((it, i) => {
        const x = x0 + i * (w + gap);
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height="150" rx="16" fill="#14082c" stroke={['#f472b6', '#38bdf8'][i % 2]} strokeWidth="2.5" />
            <text x={x + w / 2} y={y + 28} fill="#fff" fontSize="15" fontWeight="900" textAnchor="middle">{it.name}</text>
            <text x={x + 14} y={y + 66} fill="#38bdf8" fontSize="13" fontWeight="900">COST</text>
            <text x={x + w - 14} y={y + 66} fill="#fff" fontSize="17" fontWeight="900" textAnchor="end">{it.cp}</text>
            <text x={x + 14} y={y + 104} fill="#f472b6" fontSize="13" fontWeight="900">SOLD</text>
            <text x={x + w - 14} y={y + 104} fill="#fff" fontSize="17" fontWeight="900" textAnchor="end">{it.sp}</text>
            {it.note && <text x={x + w / 2} y={y + 136} fill={it.noteCol || '#facc15'} fontSize="13" fontWeight="900" textAnchor="middle">{it.note}</text>}
          </g>
        );
      })}
    </g>
  );
}

/** Practice diagram wrapper. */
export function ProfitDiagram({ diagramData, size = 180 }) {
  if (!diagramData) return null;
  const d = diagramData;
  let body = null;
  if (d.type === 'balance') body = <Balance cost={d.cost} revenue={d.rev} costLabel={d.costLabel} revLabel={d.revLabel} y={22} />;
  else if (d.type === 'deal') body = <DealCards items={d.items} y={25} />;
  else if (d.type === 'tag') body = <PriceTag label={d.label} value={d.value} cy={100} col={d.col} />;
  if (!body) return null;
  return (
    <div className="flex items-center justify-center my-1">
      <svg width={size * 1.8} height={size} viewBox="0 0 360 200" className="max-w-full drop-shadow-[0_0_18px_rgba(250,204,21,0.25)]">
        {body}
      </svg>
    </div>
  );
}
