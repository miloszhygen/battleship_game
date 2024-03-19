/*

  Function to check if all ships have been sunk

  Usage:

    const updatedPlayer2Board = [{"A1":"."},{"B1":"."}, ...]

    checkIfAllShipsSunkUtil(updatedPlayer2Board)

  Returns:
    true / false


*/
import { VESSELCOUNT, HIT } from '../config.ts';

interface BoardCell {
  [key: string]: string | null | undefined;
}

export default function checkIfAllShipsSunkUtil(boardData: BoardCell[]): boolean {
  const hitCellsCount = boardData.reduce((acc: number, cell: BoardCell) => {
    const value = Object.values(cell)[0];
    return value === HIT ? acc + 1 : acc;
  }, 0);

  return hitCellsCount === VESSELCOUNT;
}
