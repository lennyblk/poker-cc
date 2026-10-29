import { Hand } from './card';

export const scoreHand = (hand: Hand): number =>
  Math.max(...hand.map(c => c.value));
