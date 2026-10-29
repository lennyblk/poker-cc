import { describe, expect, it } from "vitest";
import { scoreHandHighCard, scoreHandThreeOfAKind, scoreHandFourOfAKind } from './poker';
import type { Card, Suit } from './card';

const card = (value: number, suit: Suit): Card => ({ value, suit });

describe('scoreHand', () => {
  it('returns the highest card value when there is no combination', () => {
    const hand = [
      card(3, 'CLUBS'), card(8, 'DIAMONDS'), card(10, 'HEARTS'),
      card(12, 'SPADES'), card(13, 'CLUBS'),
    ];

    expect(scoreHandHighCard(hand)).toBe(13);
  });

  it('returns 30 for a three of a kind', () => {
    const hand = [
      card(7, 'HEARTS'), card(7, 'CLUBS'), card(7, 'DIAMONDS'),
      card(13, 'SPADES'), card(2, 'CLUBS'),
    ];

    expect(scoreHandThreeOfAKind(hand)).toBe(30);
  });

  it('returns 60 for a four of a kind', () => {
    const hand = [
      card(9, 'HEARTS'), card(9, 'CLUBS'), card(9, 'DIAMONDS'),
      card(9, 'SPADES'), card(13, 'CLUBS'),
    ];

    expect(scoreHandFourOfAKind(hand)).toBe(60);
  });
});

