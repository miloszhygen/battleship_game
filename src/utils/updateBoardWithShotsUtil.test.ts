import updateBoardWithShotsUtil from './updateBoardWithShotsUtil.ts';

const boardData = [
  { A1: '.' },
  { B1: '.' },
  { C1: '.' },
  { D1: '.' },
  { E1: '.' },
  { F1: 'X' },
  { G1: 'X' },
  { H1: 'D' },
  { I1: '.' },
  { J1: '.' },
  { A2: '.' },
  { B2: '.' },
  { C2: '.' },
  { D2: '.' },
  { E2: '.' },
  { F2: 'P' },
  { G2: 'X' },
  { H2: '.' },
  { I2: '.' },
  { J2: '.' },
  { A3: '.' },
  { B3: '.' },
  { C3: '.' },
  { D3: 'X' },
  { E3: 'X' },
  { F3: 'X' },
  { G3: 'X' },
  { H3: '.' },
  { I3: '.' },
  { J3: 'X' },
  { A4: 'X' },
  { B4: '~' },
  { C4: '.' },
  { D4: '.' },
  { E4: '.' },
  { F4: '.' },
  { G4: '.' },
  { H4: '~' },
  { I4: '.' },
  { J4: 'X' },
  { A5: 'X' },
  { B5: '.' },
  { C5: '.' },
  { D5: '.' },
  { E5: '.' },
  { F5: '.' },
  { G5: '.' },
  { H5: '.' },
  { I5: '.' },
  { J5: 'X' },
  { A6: 'X' },
  { B6: '.' },
  { C6: '.' },
  { D6: '.' },
  { E6: '.' },
  { F6: '.' },
  { G6: '.' },
  { H6: '.' },
  { I6: '.' },
  { J6: '.' },
  { A7: 'X' },
  { B7: '.' },
  { C7: '.' },
  { D7: '.' },
  { E7: '.' },
  { F7: '.' },
  { G7: '.' },
  { H7: '.' },
  { I7: '.' },
  { J7: '.' },
  { A8: 'X' },
  { B8: '.' },
  { C8: 'X' },
  { D8: '.' },
  { E8: '.' },
  { F8: '.' },
  { G8: '.' },
  { H8: '.' },
  { I8: '.' },
  { J8: '.' },
  { A9: '.' },
  { B9: '.' },
  { C9: 'X' },
  { D9: '.' },
  { E9: '.' },
  { F9: 'S' },
  { G9: 'X' },
  { H9: 'X' },
  { I9: '~' },
  { J9: '.' },
  { A10: '.' },
  { B10: '.' },
  { C10: '.' },
  { D10: 'X' },
  { E10: 'X' },
  { F10: 'X' },
  { G10: '.' },
  { H10: '~' },
  { I10: '.' },
  { J10: '.' },
];

const shotsData = 'F2';

const expectedResultHit = {
  updatedBoardData: [
    { A1: '.' },
    { B1: '.' },
    { C1: '.' },
    { D1: '.' },
    { E1: '.' },
    { F1: 'X' },
    { G1: 'X' },
    { H1: 'D' },
    { I1: '.' },
    { J1: '.' },
    { A2: '.' },
    { B2: '.' },
    { C2: '.' },
    { D2: '.' },
    { E2: '.' },
    { F2: 'X' },
    { G2: 'X' },
    { H2: '.' },
    { I2: '.' },
    { J2: '.' },
    { A3: '.' },
    { B3: '.' },
    { C3: '.' },
    { D3: 'X' },
    { E3: 'X' },
    { F3: 'X' },
    { G3: 'X' },
    { H3: '.' },
    { I3: '.' },
    { J3: 'X' },
    { A4: 'X' },
    { B4: '~' },
    { C4: '.' },
    { D4: '.' },
    { E4: '.' },
    { F4: '.' },
    { G4: '.' },
    { H4: '~' },
    { I4: '.' },
    { J4: 'X' },
    { A5: 'X' },
    { B5: '.' },
    { C5: '.' },
    { D5: '.' },
    { E5: '.' },
    { F5: '.' },
    { G5: '.' },
    { H5: '.' },
    { I5: '.' },
    { J5: 'X' },
    { A6: 'X' },
    { B6: '.' },
    { C6: '.' },
    { D6: '.' },
    { E6: '.' },
    { F6: '.' },
    { G6: '.' },
    { H6: '.' },
    { I6: '.' },
    { J6: '.' },
    { A7: 'X' },
    { B7: '.' },
    { C7: '.' },
    { D7: '.' },
    { E7: '.' },
    { F7: '.' },
    { G7: '.' },
    { H7: '.' },
    { I7: '.' },
    { J7: '.' },
    { A8: 'X' },
    { B8: '.' },
    { C8: 'X' },
    { D8: '.' },
    { E8: '.' },
    { F8: '.' },
    { G8: '.' },
    { H8: '.' },
    { I8: '.' },
    { J8: '.' },
    { A9: '.' },
    { B9: '.' },
    { C9: 'X' },
    { D9: '.' },
    { E9: '.' },
    { F9: 'S' },
    { G9: 'X' },
    { H9: 'X' },
    { I9: '~' },
    { J9: '.' },
    { A10: '.' },
    { B10: '.' },
    { C10: '.' },
    { D10: 'X' },
    { E10: 'X' },
    { F10: 'X' },
    { G10: '.' },
    { H10: '~' },
    { I10: '.' },
    { J10: '.' },
  ],
  hits: { coordinate: 'F2', shipType: 'P', hitResult: 'Hit' },
};

describe('updateBoardWithShotsUtil function', () => {
  it('return board data with a HIT', () => {
    const result = updateBoardWithShotsUtil(boardData, shotsData);
    expect(result).toEqual(expectedResultHit);
  });
  // TODO: fix this test
  // it('return board data with a MISS', () => {
  //   const result = updateBoardWithShotsUtil(boardData, shotsData);
  //   console.log(JSON.stringify(result));

  //   expect(result).toBe(expectedResultMiss);
  // });
});
