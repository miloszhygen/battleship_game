import countRemainingShipsUtil from './countRemainingShipsUtil';

import { HIT, SEA, MISS } from '../config.js';

describe('countRemainingShipsUtil', () => {
  it('Should count six (6) remaining ship parts', () => {
    const boardData = [
      { A1: '.' },
      { B1: 'A' },
      { C1: 'A' },
      { D1: HIT },
      { E1: SEA },
      { F1: MISS },
      { G1: 'B' },
      { H1: 'B' },
      { I1: 'B' },
      { J1: 'B' },
    ];

    const remainingShips = countRemainingShipsUtil(boardData);

    expect(remainingShips).toBe(6);
  });
  it('Should count zero (0) remaining ship parts', () => {
    const boardData = [
      { A1: '.' },
      { B1: SEA },
      { C1: SEA },
      { D1: HIT },
      { E1: SEA },
      { F1: MISS },
      { G1: MISS },
      { H1: SEA },
      { I1: '.' },
      { J1: '.' },
    ];

    const remainingShips = countRemainingShipsUtil(boardData);

    expect(remainingShips).toBe(0);
  });
});
