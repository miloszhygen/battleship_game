/*


  This function takes in the current board data and the shots coordinat and updates the board with the shots fired.


  const boardData = [{ A1: '.' }, ...]
  const shotsCoord = 'A4';

  const result = updateBoardWithShotsUtil(boardData, shotsCoord);

  Returns:
    {
      hits: {
        coordinate: 'F2',
        shipType: 'P',
        hitResult: 'Hit'
      },
      updatedBoardData: [
        { A1: '.' },
        { B1: '.' },
        ...
      ],
    };

*/
import { HIT, SEA, MISS, STRINGS } from '../config.ts';

interface BoardCell {
  [key: string]: string | null | undefined;
}

interface HitResult {
  coordinate: string;
  shipType: string | null | undefined;
  hitResult: string;
}

interface UpdateResult {
  updatedBoardData: BoardCell[];
  hits: HitResult | null;
}

export default function updateBoardWithShotsUtil(
  boardData: BoardCell[],
  shotsCoord: string,
): UpdateResult {
  const updatedBoardData = [...boardData];
  let hits: HitResult | null = null;

  const index = updatedBoardData.findIndex(cell =>
    Object.prototype.hasOwnProperty.call(cell, shotsCoord),
  );

  if (index !== -1) {
    const cell = updatedBoardData[index];

    const cellKey = Object.keys(cell)[0];

    if (cell[cellKey] !== SEA) {
      // It's a hit on a ship
      hits = { coordinate: cellKey, shipType: cell[cellKey], hitResult: STRINGS.hit };

      // Mark as board cell with a hit
      cell[cellKey] = HIT;
    } else {
      // It's a miss (hit on the sea)
      hits = { coordinate: cellKey, shipType: null, hitResult: STRINGS.miss };

      // Mark as board cell with a miss
      cell[cellKey] = MISS;
    }
  }

  return { updatedBoardData, hits };
}
