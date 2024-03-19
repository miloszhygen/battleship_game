import interpretHitResultUtil from './interpretHitResultUtil.ts';
import { shipNames } from '../config.ts';

describe('interpretHitResultUtil', () => {
  it('returns the correct message when a ship is hit', () => {
    const hit = {
      shipType: 'A',
      hitResult: 'Hit',
    };

    const result = interpretHitResultUtil(hit);

    expect(result).toBe(`🔥 ${shipNames['A']} hit!`);
  });

  it('returns "Miss" when the hit result is not "Hit"', () => {
    const hit = {
      shipType: 'A',
      hitResult: 'Miss',
    };

    const result = interpretHitResultUtil(hit);

    expect(result).toBe('Miss');
  });

  it('returns "Miss" when the ship type is not recognized', () => {
    const hit = {
      shipType: 'Æ',
      hitResult: 'Hit',
    };

    const result = interpretHitResultUtil(hit);

    expect(result).toBe('Miss');
  });
});
