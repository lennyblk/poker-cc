import { Hand } from './card';

export const scoreHandHighCard = (hand: Hand): number =>
  Math.max(...hand.map(c => c.value));

const THREE_OF_A_KIND_POINTS = 30;

export const scoreHandThreeOfAKind = (hand: Hand): number => {
  if (hasSameValueCount(hand, 3)) return THREE_OF_A_KIND_POINTS;

  return scoreHandHighCard(hand);
};

const hasSameValueCount = (hand: Hand, count: number): boolean => {
  const counts = countByValue(hand);

  for (const value in counts) {
    if (counts[value] === count) return true;
  }

  return false;
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

const FOUR_OF_A_KIND_POINTS = 60;

export const scoreHandFourOfAKind = (hand: Hand): number => {
  if (hasSameValueCount(hand, 4)) return FOUR_OF_A_KIND_POINTS;

  return scoreHandThreeOfAKind(hand);
};

const FULL_HOUSE_POINTS = 50;

export const scoreHandFullHouse = (hand: Hand): number => {
  if (isFullHouse(hand)) return FULL_HOUSE_POINTS;

  return scoreHandFourOfAKind(hand);
};

const isFullHouse = (hand: Hand): boolean =>
  hasSameValueCount(hand, 3) && hasSameValueCount(hand, 2);
