import { Hand } from './card';

export const scoreHand = (hand: Hand): number =>
  Math.max(...hand.map(c => c.value));

export const scoreHand3ofAKind = (hand: Hand): number => {
  const counts = countByValue(hand);
  for (const value in counts) {
    if (counts[value] === 3) return 30;
  }

  return Math.max(...hand.map(c => c.value));
};

const countByValue = (hand: Hand): Record<number, number> => {
  const counts: Record<number, number> = {};

  for (const card of hand) {
    if (counts[card.value] === undefined) {
      counts[card.value] = 0;
    }
    counts[card.value] = counts[card.value] + 1;
  }

  return counts;
};
