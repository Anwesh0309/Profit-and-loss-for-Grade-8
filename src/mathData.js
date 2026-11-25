/* =========================================================================
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

export const WORLD_HINTS = [
  {
    "hint": "Profit = selling price − cost. Loss = cost − selling price."
  },
  {
    "hint": "Compare total sales from all cups with total stand cost."
  },
  {
    "hint": "Profit % = profit ÷ cost price × 100."
  },
  {
    "hint": "Loss % = loss ÷ cost price × 100."
  },
  {
    "hint": "Selling price = cost price × multiplier."
  },
  {
    "hint": "Discount is on marked price. Subtract discount for selling price."
  },
  {
    "hint": "Break-even occurs when total sales equal total costs."
  },
  {
    "hint": "Divide selling price by multiplier to find cost price."
  },
  {
    "hint": "Multiply good items by price, then subtract total purchase cost."
  },
  {
    "hint": "Work out each deal on its own cost price before combining."
  }
];

export const r2 = v => Math.round(v * 100) / 100;
export const money = v => '$' + (Number.isInteger(v) ? v.toLocaleString('en-US') : v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
export const num = v => { const r = r2(v); return Number.isInteger(r) ? r.toLocaleString('en-US') : String(r); };

// Structured 100 Questions (10 worlds × 10 questions)
export const PRACTICE_QUESTIONS = [
  [
    {
      "worldIndex": 0,
      "qNumber": 1,
      "prompt": "Leo buys a toy for $40 and sells for $50. Find profit.",
      "spokenPrompt": "Leo buys a toy for $40 and sells for $50. Find profit.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Profit of $10",
        "Loss of $10",
        "Profit of $20",
        "Break even"
      ],
      "correctIndex": 0,
      "correctValue": "Profit of $10",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "Selling price is higher: $50 − $40 = $10 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 40,
        "rev": 50,
        "costLabel": "$40",
        "revLabel": "$50"
      }
    },
    {
      "worldIndex": 0,
      "qNumber": 2,
      "prompt": "Emma buys a guitar for $60 and sells for $45. Find loss.",
      "spokenPrompt": "Emma buys a guitar for $60 and sells for $45. Find loss.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Profit of $15",
        "Loss of $15",
        "Loss of $20",
        "Break even"
      ],
      "correctIndex": 1,
      "correctValue": "Loss of $15",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "Selling price is lower: $60 − $45 = $15 loss.",
      "diagramData": {
        "type": "balance",
        "cost": 60,
        "rev": 45,
        "costLabel": "$60",
        "revLabel": "$45"
      }
    },
    {
      "worldIndex": 0,
      "qNumber": 3,
      "prompt": "Alex buys a board for $80 and sells for $100. Find profit.",
      "spokenPrompt": "Alex buys a board for $80 and sells for $100. Find profit.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Profit of $20",
        "Loss of $20",
        "Profit of $10",
        "Break even"
      ],
      "correctIndex": 0,
      "correctValue": "Profit of $20",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$100 − $80 = $20 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 80,
        "rev": 100,
        "costLabel": "$80",
        "revLabel": "$100"
      }
    },
    {
      "worldIndex": 0,
      "qNumber": 4,
      "prompt": "Sophia buys a watch for $120 and sells for $90. Find loss.",
      "spokenPrompt": "Sophia buys a watch for $120 and sells for $90. Find loss.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Profit of $30",
        "Loss of $30",
        "Loss of $40",
        "Break even"
      ],
      "correctIndex": 1,
      "correctValue": "Loss of $30",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$120 − $90 = $30 loss.",
      "diagramData": {
        "type": "balance",
        "cost": 120,
        "rev": 90,
        "costLabel": "$120",
        "revLabel": "$90"
      }
    },
    {
      "worldIndex": 0,
      "qNumber": 5,
      "prompt": "Jack buys a camera for $150 and sells for $200. Find profit.",
      "spokenPrompt": "Jack buys a camera for $150 and sells for $200. Find profit.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Loss of $50",
        "Profit of $50",
        "Profit of $40",
        "Break even"
      ],
      "correctIndex": 1,
      "correctValue": "Profit of $50",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$200 − $150 = $50 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 150,
        "rev": 200,
        "costLabel": "$150",
        "revLabel": "$200"
      }
    },
    {
      "worldIndex": 0,
      "qNumber": 6,
      "prompt": "Mia buys a tablet for $200 and sells for $160. Find loss.",
      "spokenPrompt": "Mia buys a tablet for $200 and sells for $160. Find loss.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Loss of $40",
        "Profit of $40",
        "Loss of $30",
        "Break even"
      ],
      "correctIndex": 0,
      "correctValue": "Loss of $40",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$200 − $160 = $40 loss.",
      "diagramData": {
        "type": "balance",
        "cost": 200,
        "rev": 160,
        "costLabel": "$200",
        "revLabel": "$160"
      }
    },
    {
      "worldIndex": 0,
      "qNumber": 7,
      "prompt": "Liam buys headphones for $50 and sells for $65. Find profit.",
      "spokenPrompt": "Liam buys headphones for $50 and sells for $65. Find profit.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Loss of $15",
        "Profit of $10",
        "Profit of $15",
        "Break even"
      ],
      "correctIndex": 2,
      "correctValue": "Profit of $15",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$65 − $50 = $15 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 50,
        "rev": 65,
        "costLabel": "$50",
        "revLabel": "$65"
      }
    },
    {
      "worldIndex": 0,
      "qNumber": 8,
      "prompt": "Ava buys a lamp for $35 and sells for $25. Find loss.",
      "spokenPrompt": "Ava buys a lamp for $35 and sells for $25. Find loss.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Profit of $10",
        "Loss of $10",
        "Loss of $5",
        "Break even"
      ],
      "correctIndex": 1,
      "correctValue": "Loss of $10",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$35 − $25 = $10 loss.",
      "diagramData": {
        "type": "balance",
        "cost": 35,
        "rev": 25,
        "costLabel": "$35",
        "revLabel": "$25"
      }
    },
    {
      "worldIndex": 0,
      "qNumber": 9,
      "prompt": "Noah buys a bike for $180 and sells for $240. Find profit.",
      "spokenPrompt": "Noah buys a bike for $180 and sells for $240. Find profit.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Profit of $60",
        "Loss of $60",
        "Profit of $50",
        "Break even"
      ],
      "correctIndex": 0,
      "correctValue": "Profit of $60",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$240 − $180 = $60 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 180,
        "rev": 240,
        "costLabel": "$180",
        "revLabel": "$240"
      }
    },
    {
      "worldIndex": 0,
      "qNumber": 10,
      "prompt": "Chloe buys a speaker for $75 and sells for $60. Find loss.",
      "spokenPrompt": "Chloe buys a speaker for $75 and sells for $60. Find loss.",
      "hint": "Profit = selling price − cost. Loss = cost − selling price.",
      "spokenHint": "Profit = selling price − cost. Loss = cost − selling price.",
      "options": [
        "Profit of $15",
        "Loss of $20",
        "Loss of $15",
        "Break even"
      ],
      "correctIndex": 2,
      "correctValue": "Loss of $15",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$75 − $60 = $15 loss.",
      "diagramData": {
        "type": "balance",
        "cost": 75,
        "rev": 60,
        "costLabel": "$75",
        "revLabel": "$60"
      }
    }
  ],
  [
    {
      "worldIndex": 1,
      "qNumber": 11,
      "prompt": "Setup costs $30. Total sales are $45. Find profit.",
      "spokenPrompt": "Setup costs $30. Total sales are $45. Find profit.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Profit of $15",
        "Loss of $15",
        "Profit of $10",
        "Break even"
      ],
      "correctIndex": 0,
      "correctValue": "Profit of $15",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$45 sales − $30 cost = $15 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 30,
        "rev": 45,
        "costLabel": "$30",
        "revLabel": "$45"
      }
    },
    {
      "worldIndex": 1,
      "qNumber": 12,
      "prompt": "Supplies cost $50. Sales bring in $35. Find loss.",
      "spokenPrompt": "Supplies cost $50. Sales bring in $35. Find loss.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Profit of $15",
        "Loss of $15",
        "Loss of $20",
        "Break even"
      ],
      "correctIndex": 1,
      "correctValue": "Loss of $15",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$50 cost − $35 sales = $15 loss.",
      "diagramData": {
        "type": "balance",
        "cost": 50,
        "rev": 35,
        "costLabel": "$50",
        "revLabel": "$35"
      }
    },
    {
      "worldIndex": 1,
      "qNumber": 13,
      "prompt": "Costs are $20. 40 cups sell for $1 each. Find profit.",
      "spokenPrompt": "Costs are $20. 40 cups sell for $1 each. Find profit.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Profit of $20",
        "Profit of $10",
        "Loss of $20",
        "Break even"
      ],
      "correctIndex": 0,
      "correctValue": "Profit of $20",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "Sales = 40 × $1 = $40. Profit = $40 − $20 = $20.",
      "diagramData": {
        "type": "balance",
        "cost": 20,
        "rev": 40,
        "costLabel": "$20",
        "revLabel": "$40"
      }
    },
    {
      "worldIndex": 1,
      "qNumber": 14,
      "prompt": "Cakes cost $60 and sell for $85. Find profit.",
      "spokenPrompt": "Cakes cost $60 and sell for $85. Find profit.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Profit of $20",
        "Profit of $25",
        "Loss of $25",
        "Break even"
      ],
      "correctIndex": 1,
      "correctValue": "Profit of $25",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$85 − $60 = $25 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 60,
        "rev": 85,
        "costLabel": "$60",
        "revLabel": "$85"
      }
    },
    {
      "worldIndex": 1,
      "qNumber": 15,
      "prompt": "Bake sale costs $40. Sales bring in $30. Find loss.",
      "spokenPrompt": "Bake sale costs $40. Sales bring in $30. Find loss.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Profit of $10",
        "Loss of $10",
        "Loss of $15",
        "Break even"
      ],
      "correctIndex": 1,
      "correctValue": "Loss of $10",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$40 − $30 = $10 loss.",
      "diagramData": {
        "type": "balance",
        "cost": 40,
        "rev": 30,
        "costLabel": "$40",
        "revLabel": "$30"
      }
    },
    {
      "worldIndex": 1,
      "qNumber": 16,
      "prompt": "Supplies cost $45. 50 cups sell for $1. Find profit.",
      "spokenPrompt": "Supplies cost $45. 50 cups sell for $1. Find profit.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Profit of $5",
        "Loss of $5",
        "Profit of $10",
        "Break even"
      ],
      "correctIndex": 0,
      "correctValue": "Profit of $5",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "Sales = $50. $50 − $45 = $5 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 45,
        "rev": 50,
        "costLabel": "$45",
        "revLabel": "$50"
      }
    },
    {
      "worldIndex": 1,
      "qNumber": 17,
      "prompt": "Craft costs $80 and sells for $110. Find profit.",
      "spokenPrompt": "Craft costs $80 and sells for $110. Find profit.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Profit of $20",
        "Profit of $30",
        "Loss of $30",
        "Break even"
      ],
      "correctIndex": 1,
      "correctValue": "Profit of $30",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$110 − $80 = $30 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 80,
        "rev": 110,
        "costLabel": "$80",
        "revLabel": "$110"
      }
    },
    {
      "worldIndex": 1,
      "qNumber": 18,
      "prompt": "Juice setup costs $70. Sales are $55. Find loss.",
      "spokenPrompt": "Juice setup costs $70. Sales are $55. Find loss.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Loss of $15",
        "Profit of $15",
        "Loss of $20",
        "Break even"
      ],
      "correctIndex": 0,
      "correctValue": "Loss of $15",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$70 − $55 = $15 loss.",
      "diagramData": {
        "type": "balance",
        "cost": 70,
        "rev": 55,
        "costLabel": "$70",
        "revLabel": "$55"
      }
    },
    {
      "worldIndex": 1,
      "qNumber": 19,
      "prompt": "Bracelets cost $25 and sell for $40. Find profit.",
      "spokenPrompt": "Bracelets cost $25 and sell for $40. Find profit.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Profit of $15",
        "Loss of $15",
        "Profit of $10",
        "Break even"
      ],
      "correctIndex": 0,
      "correctValue": "Profit of $15",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$40 − $25 = $15 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 25,
        "rev": 40,
        "costLabel": "$25",
        "revLabel": "$40"
      }
    },
    {
      "worldIndex": 1,
      "qNumber": 20,
      "prompt": "Car wash costs $30 and brings in $80. Find profit.",
      "spokenPrompt": "Car wash costs $30 and brings in $80. Find profit.",
      "hint": "Compare total sales from all cups with total stand cost.",
      "spokenHint": "Compare total sales from all cups with total stand cost.",
      "options": [
        "Profit of $40",
        "Profit of $50",
        "Loss of $50",
        "Break even"
      ],
      "correctIndex": 1,
      "correctValue": "Profit of $50",
      "rule": "✦ PROFIT = SP − CP · LOSS = CP − SP",
      "explanation": "$80 − $30 = $50 profit.",
      "diagramData": {
        "type": "balance",
        "cost": 30,
        "rev": 80,
        "costLabel": "$30",
        "revLabel": "$80"
      }
    }
  ],
  [
    {
      "worldIndex": 2,
      "qNumber": 21,
      "prompt": "Bought for $40 and sold for $50. Find profit %.",
      "spokenPrompt": "Bought for $40 and sold for $50. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "25% profit",
        "20% profit",
        "10% profit",
        "30% profit"
      ],
      "correctIndex": 0,
      "correctValue": "25% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $10. 10 ÷ 40 × 100 = 25% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 40,
        "rev": 50,
        "costLabel": "$40",
        "revLabel": "$50"
      }
    },
    {
      "worldIndex": 2,
      "qNumber": 22,
      "prompt": "Bought for $50 and sold for $60. Find profit %.",
      "spokenPrompt": "Bought for $50 and sold for $60. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "15% profit",
        "20% profit",
        "25% profit",
        "10% profit"
      ],
      "correctIndex": 1,
      "correctValue": "20% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $10. 10 ÷ 50 × 100 = 20% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 50,
        "rev": 60,
        "costLabel": "$50",
        "revLabel": "$60"
      }
    },
    {
      "worldIndex": 2,
      "qNumber": 23,
      "prompt": "Bought for $100 and sold for $130. Find profit %.",
      "spokenPrompt": "Bought for $100 and sold for $130. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "30% profit",
        "25% profit",
        "20% profit",
        "35% profit"
      ],
      "correctIndex": 0,
      "correctValue": "30% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $30. 30 ÷ 100 × 100 = 30% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 100,
        "rev": 130,
        "costLabel": "$100",
        "revLabel": "$130"
      }
    },
    {
      "worldIndex": 2,
      "qNumber": 24,
      "prompt": "Bought for $80 and sold for $100. Find profit %.",
      "spokenPrompt": "Bought for $80 and sold for $100. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "20% profit",
        "25% profit",
        "30% profit",
        "15% profit"
      ],
      "correctIndex": 1,
      "correctValue": "25% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $20. 20 ÷ 80 × 100 = 25% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 80,
        "rev": 100,
        "costLabel": "$80",
        "revLabel": "$100"
      }
    },
    {
      "worldIndex": 2,
      "qNumber": 25,
      "prompt": "Bought for $200 and sold for $250. Find profit %.",
      "spokenPrompt": "Bought for $200 and sold for $250. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "25% profit",
        "20% profit",
        "50% profit",
        "15% profit"
      ],
      "correctIndex": 0,
      "correctValue": "25% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $50. 50 ÷ 200 × 100 = 25% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 200,
        "rev": 250,
        "costLabel": "$200",
        "revLabel": "$250"
      }
    },
    {
      "worldIndex": 2,
      "qNumber": 26,
      "prompt": "Bought for $60 and sold for $90. Find profit %.",
      "spokenPrompt": "Bought for $60 and sold for $90. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "30% profit",
        "40% profit",
        "50% profit",
        "25% profit"
      ],
      "correctIndex": 2,
      "correctValue": "50% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $30. 30 ÷ 60 × 100 = 50% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 60,
        "rev": 90,
        "costLabel": "$60",
        "revLabel": "$90"
      }
    },
    {
      "worldIndex": 2,
      "qNumber": 27,
      "prompt": "Bought for $150 and sold for $180. Find profit %.",
      "spokenPrompt": "Bought for $150 and sold for $180. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "20% profit",
        "25% profit",
        "15% profit",
        "30% profit"
      ],
      "correctIndex": 0,
      "correctValue": "20% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $30. 30 ÷ 150 × 100 = 20% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 150,
        "rev": 180,
        "costLabel": "$150",
        "revLabel": "$180"
      }
    },
    {
      "worldIndex": 2,
      "qNumber": 28,
      "prompt": "Bought for $80 and sold for $120. Find profit %.",
      "spokenPrompt": "Bought for $80 and sold for $120. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "40% profit",
        "50% profit",
        "25% profit",
        "60% profit"
      ],
      "correctIndex": 1,
      "correctValue": "50% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $40. 40 ÷ 80 × 100 = 50% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 80,
        "rev": 120,
        "costLabel": "$80",
        "revLabel": "$120"
      }
    },
    {
      "worldIndex": 2,
      "qNumber": 29,
      "prompt": "Bought for $400 and sold for $440. Find profit %.",
      "spokenPrompt": "Bought for $400 and sold for $440. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "10% profit",
        "15% profit",
        "20% profit",
        "5% profit"
      ],
      "correctIndex": 0,
      "correctValue": "10% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $40. 40 ÷ 400 × 100 = 10% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 400,
        "rev": 440,
        "costLabel": "$400",
        "revLabel": "$440"
      }
    },
    {
      "worldIndex": 2,
      "qNumber": 30,
      "prompt": "Bought for $50 and sold for $75. Find profit %.",
      "spokenPrompt": "Bought for $50 and sold for $75. Find profit %.",
      "hint": "Profit % = profit ÷ cost price × 100.",
      "spokenHint": "Profit % = profit ÷ cost price × 100.",
      "options": [
        "25% profit",
        "35% profit",
        "50% profit",
        "40% profit"
      ],
      "correctIndex": 2,
      "correctValue": "50% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Profit = $25. 25 ÷ 50 × 100 = 50% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 50,
        "rev": 75,
        "costLabel": "$50",
        "revLabel": "$75"
      }
    }
  ],
  [
    {
      "worldIndex": 3,
      "qNumber": 31,
      "prompt": "Bought for $50 and sold for $40. Find loss %.",
      "spokenPrompt": "Bought for $50 and sold for $40. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "20% loss",
        "25% loss",
        "10% loss",
        "15% loss"
      ],
      "correctIndex": 0,
      "correctValue": "20% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $10. 10 ÷ 50 × 100 = 20% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 50,
        "rev": 40,
        "costLabel": "$50",
        "revLabel": "$40"
      }
    },
    {
      "worldIndex": 3,
      "qNumber": 32,
      "prompt": "Bought for $200 and sold for $150. Find loss %.",
      "spokenPrompt": "Bought for $200 and sold for $150. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "20% loss",
        "25% loss",
        "30% loss",
        "15% loss"
      ],
      "correctIndex": 1,
      "correctValue": "25% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $50. 50 ÷ 200 × 100 = 25% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 200,
        "rev": 150,
        "costLabel": "$200",
        "revLabel": "$150"
      }
    },
    {
      "worldIndex": 3,
      "qNumber": 33,
      "prompt": "Bought for $100 and sold for $90. Find loss %.",
      "spokenPrompt": "Bought for $100 and sold for $90. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "10% loss",
        "15% loss",
        "5% loss",
        "20% loss"
      ],
      "correctIndex": 0,
      "correctValue": "10% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $10. 10 ÷ 100 × 100 = 10% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 100,
        "rev": 90,
        "costLabel": "$100",
        "revLabel": "$90"
      }
    },
    {
      "worldIndex": 3,
      "qNumber": 34,
      "prompt": "Bought for $80 and sold for $60. Find loss %.",
      "spokenPrompt": "Bought for $80 and sold for $60. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "20% loss",
        "25% loss",
        "30% loss",
        "15% loss"
      ],
      "correctIndex": 1,
      "correctValue": "25% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $20. 20 ÷ 80 × 100 = 25% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 80,
        "rev": 60,
        "costLabel": "$80",
        "revLabel": "$60"
      }
    },
    {
      "worldIndex": 3,
      "qNumber": 35,
      "prompt": "Bought for $250 and sold for $200. Find loss %.",
      "spokenPrompt": "Bought for $250 and sold for $200. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "20% loss",
        "25% loss",
        "15% loss",
        "30% loss"
      ],
      "correctIndex": 0,
      "correctValue": "20% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $50. 50 ÷ 250 × 100 = 20% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 250,
        "rev": 200,
        "costLabel": "$250",
        "revLabel": "$200"
      }
    },
    {
      "worldIndex": 3,
      "qNumber": 36,
      "prompt": "Bought for $60 and sold for $45. Find loss %.",
      "spokenPrompt": "Bought for $60 and sold for $45. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "15% loss",
        "20% loss",
        "25% loss",
        "30% loss"
      ],
      "correctIndex": 2,
      "correctValue": "25% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $15. 15 ÷ 60 × 100 = 25% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 60,
        "rev": 45,
        "costLabel": "$60",
        "revLabel": "$45"
      }
    },
    {
      "worldIndex": 3,
      "qNumber": 37,
      "prompt": "Bought for $150 and sold for $105. Find loss %.",
      "spokenPrompt": "Bought for $150 and sold for $105. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "30% loss",
        "25% loss",
        "20% loss",
        "35% loss"
      ],
      "correctIndex": 0,
      "correctValue": "30% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $45. 45 ÷ 150 × 100 = 30% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 150,
        "rev": 105,
        "costLabel": "$150",
        "revLabel": "$105"
      }
    },
    {
      "worldIndex": 3,
      "qNumber": 38,
      "prompt": "Bought for $300 and sold for $240. Find loss %.",
      "spokenPrompt": "Bought for $300 and sold for $240. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "15% loss",
        "20% loss",
        "25% loss",
        "30% loss"
      ],
      "correctIndex": 1,
      "correctValue": "20% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $60. 60 ÷ 300 × 100 = 20% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 300,
        "rev": 240,
        "costLabel": "$300",
        "revLabel": "$240"
      }
    },
    {
      "worldIndex": 3,
      "qNumber": 39,
      "prompt": "Bought for $80 and sold for $68. Find loss %.",
      "spokenPrompt": "Bought for $80 and sold for $68. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "15% loss",
        "12% loss",
        "10% loss",
        "20% loss"
      ],
      "correctIndex": 0,
      "correctValue": "15% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $12. 12 ÷ 80 × 100 = 15% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 80,
        "rev": 68,
        "costLabel": "$80",
        "revLabel": "$68"
      }
    },
    {
      "worldIndex": 3,
      "qNumber": 40,
      "prompt": "Bought for $400 and sold for $200. Find loss %.",
      "spokenPrompt": "Bought for $400 and sold for $200. Find loss %.",
      "hint": "Loss % = loss ÷ cost price × 100.",
      "spokenHint": "Loss % = loss ÷ cost price × 100.",
      "options": [
        "40% loss",
        "50% loss",
        "60% loss",
        "30% loss"
      ],
      "correctIndex": 1,
      "correctValue": "50% loss",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Loss = $200. 200 ÷ 400 × 100 = 50% loss.",
      "diagramData": {
        "type": "balance",
        "cost": 400,
        "rev": 200,
        "costLabel": "$400",
        "revLabel": "$200"
      }
    }
  ],
  [
    {
      "worldIndex": 4,
      "qNumber": 41,
      "prompt": "Cost is $80. For 25% profit, find selling price.",
      "spokenPrompt": "Cost is $80. For 25% profit, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$100",
        "$95",
        "$105",
        "$110"
      ],
      "correctIndex": 0,
      "correctValue": "$100",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 1.25. $80 × 1.25 = $100.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$100",
        "col": "#4ade80"
      }
    },
    {
      "worldIndex": 4,
      "qNumber": 42,
      "prompt": "Cost is $50. For 20% profit, find selling price.",
      "spokenPrompt": "Cost is $50. For 20% profit, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$55",
        "$60",
        "$65",
        "$70"
      ],
      "correctIndex": 1,
      "correctValue": "$60",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 1.20. $50 × 1.20 = $60.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$60",
        "col": "#4ade80"
      }
    },
    {
      "worldIndex": 4,
      "qNumber": 43,
      "prompt": "Cost is $200. For 15% loss, find selling price.",
      "spokenPrompt": "Cost is $200. For 15% loss, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$170",
        "$180",
        "$165",
        "$175"
      ],
      "correctIndex": 0,
      "correctValue": "$170",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 0.85. $200 × 0.85 = $170.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$170",
        "col": "#f87171"
      }
    },
    {
      "worldIndex": 4,
      "qNumber": 44,
      "prompt": "Cost is $120. For 10% profit, find selling price.",
      "spokenPrompt": "Cost is $120. For 10% profit, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$130",
        "$132",
        "$140",
        "$128"
      ],
      "correctIndex": 1,
      "correctValue": "$132",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 1.10. $120 × 1.10 = $132.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$132",
        "col": "#4ade80"
      }
    },
    {
      "worldIndex": 4,
      "qNumber": 45,
      "prompt": "Cost is $150. For 20% loss, find selling price.",
      "spokenPrompt": "Cost is $150. For 20% loss, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$120",
        "$125",
        "$115",
        "$130"
      ],
      "correctIndex": 0,
      "correctValue": "$120",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 0.80. $150 × 0.80 = $120.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$120",
        "col": "#f87171"
      }
    },
    {
      "worldIndex": 4,
      "qNumber": 46,
      "prompt": "Cost is $250. For 40% profit, find selling price.",
      "spokenPrompt": "Cost is $250. For 40% profit, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$320",
        "$340",
        "$350",
        "$360"
      ],
      "correctIndex": 2,
      "correctValue": "$350",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 1.40. $250 × 1.40 = $350.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$350",
        "col": "#4ade80"
      }
    },
    {
      "worldIndex": 4,
      "qNumber": 47,
      "prompt": "Cost is $60. For 30% profit, find selling price.",
      "spokenPrompt": "Cost is $60. For 30% profit, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$78",
        "$75",
        "$80",
        "$82"
      ],
      "correctIndex": 0,
      "correctValue": "$78",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 1.30. $60 × 1.30 = $78.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$78",
        "col": "#4ade80"
      }
    },
    {
      "worldIndex": 4,
      "qNumber": 48,
      "prompt": "Cost is $40. For 25% loss, find selling price.",
      "spokenPrompt": "Cost is $40. For 25% loss, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$25",
        "$30",
        "$35",
        "$28"
      ],
      "correctIndex": 1,
      "correctValue": "$30",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 0.75. $40 × 0.75 = $30.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$30",
        "col": "#f87171"
      }
    },
    {
      "worldIndex": 4,
      "qNumber": 49,
      "prompt": "Cost is $300. For 15% profit, find selling price.",
      "spokenPrompt": "Cost is $300. For 15% profit, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$345",
        "$335",
        "$350",
        "$340"
      ],
      "correctIndex": 0,
      "correctValue": "$345",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 1.15. $300 × 1.15 = $345.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$345",
        "col": "#4ade80"
      }
    },
    {
      "worldIndex": 4,
      "qNumber": 50,
      "prompt": "Cost is $160. For 10% loss, find selling price.",
      "spokenPrompt": "Cost is $160. For 10% loss, find selling price.",
      "hint": "Selling price = cost price × multiplier.",
      "spokenHint": "Selling price = cost price × multiplier.",
      "options": [
        "$140",
        "$144",
        "$150",
        "$148"
      ],
      "correctIndex": 1,
      "correctValue": "$144",
      "rule": "✦ SP = CP × MULTIPLIER",
      "explanation": "Multiplier = 0.90. $160 × 0.90 = $144.",
      "diagramData": {
        "type": "tag",
        "label": "SELLING PRICE",
        "value": "$144",
        "col": "#f87171"
      }
    }
  ],
  [
    {
      "worldIndex": 5,
      "qNumber": 51,
      "prompt": "Marked price is $150 with 20% off. Find selling price.",
      "spokenPrompt": "Marked price is $150 with 20% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$120",
        "$125",
        "$130",
        "$115"
      ],
      "correctIndex": 0,
      "correctValue": "$120",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "20% off leaves 80%. $150 × 0.80 = $120.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 20% OFF",
        "value": "$150",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 5,
      "qNumber": 52,
      "prompt": "Marked price is $200 with 15% off. Find selling price.",
      "spokenPrompt": "Marked price is $200 with 15% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$165",
        "$170",
        "$175",
        "$180"
      ],
      "correctIndex": 1,
      "correctValue": "$170",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "15% off leaves 85%. $200 × 0.85 = $170.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 15% OFF",
        "value": "$200",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 5,
      "qNumber": 53,
      "prompt": "Marked price is $80 with 25% off. Find selling price.",
      "spokenPrompt": "Marked price is $80 with 25% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$60",
        "$55",
        "$65",
        "$70"
      ],
      "correctIndex": 0,
      "correctValue": "$60",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "25% off leaves 75%. $80 × 0.75 = $60.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 25% OFF",
        "value": "$80",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 5,
      "qNumber": 54,
      "prompt": "Marked price is $120 with 30% off. Find selling price.",
      "spokenPrompt": "Marked price is $120 with 30% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$80",
        "$84",
        "$88",
        "$90"
      ],
      "correctIndex": 1,
      "correctValue": "$84",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "30% off leaves 70%. $120 × 0.70 = $84.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 30% OFF",
        "value": "$120",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 5,
      "qNumber": 55,
      "prompt": "Marked price is $60 with 10% off. Find selling price.",
      "spokenPrompt": "Marked price is $60 with 10% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$54",
        "$50",
        "$52",
        "$56"
      ],
      "correctIndex": 0,
      "correctValue": "$54",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "10% off leaves 90%. $60 × 0.90 = $54.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 10% OFF",
        "value": "$60",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 5,
      "qNumber": 56,
      "prompt": "Marked price is $250 with 40% off. Find selling price.",
      "spokenPrompt": "Marked price is $250 with 40% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$140",
        "$150",
        "$160",
        "$145"
      ],
      "correctIndex": 1,
      "correctValue": "$150",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "40% off leaves 60%. $250 × 0.60 = $150.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 40% OFF",
        "value": "$250",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 5,
      "qNumber": 57,
      "prompt": "Marked price is $100 with 35% off. Find selling price.",
      "spokenPrompt": "Marked price is $100 with 35% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$65",
        "$60",
        "$70",
        "$75"
      ],
      "correctIndex": 0,
      "correctValue": "$65",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "35% off leaves 65%. $100 × 0.65 = $65.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 35% OFF",
        "value": "$100",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 5,
      "qNumber": 58,
      "prompt": "Marked price is $160 with 25% off. Find selling price.",
      "spokenPrompt": "Marked price is $160 with 25% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$115",
        "$120",
        "$125",
        "$110"
      ],
      "correctIndex": 1,
      "correctValue": "$120",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "25% off leaves 75%. $160 × 0.75 = $120.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 25% OFF",
        "value": "$160",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 5,
      "qNumber": 59,
      "prompt": "Marked price is $300 with 20% off. Find selling price.",
      "spokenPrompt": "Marked price is $300 with 20% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$240",
        "$250",
        "$230",
        "$260"
      ],
      "correctIndex": 0,
      "correctValue": "$240",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "20% off leaves 80%. $300 × 0.80 = $240.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 20% OFF",
        "value": "$300",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 5,
      "qNumber": 60,
      "prompt": "Marked price is $90 with 50% off. Find selling price.",
      "spokenPrompt": "Marked price is $90 with 50% off. Find selling price.",
      "hint": "Discount is on marked price. Subtract discount for selling price.",
      "spokenHint": "Discount is on marked price. Subtract discount for selling price.",
      "options": [
        "$40",
        "$45",
        "$50",
        "$35"
      ],
      "correctIndex": 1,
      "correctValue": "$45",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "50% off leaves 50%. $90 × 0.50 = $45.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED · 50% OFF",
        "value": "$90",
        "col": "#facc15"
      }
    }
  ],
  [
    {
      "worldIndex": 6,
      "qNumber": 61,
      "prompt": "Cost is $40. Cups sell for $1. Find break-even cups.",
      "spokenPrompt": "Cost is $40. Cups sell for $1. Find break-even cups.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "40",
        "30",
        "50",
        "35"
      ],
      "correctIndex": 0,
      "correctValue": "40",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "Break even when sales = cost: $40 ÷ $1 = 40 cups.",
      "diagramData": {
        "type": "balance",
        "cost": 40,
        "rev": 40,
        "costLabel": "$40",
        "revLabel": "?"
      }
    },
    {
      "worldIndex": 6,
      "qNumber": 62,
      "prompt": "Cost is $60. Cups sell for $1.50. Find break-even cups.",
      "spokenPrompt": "Cost is $60. Cups sell for $1.50. Find break-even cups.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "35",
        "40",
        "45",
        "50"
      ],
      "correctIndex": 1,
      "correctValue": "40",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "$60 ÷ $1.50 = 40 cups.",
      "diagramData": {
        "type": "balance",
        "cost": 60,
        "rev": 60,
        "costLabel": "$60",
        "revLabel": "?"
      }
    },
    {
      "worldIndex": 6,
      "qNumber": 63,
      "prompt": "Supplies cost $50. Cupcakes are $2. Find break-even.",
      "spokenPrompt": "Supplies cost $50. Cupcakes are $2. Find break-even.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "25",
        "20",
        "30",
        "35"
      ],
      "correctIndex": 0,
      "correctValue": "25",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "$50 ÷ $2 = 25 cupcakes.",
      "diagramData": {
        "type": "balance",
        "cost": 50,
        "rev": 50,
        "costLabel": "$50",
        "revLabel": "?"
      }
    },
    {
      "worldIndex": 6,
      "qNumber": 64,
      "prompt": "Setup is $75. Smoothies are $2.50. Find break-even.",
      "spokenPrompt": "Setup is $75. Smoothies are $2.50. Find break-even.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "25",
        "30",
        "35",
        "40"
      ],
      "correctIndex": 1,
      "correctValue": "30",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "$75 ÷ $2.50 = 30 smoothies.",
      "diagramData": {
        "type": "balance",
        "cost": 75,
        "rev": 75,
        "costLabel": "$75",
        "revLabel": "?"
      }
    },
    {
      "worldIndex": 6,
      "qNumber": 65,
      "prompt": "Craft costs $36. Cards sell for $3. Find break-even.",
      "spokenPrompt": "Craft costs $36. Cards sell for $3. Find break-even.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "12",
        "10",
        "15",
        "18"
      ],
      "correctIndex": 0,
      "correctValue": "12",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "$36 ÷ $3 = 12 cards.",
      "diagramData": {
        "type": "balance",
        "cost": 36,
        "rev": 36,
        "costLabel": "$36",
        "revLabel": "?"
      }
    },
    {
      "worldIndex": 6,
      "qNumber": 66,
      "prompt": "Supplies cost $48. Car washes are $4. Find break-even.",
      "spokenPrompt": "Supplies cost $48. Car washes are $4. Find break-even.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "10",
        "12",
        "14",
        "16"
      ],
      "correctIndex": 1,
      "correctValue": "12",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "$48 ÷ $4 = 12 washes.",
      "diagramData": {
        "type": "balance",
        "cost": 48,
        "rev": 48,
        "costLabel": "$48",
        "revLabel": "?"
      }
    },
    {
      "worldIndex": 6,
      "qNumber": 67,
      "prompt": "Setup costs $80. Drinks sell for $2. Find break-even.",
      "spokenPrompt": "Setup costs $80. Drinks sell for $2. Find break-even.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "40",
        "35",
        "45",
        "50"
      ],
      "correctIndex": 0,
      "correctValue": "40",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "$80 ÷ $2 = 40 cups.",
      "diagramData": {
        "type": "balance",
        "cost": 80,
        "rev": 80,
        "costLabel": "$80",
        "revLabel": "?"
      }
    },
    {
      "worldIndex": 6,
      "qNumber": 68,
      "prompt": "Setup is $90. Bracelets are $5. Find break-even.",
      "spokenPrompt": "Setup is $90. Bracelets are $5. Find break-even.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "15",
        "18",
        "20",
        "22"
      ],
      "correctIndex": 1,
      "correctValue": "18",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "$90 ÷ $5 = 18 bracelets.",
      "diagramData": {
        "type": "balance",
        "cost": 90,
        "rev": 90,
        "costLabel": "$90",
        "revLabel": "?"
      }
    },
    {
      "worldIndex": 6,
      "qNumber": 69,
      "prompt": "Setup costs $100. Meals are $4. Find break-even.",
      "spokenPrompt": "Setup costs $100. Meals are $4. Find break-even.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "25",
        "20",
        "30",
        "35"
      ],
      "correctIndex": 0,
      "correctValue": "25",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "$100 ÷ $4 = 25 burgers.",
      "diagramData": {
        "type": "balance",
        "cost": 100,
        "rev": 100,
        "costLabel": "$100",
        "revLabel": "?"
      }
    },
    {
      "worldIndex": 6,
      "qNumber": 70,
      "prompt": "Setup is $120. Tickets are $6. Find break-even.",
      "spokenPrompt": "Setup is $120. Tickets are $6. Find break-even.",
      "hint": "Break-even occurs when total sales equal total costs.",
      "spokenHint": "Break-even occurs when total sales equal total costs.",
      "options": [
        "15",
        "20",
        "25",
        "30"
      ],
      "correctIndex": 1,
      "correctValue": "20",
      "rule": "✦ BREAK EVEN: SALES = COSTS",
      "explanation": "$120 ÷ $6 = 20 tickets.",
      "diagramData": {
        "type": "balance",
        "cost": 120,
        "rev": 120,
        "costLabel": "$120",
        "revLabel": "?"
      }
    }
  ],
  [
    {
      "worldIndex": 7,
      "qNumber": 71,
      "prompt": "Sold for $120 with 20% profit. Find the cost price.",
      "spokenPrompt": "Sold for $120 with 20% profit. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$100",
        "$96",
        "$105",
        "$90"
      ],
      "correctIndex": 0,
      "correctValue": "$100",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $120 ÷ 1.20 = $100.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Bike",
            "cp": "?",
            "sp": "$120",
            "note": "+20% profit",
            "noteCol": "#4ade80"
          }
        ]
      }
    },
    {
      "worldIndex": 7,
      "qNumber": 72,
      "prompt": "Sold for $120 with 20% loss. Find the cost price.",
      "spokenPrompt": "Sold for $120 with 20% loss. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$140",
        "$150",
        "$144",
        "$160"
      ],
      "correctIndex": 1,
      "correctValue": "$150",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $120 ÷ 0.80 = $150.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Phone",
            "cp": "?",
            "sp": "$120",
            "note": "−20% loss",
            "noteCol": "#f87171"
          }
        ]
      }
    },
    {
      "worldIndex": 7,
      "qNumber": 73,
      "prompt": "Sold for $84 with 40% profit. Find the cost price.",
      "spokenPrompt": "Sold for $84 with 40% profit. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$60",
        "$55",
        "$64",
        "$50"
      ],
      "correctIndex": 0,
      "correctValue": "$60",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $84 ÷ 1.40 = $60.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Jacket",
            "cp": "?",
            "sp": "$84",
            "note": "+40% profit",
            "noteCol": "#4ade80"
          }
        ]
      }
    },
    {
      "worldIndex": 7,
      "qNumber": 74,
      "prompt": "Sold for $240 with 25% loss. Find the cost price.",
      "spokenPrompt": "Sold for $240 with 25% loss. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$300",
        "$320",
        "$310",
        "$325"
      ],
      "correctIndex": 1,
      "correctValue": "$320",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $240 ÷ 0.75 = $320.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Camera",
            "cp": "?",
            "sp": "$240",
            "note": "−25% loss",
            "noteCol": "#f87171"
          }
        ]
      }
    },
    {
      "worldIndex": 7,
      "qNumber": 75,
      "prompt": "Sold for $180 with 50% profit. Find the cost price.",
      "spokenPrompt": "Sold for $180 with 50% profit. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$120",
        "$110",
        "$130",
        "$90"
      ],
      "correctIndex": 0,
      "correctValue": "$120",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $180 ÷ 1.50 = $120.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Guitar",
            "cp": "?",
            "sp": "$180",
            "note": "+50% profit",
            "noteCol": "#4ade80"
          }
        ]
      }
    },
    {
      "worldIndex": 7,
      "qNumber": 76,
      "prompt": "Sold for $90 with 10% loss. Find the cost price.",
      "spokenPrompt": "Sold for $90 with 10% loss. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$95",
        "$100",
        "$105",
        "$110"
      ],
      "correctIndex": 1,
      "correctValue": "$100",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $90 ÷ 0.90 = $100.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Tablet",
            "cp": "?",
            "sp": "$90",
            "note": "−10% loss",
            "noteCol": "#f87171"
          }
        ]
      }
    },
    {
      "worldIndex": 7,
      "qNumber": 77,
      "prompt": "Sold for $260 with 30% profit. Find the cost price.",
      "spokenPrompt": "Sold for $260 with 30% profit. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$200",
        "$190",
        "$210",
        "$180"
      ],
      "correctIndex": 0,
      "correctValue": "$200",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $260 ÷ 1.30 = $200.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Watch",
            "cp": "?",
            "sp": "$260",
            "note": "+30% profit",
            "noteCol": "#4ade80"
          }
        ]
      }
    },
    {
      "worldIndex": 7,
      "qNumber": 78,
      "prompt": "Sold for $160 with 20% loss. Find the cost price.",
      "spokenPrompt": "Sold for $160 with 20% loss. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$190",
        "$200",
        "$180",
        "$210"
      ],
      "correctIndex": 1,
      "correctValue": "$200",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $160 ÷ 0.80 = $200.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Desk",
            "cp": "?",
            "sp": "$160",
            "note": "−20% loss",
            "noteCol": "#f87171"
          }
        ]
      }
    },
    {
      "worldIndex": 7,
      "qNumber": 79,
      "prompt": "Sold for $300 with 25% profit. Find the cost price.",
      "spokenPrompt": "Sold for $300 with 25% profit. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$240",
        "$230",
        "$250",
        "$225"
      ],
      "correctIndex": 0,
      "correctValue": "$240",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $300 ÷ 1.25 = $240.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Drone",
            "cp": "?",
            "sp": "$300",
            "note": "+25% profit",
            "noteCol": "#4ade80"
          }
        ]
      }
    },
    {
      "worldIndex": 7,
      "qNumber": 80,
      "prompt": "Sold for $72 with 20% profit. Find the cost price.",
      "spokenPrompt": "Sold for $72 with 20% profit. Find the cost price.",
      "hint": "Divide selling price by multiplier to find cost price.",
      "spokenHint": "Divide selling price by multiplier to find cost price.",
      "options": [
        "$55",
        "$60",
        "$65",
        "$50"
      ],
      "correctIndex": 1,
      "correctValue": "$60",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Cost = $72 ÷ 1.20 = $60.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Speaker",
            "cp": "?",
            "sp": "$72",
            "note": "+20% profit",
            "noteCol": "#4ade80"
          }
        ]
      }
    }
  ],
  [
    {
      "worldIndex": 8,
      "qNumber": 81,
      "prompt": "Buy 50 for $40. 10 spoil, sell 40 for $1.50. Find profit %.",
      "spokenPrompt": "Buy 50 for $40. 10 spoil, sell 40 for $1.50. Find profit %.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "50% profit",
        "40% profit",
        "25% profit",
        "60% profit"
      ],
      "correctIndex": 0,
      "correctValue": "50% profit",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 40 × $1.50 = $60. Profit = $20. 20 ÷ 40 × 100 = 50% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 40,
        "rev": 60,
        "costLabel": "$40",
        "revLabel": "$60"
      }
    },
    {
      "worldIndex": 8,
      "qNumber": 82,
      "prompt": "Buy 30 for $15. 6 spoil, sell 24 for $1. Find profit %.",
      "spokenPrompt": "Buy 30 for $15. 6 spoil, sell 24 for $1. Find profit %.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "50% profit",
        "60% profit",
        "40% profit",
        "70% profit"
      ],
      "correctIndex": 1,
      "correctValue": "60% profit",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 24 × $1 = $24. Profit = $9. 9 ÷ 15 × 100 = 60% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 15,
        "rev": 24,
        "costLabel": "$15",
        "revLabel": "$24"
      }
    },
    {
      "worldIndex": 8,
      "qNumber": 83,
      "prompt": "Buy 40 for $20. Sell all 40 for $0.75. Find profit %.",
      "spokenPrompt": "Buy 40 for $20. Sell all 40 for $0.75. Find profit %.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "50% profit",
        "25% profit",
        "40% profit",
        "30% profit"
      ],
      "correctIndex": 0,
      "correctValue": "50% profit",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 40 × $0.75 = $30. Profit = $10. 10 ÷ 20 × 100 = 50% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 20,
        "rev": 30,
        "costLabel": "$20",
        "revLabel": "$30"
      }
    },
    {
      "worldIndex": 8,
      "qNumber": 84,
      "prompt": "Buy 50 for $25. 10 spoil, sell 40 for $0.75. Find profit %.",
      "spokenPrompt": "Buy 50 for $25. 10 spoil, sell 40 for $0.75. Find profit %.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "15% profit",
        "20% profit",
        "25% profit",
        "10% profit"
      ],
      "correctIndex": 1,
      "correctValue": "20% profit",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 40 × $0.75 = $30. Profit = $5. 5 ÷ 25 × 100 = 20% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 25,
        "rev": 30,
        "costLabel": "$25",
        "revLabel": "$30"
      }
    },
    {
      "worldIndex": 8,
      "qNumber": 85,
      "prompt": "Buy 20 for $20. 5 spoil, sell 15 for $2. Find profit %.",
      "spokenPrompt": "Buy 20 for $20. 5 spoil, sell 15 for $2. Find profit %.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "50% profit",
        "40% profit",
        "60% profit",
        "25% profit"
      ],
      "correctIndex": 0,
      "correctValue": "50% profit",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 15 × $2 = $30. Profit = $10. 10 ÷ 20 × 100 = 50% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 20,
        "rev": 30,
        "costLabel": "$20",
        "revLabel": "$30"
      }
    },
    {
      "worldIndex": 8,
      "qNumber": 86,
      "prompt": "Buy 40 for $40. 8 spoil, sell 32 for $1.50. Find profit %.",
      "spokenPrompt": "Buy 40 for $40. 8 spoil, sell 32 for $1.50. Find profit %.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "15% profit",
        "20% profit",
        "25% profit",
        "10% profit"
      ],
      "correctIndex": 1,
      "correctValue": "20% profit",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 32 × $1.50 = $48. Profit = $8. 8 ÷ 40 × 100 = 20% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 40,
        "rev": 48,
        "costLabel": "$40",
        "revLabel": "$48"
      }
    },
    {
      "worldIndex": 8,
      "qNumber": 87,
      "prompt": "Buy 50 for $20. 10 break, sell 40 for $0.60. Find profit %.",
      "spokenPrompt": "Buy 50 for $20. 10 break, sell 40 for $0.60. Find profit %.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "20% profit",
        "15% profit",
        "25% profit",
        "30% profit"
      ],
      "correctIndex": 0,
      "correctValue": "20% profit",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 40 × $0.60 = $24. Profit = $4. 4 ÷ 20 × 100 = 20% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 20,
        "rev": 24,
        "costLabel": "$20",
        "revLabel": "$24"
      }
    },
    {
      "worldIndex": 8,
      "qNumber": 88,
      "prompt": "Buy 30 for $60. 6 wilt, sell 24 for $2.50. Find result.",
      "spokenPrompt": "Buy 30 for $60. 6 wilt, sell 24 for $2.50. Find result.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "Profit of $10",
        "Break even",
        "Loss of $10",
        "Profit of $5"
      ],
      "correctIndex": 1,
      "correctValue": "Break even",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 24 × $2.50 = $60. Sales equal cost: Break even!",
      "diagramData": {
        "type": "balance",
        "cost": 60,
        "rev": 60,
        "costLabel": "$60",
        "revLabel": "$60"
      }
    },
    {
      "worldIndex": 8,
      "qNumber": 89,
      "prompt": "Buy 100 for $40. 20 leak, sell 80 for $0.60. Find profit %.",
      "spokenPrompt": "Buy 100 for $40. 20 leak, sell 80 for $0.60. Find profit %.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "20% profit",
        "15% profit",
        "25% profit",
        "10% profit"
      ],
      "correctIndex": 0,
      "correctValue": "20% profit",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 80 × $0.60 = $48. Profit = $8. 8 ÷ 40 × 100 = 20% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 40,
        "rev": 48,
        "costLabel": "$40",
        "revLabel": "$48"
      }
    },
    {
      "worldIndex": 8,
      "qNumber": 90,
      "prompt": "Buy 50 for $100. 10 damaged, sell 40 for $3. Find profit %.",
      "spokenPrompt": "Buy 50 for $100. 10 damaged, sell 40 for $3. Find profit %.",
      "hint": "Multiply good items by price, then subtract total purchase cost.",
      "spokenHint": "Multiply good items by price, then subtract total purchase cost.",
      "options": [
        "15% profit",
        "20% profit",
        "25% profit",
        "30% profit"
      ],
      "correctIndex": 1,
      "correctValue": "20% profit",
      "rule": "✦ TOTAL SALES − TOTAL COST",
      "explanation": "Sales = 40 × $3 = $120. Profit = $20. 20 ÷ 100 × 100 = 20% profit.",
      "diagramData": {
        "type": "balance",
        "cost": 100,
        "rev": 120,
        "costLabel": "$100",
        "revLabel": "$120"
      }
    }
  ],
  [
    {
      "worldIndex": 9,
      "qNumber": 91,
      "prompt": "Sell two for $120 each: at +20% and -20%. Find result.",
      "spokenPrompt": "Sell two for $120 each: at +20% and -20%. Find result.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "Loss of $10",
        "Break even",
        "Profit of $10",
        "Loss of $20"
      ],
      "correctIndex": 0,
      "correctValue": "Loss of $10",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Costs: $120 ÷ 1.2 = $100 and $120 ÷ 0.8 = $150. Total cost $250, sales $240 → $10 loss.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Bike A",
            "cp": "$100",
            "sp": "$120",
            "note": "+20% profit",
            "noteCol": "#4ade80"
          },
          {
            "name": "Bike B",
            "cp": "$150",
            "sp": "$120",
            "note": "−20% loss",
            "noteCol": "#f87171"
          }
        ]
      }
    },
    {
      "worldIndex": 9,
      "qNumber": 92,
      "prompt": "Cost is $120, marked at $160 with 10% off. Find profit %.",
      "spokenPrompt": "Cost is $120, marked at $160 with 10% off. Find profit %.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "15% profit",
        "20% profit",
        "25% profit",
        "10% profit"
      ],
      "correctIndex": 1,
      "correctValue": "20% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "Selling price = $160 × 0.90 = $144. Profit = $24. 24 ÷ 120 × 100 = 20% profit.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Watch",
            "cp": "$120",
            "sp": "$144",
            "note": "10% off marked",
            "noteCol": "#facc15"
          }
        ]
      }
    },
    {
      "worldIndex": 9,
      "qNumber": 93,
      "prompt": "Sell two for $150 each: at +25% and -25%. Find result.",
      "spokenPrompt": "Sell two for $150 each: at +25% and -25%. Find result.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "Loss of $20",
        "Break even",
        "Profit of $20",
        "Loss of $10"
      ],
      "correctIndex": 0,
      "correctValue": "Loss of $20",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Costs: $150 ÷ 1.25 = $120 and $150 ÷ 0.75 = $200. Total cost $320, sales $300 → $20 loss.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Guitar A",
            "cp": "$120",
            "sp": "$150",
            "note": "+25% profit",
            "noteCol": "#4ade80"
          },
          {
            "name": "Guitar B",
            "cp": "$200",
            "sp": "$150",
            "note": "−25% loss",
            "noteCol": "#f87171"
          }
        ]
      }
    },
    {
      "worldIndex": 9,
      "qNumber": 94,
      "prompt": "Cost is $80, marked at $120 with 25% off. Find profit %.",
      "spokenPrompt": "Cost is $80, marked at $120 with 25% off. Find profit %.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "10% profit",
        "12.5% profit",
        "15% profit",
        "20% profit"
      ],
      "correctIndex": 1,
      "correctValue": "12.5% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "SP = $120 × 0.75 = $90. Profit = $10. 10 ÷ 80 × 100 = 12.5% profit.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Item",
            "cp": "$80",
            "sp": "$90",
            "note": "25% off marked",
            "noteCol": "#facc15"
          }
        ]
      }
    },
    {
      "worldIndex": 9,
      "qNumber": 95,
      "prompt": "Sell two for $240 each: at +20% and -20%. Find result.",
      "spokenPrompt": "Sell two for $240 each: at +20% and -20%. Find result.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "Loss of $20",
        "Break even",
        "Profit of $20",
        "Loss of $40"
      ],
      "correctIndex": 0,
      "correctValue": "Loss of $20",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Costs: $240 ÷ 1.2 = $200 and $240 ÷ 0.8 = $300. Total cost $500, sales $480 → $20 loss.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Art A",
            "cp": "$200",
            "sp": "$240",
            "note": "+20% profit",
            "noteCol": "#4ade80"
          },
          {
            "name": "Art B",
            "cp": "$300",
            "sp": "$240",
            "note": "−20% loss",
            "noteCol": "#f87171"
          }
        ]
      }
    },
    {
      "worldIndex": 9,
      "qNumber": 96,
      "prompt": "Cost is $50, marked at $80 with 25% off. Find profit %.",
      "spokenPrompt": "Cost is $50, marked at $80 with 25% off. Find profit %.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "15% profit",
        "20% profit",
        "25% profit",
        "30% profit"
      ],
      "correctIndex": 1,
      "correctValue": "20% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "SP = $80 × 0.75 = $60. Profit = $10. 10 ÷ 50 × 100 = 20% profit.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Shoes",
            "cp": "$50",
            "sp": "$60",
            "note": "25% off marked",
            "noteCol": "#facc15"
          }
        ]
      }
    },
    {
      "worldIndex": 9,
      "qNumber": 97,
      "prompt": "Sell two for $300 each: at +50% and -50%. Find result.",
      "spokenPrompt": "Sell two for $300 each: at +50% and -50%. Find result.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "Loss of $200",
        "Break even",
        "Loss of $100",
        "Profit of $100"
      ],
      "correctIndex": 0,
      "correctValue": "Loss of $200",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Costs: $300 ÷ 1.5 = $200 and $300 ÷ 0.5 = $600. Total cost $800, sales $600 → $200 loss.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Phone A",
            "cp": "$200",
            "sp": "$300",
            "note": "+50% profit",
            "noteCol": "#4ade80"
          },
          {
            "name": "Phone B",
            "cp": "$600",
            "sp": "$300",
            "note": "−50% loss",
            "noteCol": "#f87171"
          }
        ]
      }
    },
    {
      "worldIndex": 9,
      "qNumber": 98,
      "prompt": "Want 20% profit on $100 with 20% off marked. Find marked.",
      "spokenPrompt": "Want 20% profit on $100 with 20% off marked. Find marked.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "$140",
        "$150",
        "$160",
        "$145"
      ],
      "correctIndex": 1,
      "correctValue": "$150",
      "rule": "✦ DISCOUNT IS ON THE MARKED PRICE",
      "explanation": "SP needed = $100 × 1.20 = $120. Marked = $120 ÷ 0.80 = $150.",
      "diagramData": {
        "type": "tag",
        "label": "MARKED PRICE",
        "value": "$150",
        "col": "#facc15"
      }
    },
    {
      "worldIndex": 9,
      "qNumber": 99,
      "prompt": "Cost is $120, marked at $200 with 10% off. Find profit %.",
      "spokenPrompt": "Cost is $120, marked at $200 with 10% off. Find profit %.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "50% profit",
        "40% profit",
        "45% profit",
        "60% profit"
      ],
      "correctIndex": 0,
      "correctValue": "50% profit",
      "rule": "✦ % IS ALWAYS ON THE COST PRICE",
      "explanation": "SP = $200 × 0.90 = $180. Profit = $60. 60 ÷ 120 × 100 = 50% profit.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Item",
            "cp": "$120",
            "sp": "$180",
            "note": "10% off marked",
            "noteCol": "#facc15"
          }
        ]
      }
    },
    {
      "worldIndex": 9,
      "qNumber": 100,
      "prompt": "Sell two for $99 each: at +10% and -10%. Find result.",
      "spokenPrompt": "Sell two for $99 each: at +10% and -10%. Find result.",
      "hint": "Work out each deal on its own cost price before combining.",
      "spokenHint": "Work out each deal on its own cost price before combining.",
      "options": [
        "Loss of $2",
        "Break even",
        "Profit of $2",
        "Loss of $4"
      ],
      "correctIndex": 0,
      "correctValue": "Loss of $2",
      "rule": "✦ CP = SP ÷ MULTIPLIER",
      "explanation": "Costs: $99 ÷ 1.1 = $90 and $99 ÷ 0.9 = $110. Total cost $200, sales $198 → $2 loss.",
      "diagramData": {
        "type": "deal",
        "items": [
          {
            "name": "Table A",
            "cp": "$90",
            "sp": "$99",
            "note": "+10% profit",
            "noteCol": "#4ade80"
          },
          {
            "name": "Table B",
            "cp": "$110",
            "sp": "$99",
            "note": "−10% loss",
            "noteCol": "#f87171"
          }
        ]
      }
    }
  ]
];

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
