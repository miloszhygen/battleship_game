import inquirer from 'inquirer';
import updateBoardWithShotsUtil from '../utils/updateBoardWithShotsUtil.ts';
import countRemainingShipsUtil from '../utils/countRemainingShipsUtil.js';
import checkIfAllShipsSunkUtil from '../utils/checkIfAllShipsSunkUtil.ts';
import interpretHitResultUtil from '../utils/interpretHitResultUtil.ts';
import createBoardUtil from '../utils/createBoardUtil.ts';
import { ALLOWEDINPUTVALUES } from '../config.ts';

interface GameLogEntry {
  player: string;
  target: string;
  result: string;
}

interface Winner {
  player: string;
  remainingShips: number;
}

interface PlayerTurnParams {
  playerName: string;
  playerFiredData: string[];
  playerBoardData: any[];
  opponentBoardData: any[];
  gameLog: GameLogEntry[];
  isUser: boolean;
}

// TODO: Rename this function, dont use Temp in the name
async function promptForMoveTemp(playerName: any) {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'coordinate',
      message: `${playerName}, enter your shot coordinate (e.g., A1):`,
    },
  ]);

  return answers;
}

// // Function to render the boards and prompt the user for their move
async function promptForMove(playerName: string): Promise<string> {
  const answers = await promptForMoveTemp(playerName);
  // Check if the input is valid
  const validShotCoordinate = ALLOWEDINPUTVALUES.test(answers.coordinate);

  if (!validShotCoordinate) {
    console.log('Invalid input. Please try again.');
    return promptForMoveTemp(playerName);
  }

  return answers.coordinate.toUpperCase();
}

async function handlePlayerTurn({
  playerName,
  playerFiredData,
  playerBoardData,
  opponentBoardData,
  gameLog,
  isUser = false,
}: PlayerTurnParams): Promise<{ gameLog: GameLogEntry[]; winner: Winner | null }> {
  // Get the next shot coordinate
  let shotCoordinate;

  // If the player is a user, prompt for their move
  if (isUser) {
    // TODO: This has to come from outside
    shotCoordinate = await promptForMove(playerName);
  } else {
    // Process automated player's move
    shotCoordinate = playerFiredData.shift();
  }

  if (shotCoordinate) {
    // Update the opponent's board with the shot
    const { updatedBoardData: updatedOpponentBoard, hits: playerHits } = updateBoardWithShotsUtil(
      opponentBoardData,
      shotCoordinate,
    );
    // Update the opponent's board data
    opponentBoardData.splice(0, opponentBoardData.length, ...updatedOpponentBoard);

    gameLog.push({
      player: playerName,
      target: shotCoordinate,
      result: interpretHitResultUtil(playerHits),
    });

    // Check if the player won
    if (checkIfAllShipsSunkUtil(updatedOpponentBoard)) {
      const remainingShipsPlayer = countRemainingShipsUtil(playerBoardData);
      return {
        gameLog,
        winner: {
          player: playerName,
          remainingShips: remainingShipsPlayer,
        },
      };
    }
  }
  return {
    gameLog,
    winner: null,
  };
}

export default async function singlePlayerMode({
  player1BoardData,
  player2BoardData,
  player1FiredData,
  player2FiredData,
}: {
  // TODO: Replace 'any'
  player1BoardData: any[];
  // TODO: Replace 'any'
  player2BoardData: any[];
  player1FiredData: string[];
  player2FiredData: string[];
}): Promise<{ gameLog: GameLogEntry[]; winner: Winner | null }> {
  const gameLog: GameLogEntry[] = [];

  while (player1FiredData.length > 0 || player2FiredData.length > 0) {
    console.clear();
    console.log("Humanoid's board:");
    // Show player 1's board
    console.log(createBoardUtil(player1BoardData));
    console.log("Opponet's board:");
    // Show player 1's board
    console.log(createBoardUtil(player2BoardData));

    await handlePlayerTurn({
      playerName: 'Humanoid',
      playerFiredData: player1FiredData,
      playerBoardData: player1BoardData,
      opponentBoardData: player2BoardData,
      gameLog,
      isUser: true,
    });
    await handlePlayerTurn({
      playerName: 'Player 2',
      playerFiredData: player2FiredData,
      playerBoardData: player2BoardData,
      opponentBoardData: player1BoardData,
      gameLog,
      isUser: false,
    });
  }

  return {
    gameLog: [],
    winner: null,
  };
}
