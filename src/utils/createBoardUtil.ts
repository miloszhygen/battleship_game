/*

  A function that renders a game board from a board data object.

  How to use:

        const player1BoardData = [{"A1":"."},{"B1":"."}, ...]

        const player1Board = createBoard(player1BoardData)

  Returns:

        A B C D E F G H I J
      1 ~ ~ ~ ~ ~ D D D ~ ~
      2 ~ ~ ~ ~ ~ P P ~ ~ ~
      3 ~ ~ ~ B B B B ~ ~ D
      4 A ~ ~ ~ ~ ~ ~ ~ ~ D
      5 A ~ ~ ~ ~ ~ ~ ~ ~ D
      6 A ~ ~ ~ ~ ~ ~ ~ ~ ~
      7 A ~ ~ ~ ~ ~ ~ ~ ~ ~
      8 A ~ P ~ ~ ~ ~ ~ ~ ~
      9 ~ ~ P ~ ~ S S S ~ ~
     10 ~ ~ ~ S S S ~ ~ ~ ~

*/

import chalk from 'chalk';

interface BoardCell {
  [key: string]: string | undefined;
}

export default function createBoardUtil(boardData: BoardCell[]): string {
  let board = chalk.white('   A B C D E F G H I J\n');
  for (let i = 1; i <= 10; i++) {
    board += (i < 10 ? ' ' : '') + chalk.white(i) + ' ';
    for (let j = 0; j < 10; j++) {
      const cell = boardData[(i - 1) * 10 + j];
      let value = cell[Object.keys(cell)[0]];

      switch (value) {
        case '.':
          // Ocean
          value = chalk.red(value);
          break;
        case '~':
          // Ocean
          value = chalk.blue(value);
          break;
        case 'X':
          // Hit
          value = chalk.red(value);
          break;
        case 'O':
          // Miss
          value = chalk.white(value);
          break;
        default:
          value = chalk.green(value);
      }

      board += value + ' ';
    }
    board += '\n';
  }
  return board;
}
