import inquirer from 'inquirer';

import { mock_newBoard_player_1, mock_newBoard_player_2 } from './mockData/newBoard.js';
import { mock_randomHits_player_1, mock_randomHits_player_2 } from './mockData/randomHits.js';
import singlePlayerMode from './src/modes/singlePlayerMode.ts';

console.log('\n\n**************************');
console.log('🏴‍☠️ Welcome to Battleship!');
console.log('**************************\n');

import automaticMode from './src/modes/automaticMode.ts';
import { mapBoardDataUtil, mapShotDataUtil } from './src/utils/dataMapperUtil.js';

type GameMode = '1' | '2';

async function runGameLogicByType(params: GameMode) {
  console.log('gameModes', params);

  // AUTOMATIC MODE
  if (params === '1') {
    console.log('automatic');

    const automaticModeResult = await automaticMode({
      player1BoardData: mapBoardDataUtil(mock_newBoard_player_1),
      player2BoardData: mapBoardDataUtil(mock_newBoard_player_2),
      player1FiredData: mapShotDataUtil(mock_randomHits_player_1),
      player2FiredData: mapShotDataUtil(mock_randomHits_player_2),
    });

    // Show the game log / result
    automaticModeResult.gameLog.forEach(log => {
      console.log(`${log.player} Shoots at ${log.target}! - ${log.result}`);
    });
    console.log('\n------\nRESULT\n------\n');
    console.log(
      automaticModeResult.winner
        ? `${automaticModeResult.winner.player} wins. All of the opponent's ships have been sunk! ${automaticModeResult.winner.player} has ${automaticModeResult.winner.remainingShips} ship part(s) remaining.`
        : 'The game is a draw!',
    );
  }

  // SINGLE PLAYER MODE
  if (params === '2') {
    console.log('1 player');
    await singlePlayerMode({
      player1BoardData: mapBoardDataUtil(mock_newBoard_player_1),
      player2BoardData: mapBoardDataUtil(mock_newBoard_player_2),
      player1FiredData: mapShotDataUtil(mock_randomHits_player_1),
      player2FiredData: mapShotDataUtil(mock_randomHits_player_2),
    });
  }
}

async function selectGameMode() {
  const answer = await inquirer.prompt({
    type: 'input',
    name: 'gameMode',
    message: `Select game mode\n
+-----------------+
|   1) automatic   |
|   2) 1 player   |
+-----------------+
select: `,
  });

  if (answer.gameMode !== '1' && answer.gameMode !== '2') {
    console.log('Invalid input. Please try again.');
    return selectGameMode();
  }
  console.log('Hello, ' + answer.gameMode);

  runGameLogicByType(answer?.gameMode);
  return answer.gameMode;
}

selectGameMode();
