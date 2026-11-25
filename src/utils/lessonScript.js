/* =========================================================================
   LESSON SCRIPT — single source of truth for every spoken line.
   ---------------------------------------------------------------------------
   • UI components DISPLAY these exact strings.
   • src/utils/narration.js wraps them in styled segments for playback.
   • scripts/generate_audio.js reads ALL_PHRASES to pre-generate the MP3s.
   Because all three read the same strings, on-screen text and audio can
   never drift apart (1:1 parity).
   ========================================================================= */

export const WONDER = {
  paragraph: "Leo sells two old bikes for $120 each: at +20% and -20%. Did he break even?",
  question: "How can a 20% profit and a 20% loss leave him with less money?"
};

export const STORY = [
  { body: "Cost price is what the seller paid. Selling price is what the customer pays. Higher selling price means profit.", style: 'statement' },
  { body: "Profit equals selling price minus cost price. Loss equals cost price minus selling price. Equal prices break even.", style: 'emphasis' },
  { body: "Profit and loss percentages are always on the cost price: profit divided by cost price, times 100.", style: 'statement' },
  { body: "To find selling price, use a multiplier: for 25% profit, multiply by 1.25. Divide to find cost.", style: 'thinking' },
  { body: "Discounts are on the marked price, but profit is always on the cost price.", style: 'emphasis' },
  { body: "To break even, total sales must equal total costs. Every extra sale is profit.", style: 'statement' },
  { body: "Leo paid $250 and received $240. Because the cost prices differed, he lost $10!", style: 'encouragement' },
  { body: "You are ready! Step into the lab to price products and master profit and loss.", style: 'celebration' }
];

export const SIMULATE = {
  1: "Run Leo's lemonade stand! Adjust price or cups to balance profit and loss.",
  2: "You are the shopkeeper! Build the price tag for the target profit or loss.",
  3: "Solve real business puzzles! Work backwards to cost prices."
};

export const SIMULATE_GUIDANCE = [
  "Change price per cup until Leo makes a profit of $20.",
  "Change cups sold until Leo breaks even with no profit or loss.",
  "Find the price per cup that gives a loss of exactly 25%.",
  "Set the price tag for a 25% profit on the helmet.",
  "Set the price tag so the phone sells at a 12% loss.",
  "Find marked price for 20% profit after a 10% discount.",
  "Find each bike cost price and the overall result.",
  "Work backwards from $84 to find the original cost price.",
  "Mia sells 40 mangoes for $1.50 each. Find the profit %."
];
export const SIMULATE_HINTS = [
  "Leo needs $60 sales: $60 ÷ 50 cups = $1.20 per cup.",
  "Break even: $40 ÷ $0.50 = 80 cups.",
  "25% loss on $60 is $15: sales must be $45.",
  "25% profit multiplier 1.25: $80 × 1.25 = $100.",
  "12% loss multiplier 0.88: $250 × 0.88 = $220.",
  "Selling price is $144: $144 ÷ 0.90 = $160 marked.",
  "Bike A cost $100, Bike B cost $150. Total cost was $250.",
  "Cost price: $84 ÷ 1.40 = $60.",
  "40 mangoes × $1.50 = $60 sales, giving $20 profit."
];

export const REFLECT = {
  question: "Why are profit and loss percentages worked out on the cost price? Explain to Robo!"
};

export const FEEDBACK = {
  splitDone: "Awesome! Your lemonade stand numbers are perfect!",
  buildDone: "Great pricing! That tag is exactly right!",
  reverseDone: "Brilliant! You cracked the business puzzle!",
  tryAgain: "Not quite. Try again!",
  practiceCorrect: "Correct! Excellent work with profit and loss!",
  practiceWrong: "Not quite!",
  lessonDone: "Outstanding reflection! Lesson complete!"
};

export const PRACTICE_HINTS = [
  "Profit = selling price − cost. Loss = cost − selling price.",
  "Compare total sales from all cups with total stand cost.",
  "Profit % = profit ÷ cost price × 100.",
  "Loss % = loss ÷ cost price × 100.",
  "Selling price = cost price × multiplier.",
  "Discount is on marked price. Subtract discount for selling price.",
  "Break-even occurs when total sales equal total costs.",
  "Divide selling price by multiplier to find cost price.",
  "Multiply good items by price, then subtract total purchase cost.",
  "Work out each deal on its own cost price before combining."
];
export const PRACTICE_QUESTIONS_TEXT = [
  "Leo buys a toy for $40 and sells for $50. Find profit.",
  "Emma buys a guitar for $60 and sells for $45. Find loss.",
  "Alex buys a board for $80 and sells for $100. Find profit.",
  "Sophia buys a watch for $120 and sells for $90. Find loss.",
  "Jack buys a camera for $150 and sells for $200. Find profit.",
  "Mia buys a tablet for $200 and sells for $160. Find loss.",
  "Liam buys headphones for $50 and sells for $65. Find profit.",
  "Ava buys a lamp for $35 and sells for $25. Find loss.",
  "Noah buys a bike for $180 and sells for $240. Find profit.",
  "Chloe buys a speaker for $75 and sells for $60. Find loss.",
  "Setup costs $30. Total sales are $45. Find profit.",
  "Supplies cost $50. Sales bring in $35. Find loss.",
  "Costs are $20. 40 cups sell for $1 each. Find profit.",
  "Cakes cost $60 and sell for $85. Find profit.",
  "Bake sale costs $40. Sales bring in $30. Find loss.",
  "Supplies cost $45. 50 cups sell for $1. Find profit.",
  "Craft costs $80 and sells for $110. Find profit.",
  "Juice setup costs $70. Sales are $55. Find loss.",
  "Bracelets cost $25 and sell for $40. Find profit.",
  "Car wash costs $30 and brings in $80. Find profit.",
  "Bought for $40 and sold for $50. Find profit %.",
  "Bought for $50 and sold for $60. Find profit %.",
  "Bought for $100 and sold for $130. Find profit %.",
  "Bought for $80 and sold for $100. Find profit %.",
  "Bought for $200 and sold for $250. Find profit %.",
  "Bought for $60 and sold for $90. Find profit %.",
  "Bought for $150 and sold for $180. Find profit %.",
  "Bought for $80 and sold for $120. Find profit %.",
  "Bought for $400 and sold for $440. Find profit %.",
  "Bought for $50 and sold for $75. Find profit %.",
  "Bought for $50 and sold for $40. Find loss %.",
  "Bought for $200 and sold for $150. Find loss %.",
  "Bought for $100 and sold for $90. Find loss %.",
  "Bought for $80 and sold for $60. Find loss %.",
  "Bought for $250 and sold for $200. Find loss %.",
  "Bought for $60 and sold for $45. Find loss %.",
  "Bought for $150 and sold for $105. Find loss %.",
  "Bought for $300 and sold for $240. Find loss %.",
  "Bought for $80 and sold for $68. Find loss %.",
  "Bought for $400 and sold for $200. Find loss %.",
  "Cost is $80. For 25% profit, find selling price.",
  "Cost is $50. For 20% profit, find selling price.",
  "Cost is $200. For 15% loss, find selling price.",
  "Cost is $120. For 10% profit, find selling price.",
  "Cost is $150. For 20% loss, find selling price.",
  "Cost is $250. For 40% profit, find selling price.",
  "Cost is $60. For 30% profit, find selling price.",
  "Cost is $40. For 25% loss, find selling price.",
  "Cost is $300. For 15% profit, find selling price.",
  "Cost is $160. For 10% loss, find selling price.",
  "Marked price is $150 with 20% off. Find selling price.",
  "Marked price is $200 with 15% off. Find selling price.",
  "Marked price is $80 with 25% off. Find selling price.",
  "Marked price is $120 with 30% off. Find selling price.",
  "Marked price is $60 with 10% off. Find selling price.",
  "Marked price is $250 with 40% off. Find selling price.",
  "Marked price is $100 with 35% off. Find selling price.",
  "Marked price is $160 with 25% off. Find selling price.",
  "Marked price is $300 with 20% off. Find selling price.",
  "Marked price is $90 with 50% off. Find selling price.",
  "Cost is $40. Cups sell for $1. Find break-even cups.",
  "Cost is $60. Cups sell for $1.50. Find break-even cups.",
  "Supplies cost $50. Cupcakes are $2. Find break-even.",
  "Setup is $75. Smoothies are $2.50. Find break-even.",
  "Craft costs $36. Cards sell for $3. Find break-even.",
  "Supplies cost $48. Car washes are $4. Find break-even.",
  "Setup costs $80. Drinks sell for $2. Find break-even.",
  "Setup is $90. Bracelets are $5. Find break-even.",
  "Setup costs $100. Meals are $4. Find break-even.",
  "Setup is $120. Tickets are $6. Find break-even.",
  "Sold for $120 with 20% profit. Find the cost price.",
  "Sold for $120 with 20% loss. Find the cost price.",
  "Sold for $84 with 40% profit. Find the cost price.",
  "Sold for $240 with 25% loss. Find the cost price.",
  "Sold for $180 with 50% profit. Find the cost price.",
  "Sold for $90 with 10% loss. Find the cost price.",
  "Sold for $260 with 30% profit. Find the cost price.",
  "Sold for $160 with 20% loss. Find the cost price.",
  "Sold for $300 with 25% profit. Find the cost price.",
  "Sold for $72 with 20% profit. Find the cost price.",
  "Buy 50 for $40. 10 spoil, sell 40 for $1.50. Find profit %.",
  "Buy 30 for $15. 6 spoil, sell 24 for $1. Find profit %.",
  "Buy 40 for $20. Sell all 40 for $0.75. Find profit %.",
  "Buy 50 for $25. 10 spoil, sell 40 for $0.75. Find profit %.",
  "Buy 20 for $20. 5 spoil, sell 15 for $2. Find profit %.",
  "Buy 40 for $40. 8 spoil, sell 32 for $1.50. Find profit %.",
  "Buy 50 for $20. 10 break, sell 40 for $0.60. Find profit %.",
  "Buy 30 for $60. 6 wilt, sell 24 for $2.50. Find result.",
  "Buy 100 for $40. 20 leak, sell 80 for $0.60. Find profit %.",
  "Buy 50 for $100. 10 damaged, sell 40 for $3. Find profit %.",
  "Sell two for $120 each: at +20% and -20%. Find result.",
  "Cost is $120, marked at $160 with 10% off. Find profit %.",
  "Sell two for $150 each: at +25% and -25%. Find result.",
  "Cost is $80, marked at $120 with 25% off. Find profit %.",
  "Sell two for $240 each: at +20% and -20%. Find result.",
  "Cost is $50, marked at $80 with 25% off. Find profit %.",
  "Sell two for $300 each: at +50% and -50%. Find result.",
  "Want 20% profit on $100 with 20% off marked. Find marked.",
  "Cost is $120, marked at $200 with 10% off. Find profit %.",
  "Sell two for $99 each: at +10% and -10%. Find result."
];

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
