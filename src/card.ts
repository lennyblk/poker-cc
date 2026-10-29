export type Suit = 'HEARTS' | 'DIAMONDS' | 'CLUBS' | 'SPADES';
export type Card = { value: number; suit: Suit };
export type Hand = Card[];
