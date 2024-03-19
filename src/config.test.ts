import {
  API_ENDPOINT,
  VESSELCOUNT,
  HIT,
  SEA,
  MISS,
  STRINGS,
  shipNames,
  BOARDLENGTH,
  ALLOWEDVALUES,
} from './config.ts';

describe('config', () => {
  it('has the correct API_ENDPOINT value', () => {
    expect(API_ENDPOINT).toBe(process.env.API_ENDPOINT);
  });

  it('has the correct VESSELCOUNT value', () => {
    expect(VESSELCOUNT).toBe(25);
  });

  it('has the correct HIT value', () => {
    expect(HIT).toBe('X');
  });

  it('has the correct SEA value', () => {
    expect(SEA).toBe('~');
  });

  it('has the correct MISS value', () => {
    expect(MISS).toBe('.');
  });

  it('has the correct STRINGS value', () => {
    expect(STRINGS).toEqual({
      hit: 'Hit',
      miss: 'Miss',
    });
  });

  it('has the correct shipNames value', () => {
    expect(shipNames).toEqual({
      A: 'Aircraft Carrier',
      B: 'Battleship',
      D: 'Destroyer',
      P: 'Patrol Boat',
      S: 'Submarine',
    });
  });

  it('has the correct ALLOWEDVALUES value', () => {
    expect(ALLOWEDVALUES).toEqual(['A', 'B', 'D', 'P', 'S', '~', 'X', '.']);
  });

  it('has the correct BOARDLENGTH value', () => {
    expect(BOARDLENGTH).toBe(100);
  });
});
