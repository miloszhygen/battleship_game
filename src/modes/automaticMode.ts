/*

  This function is responsible for running the game in automatic mode.

  It takes in the board data and the shots fired data for both players and returns the game result.

  How to use :

    const player1BoardData = [{ A1: '.' }, ...];
    const player2BoardData = [{ A1: '.' }, ...];
    const player1FiredData = ['A1', ...];
    const player2FiredData = ['A1', ...];

    const automaticModeResult = await automaticMode({
      player1BoardData,
      player2BoardData,
      player1FiredData,
      player2FiredData,
    });


  Returns:
  {
    gameLog: [
      {
        player: 'Player 1',
        target: 'A1',
        result: 'Miss'
      },
      ...
    ],
    winner: {
      player: 'Player 1',
      remainingShips: 0
    }
  }

*/

import updateBoardWithShotsUtil from '../utils/updateBoardWithShotsUtil.ts';
import countRemainingShipsUtil from '../utils/countRemainingShipsUtil.ts';
import checkIfAllShipsSunkUtil from '../utils/checkIfAllShipsSunkUtil.ts';
import interpretHitResultUtil from '../utils/interpretHitResultUtil.ts';

interface GameLogEntry {
  player: string;
  target: string;
  result: string;
}

interface PlayerTurnParams {
  playerName: string;
  playerFiredData: any[];
  playerBoardData: any[];
  opponentBoardData: any[];
  index: number;
  gameLog: GameLogEntry[];
}

interface GameResult {
  gameLog: GameLogEntry[];
  winner: Winner | null;
  error?: string;
}

interface Winner {
  player: string;
  remainingShips: number;
}
// Helper function to handle player's turn
function handlePlayerTurn({
  playerName,
  playerFiredData,
  playerBoardData,
  opponentBoardData,
  index,
  gameLog,
}: PlayerTurnParams): GameResult | undefined {
  if (index < playerFiredData.length) {
    // Player fires a shot
    const { updatedBoardData: updatedOpponentBoard, hits: playerHits } = updateBoardWithShotsUtil(
      opponentBoardData,
      playerFiredData[index],
    );

    // Update opponent's board data
    opponentBoardData.splice(0, opponentBoardData.length, ...updatedOpponentBoard);

    // Log Player's shot result
    gameLog.push({
      player: playerName,
      target: playerHits?.coordinate || '',
      result: interpretHitResultUtil(playerHits),
    });

    // Check if Player won
    if (checkIfAllShipsSunkUtil(updatedOpponentBoard)) {
      const remainingShipsPlayer = countRemainingShipsUtil(playerBoardData);

      // Return the game result
      return {
        gameLog,
        winner: {
          player: playerName,
          remainingShips: remainingShipsPlayer,
        },
      };
    }
  }
}

interface AutomaticModeParams {
  player1BoardData: any[] | null;
  player2BoardData: any[] | null;
  player1FiredData: any[] | null;
  player2FiredData: any[] | null;
}
// Main function
export default async function automaticMode({
  player1BoardData,
  player2BoardData,
  player1FiredData,
  player2FiredData,
}: AutomaticModeParams): Promise<GameResult> {
  // If no data is passed, throw an error
  if (!player1BoardData || !player2BoardData || !player1FiredData || !player2FiredData) {
    return {
      error: 'Missing game data!',
      gameLog: [],
      winner: null,
    };
  }

  const gameLog = [] as GameLogEntry[];

  // TODO: Refactor this logic
  for (let i = 0; i < Math.max(player1FiredData.length, player2FiredData.length); i++) {
    const player1Turn = handlePlayerTurn({
      playerName: 'Player 1',
      playerFiredData: player1FiredData,
      playerBoardData: player1BoardData,
      opponentBoardData: player2BoardData,
      index: i,
      gameLog,
    });

    if (player1Turn) return player1Turn;

    const player2Turn = handlePlayerTurn({
      playerName: 'Player 2',
      playerFiredData: player2FiredData,
      playerBoardData: player2BoardData,
      opponentBoardData: player1BoardData,
      index: i,
      gameLog,
    });

    if (player2Turn) return player2Turn;
  }

  return {
    gameLog,
    winner: null,
  };
}
