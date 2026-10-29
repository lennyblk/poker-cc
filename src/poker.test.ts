import { describe, expect, it } from "vitest";
import { scoreHand, scoreHand3ofAKind } from './poker';
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

  it('returns 30 for a three of a kind', () => {
    const hand = [
      card(7, 'HEARTS'), card(7, 'CLUBS'), card(7, 'DIAMONDS'),
      card(13, 'SPADES'), card(2, 'CLUBS'),
    ];

    expect(scoreHand3ofAKind(hand)).toBe(30);
  });
});

