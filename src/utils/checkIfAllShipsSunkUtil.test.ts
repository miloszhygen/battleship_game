import checkIfAllShipsSunkUtil from './checkIfAllShipsSunkUtil';
import { HIT } from '../config.js';

describe('checkIfAllShipsSunkUtil', () => {
  it('returns true when all ships have been sunk (25 ship parts)', () => {
    const boardData = [
      { A1: '.' },
      { B1: HIT },
      { C1: HIT },
      { D1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { G1: HIT },
      { H1: '.' },
      { I1: '.' },
      { J1: '.' },
    ];

    const allShipsSunk = checkIfAllShipsSunkUtil(boardData);
    expect(allShipsSunk).toBe(true);
  });

  it('returns false when not all ships have been sunk', () => {
    const boardData = [
      { A1: '.' },
      { B1: HIT },
      { C1: HIT },
      { D1: HIT },
      { G1: HIT },
      { H1: '.' },
      { I1: '.' },
      { J1: '.' },
    ];

    const allShipsSunk = checkIfAllShipsSunkUtil(boardData);
    expect(allShipsSunk).toBe(false);
  });
});
