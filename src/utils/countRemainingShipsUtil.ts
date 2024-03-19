/*

  This function counts the remaining ship parts on the board. It takes the boardData as an argument and returns the number of remaining ship parts.

  How to use:

    const boardData = [{"A1":"."},{"B1":"."}, ...]

    const remainingShipsPlayer1 = countRemainingShipsUtil(player1BoardData);

  Returns:
    17



*/

import { HIT, SEA, MISS } from '../config.ts';

type BoardCell = { [key: string]: string | undefined };

export default function countRemainingShipsUtil(boardData: BoardCell[]): number {
  // Count remaining ship parts
  const remainingShips = boardData.reduce((acc: number, cell: BoardCell) => {
    const value = Object.values(cell)[0];

    if (value !== SEA && value !== HIT && value !== MISS) {
      // Count each ship part that hasn't been hit
      acc += 1;
    }
    return acc;
  }, 0);

  return remainingShips;
}
