import { describe, expect, it } from "vitest";
import { scoreHandHighCard, scoreHandThreeOfAKind, scoreHandFourOfAKind, scoreHandFullHouse, scoreHandFlush, scoreHandStraight, scoreHandStraightFlush } from './poker';
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

  it('returns 50 for a full house', () => {
    const hand = [
      card(2, 'HEARTS'), card(2, 'CLUBS'), card(2, 'DIAMONDS'),
      card(9, 'CLUBS'), card(9, 'SPADES'),
    ];

    expect(scoreHandFullHouse(hand)).toBe(50);
  });

  it('returns 45 for a flush', () => {
    const hand = [
      card(2, 'HEARTS'), card(7, 'HEARTS'), card(9, 'HEARTS'),
      card(11, 'HEARTS'), card(13, 'HEARTS'),
    ];

    expect(scoreHandFlush(hand)).toBe(45);
  });

  it('returns 40 for a straight', () => {
    const hand = [
      card(5, 'CLUBS'), card(6, 'DIAMONDS'), card(7, 'HEARTS'),
      card(8, 'SPADES'), card(9, 'CLUBS'),
    ];

    expect(scoreHandStraight(hand)).toBe(40);
  });

  it('returns 40 for a straight ending with an ace', () => {
    const hand = [
      card(10, 'CLUBS'), card(11, 'DIAMONDS'), card(12, 'HEARTS'),
      card(13, 'SPADES'), card(14, 'CLUBS'),
    ];

    expect(scoreHandStraight(hand)).toBe(40);
  });

  it('does not count ace-low as a straight', () => {
    const hand = [
      card(14, 'CLUBS'), card(2, 'DIAMONDS'), card(3, 'HEARTS'),
      card(4, 'SPADES'), card(5, 'CLUBS'),
    ];

    expect(scoreHandStraight(hand)).toBe(14);
  });

  it('returns 80 for a straight flush', () => {
    const hand = [
      card(5, 'CLUBS'), card(6, 'CLUBS'), card(7, 'CLUBS'),
      card(8, 'CLUBS'), card(9, 'CLUBS'),
    ];

    expect(scoreHandStraightFlush(hand)).toBe(80);
  });

  it('returns the highest card for a single pair', () => {
    const hand = [
      card(2, 'HEARTS'), card(2, 'CLUBS'), card(5, 'DIAMONDS'),
      card(9, 'CLUBS'), card(13, 'SPADES'),
    ];

    expect(scoreHandStraightFlush(hand)).toBe(13);
  });

  it('returns the highest card for two pairs', () => {
    const hand = [
      card(2, 'HEARTS'), card(2, 'CLUBS'), card(9, 'DIAMONDS'),
      card(9, 'CLUBS'), card(12, 'SPADES'),
    ];

    expect(scoreHandStraightFlush(hand)).toBe(12);
  });
});

