import inquirer from 'inquirer';

import { API_ENDPOINT } from './config.ts';

import fetcherUtil from './utils/fetcherUtil.ts';
import automaticMode from './modes/automaticMode.ts';
import singlePlayerMode from './modes/singlePlayerMode.ts';
import { mapBoardDataUtil, mapShotDataUtil } from './utils/dataMapperUtil.ts';

import { mock_newBoard_player_1, mock_newBoard_player_2 } from '../mockData/newBoard.js';
import { mock_randomHits_player_1, mock_randomHits_player_2 } from '../mockData/randomHits.js';

type GameMode = '1' | '2';

async function runGameLogicByType(type: GameMode) {
  // AUTOMATIC MODE
  if (type === '1') {
    // Fetching board data for both players
    // Player 1
    const player1BoardData = await fetcherUtil(`${API_ENDPOINT}/new-board`);
    // Player 2
    const player2BoardData = await fetcherUtil(`${API_ENDPOINT}/new-board`);

    // Fetching shots fired data for both players
    // Player 1
    const player1FiredData = await fetcherUtil(`${API_ENDPOINT}/random-hits?count=100`);
    // Player 2
    const player2FiredData = await fetcherUtil(`${API_ENDPOINT}/random-hits?count=100`);

    // Run the game logic for automatic mode
    const automaticModeResult = await automaticMode({
      player1BoardData: mapBoardDataUtil(player1BoardData),
      player2BoardData: mapBoardDataUtil(player2BoardData),
      player1FiredData: mapShotDataUtil(player1FiredData),
      player2FiredData: mapShotDataUtil(player2FiredData),
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
  if (type === '2') {
    await singlePlayerMode({
      player1BoardData: mapBoardDataUtil(mock_newBoard_player_1),
      player2BoardData: mapBoardDataUtil(mock_newBoard_player_2),
      player1FiredData: mapShotDataUtil(mock_randomHits_player_1),
      player2FiredData: mapShotDataUtil(mock_randomHits_player_2),
    });
  }
}

async function selectGameMode() {
  // Ask the user to select the game mode
  // DOC: https://www.npmjs.com/package/inquirer
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
  // Run the game logic based on the selected game mode
  runGameLogicByType(answer?.gameMode);
  return answer.gameMode;
}

selectGameMode();
