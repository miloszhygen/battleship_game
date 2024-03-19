import createBoardUtil from './createBoardUtil';
import chalk from 'chalk';

describe('createBoardUtil', () => {
  it('should create a board from the provided data', () => {
    const boardData = [{ A1: '.' }, { A2: '~' }, { A3: 'X' }, { A4: 'O' }];

    const expectedBoard =
      chalk.white('   A B C D E F G H I J\n') +
      ' 1 ' +
      chalk.red('.') +
      ' ' +
      chalk.blue('~') +
      ' ' +
      chalk.red('X') +
      ' ' +
      chalk.white('O') +
      ' ' +
      '\n';

    const actualBoard = createBoardUtil(boardData);

    expect(actualBoard).toEqual(expectedBoard);
  });
});
