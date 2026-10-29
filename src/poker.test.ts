import { describe, expect, it } from "vitest";
import { scoreHand } from './poker';
import { Card, Suit } from './card';

const card = (value: number, suit: Suit): Card => ({ value, suit });

describe('scoreHand', () => {
  it('returns the highest card value when there is no combination', () => {
    const hand = [
      card(3, 'CLUBS'), card(8, 'DIAMONDS'), card(10, 'HEARTS'),
      card(12, 'SPADES'), card(13, 'CLUBS'),
    ];

    expect(scoreHand(hand)).toBe(13);
  });
});
