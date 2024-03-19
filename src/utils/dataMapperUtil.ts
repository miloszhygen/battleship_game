/*
  What does these functions do?

  How to use:

    const boardData = {data: [{ A1: '.' }, ...]};

    mapBoardDataUtil(boardData)

  Returns the boardData if valid, or an error message if invalid

  The same goes for mapShotDataUtil


  TODO: add more checks to the functions

  - map data to the correct format. In the first place it could be a 1 to 1 mapping. It will be usefull to have such a mapping if the data source should change.

  - Check for correct keys: Ensure that each item in the boardData.data array has a key that matches the expected pattern (e.g., 'A1', 'B2', etc.). You could use a regular expression to check this.

  - Check for duplicate keys: Ensure that there are no duplicate keys in the boardData.data array. You could do this by creating a set of keys and checking its size.

  - Check for the correct number of vessel parts: You could add a check to count the number of vessel parts ('A', 'B', 'D', 'P', 'S') and ensure that the total is 25.

  - Check for the correct number of each type of vessel part: If you know how many of each type of vessel part there should be (e.g., 5 'A's, 4 'B's, etc.), you could add a check for this as well.


*/

import { ALLOWEDVALUES, BOARDLENGTH } from '../config.ts';

export function mapBoardDataUtil(boardData: any) {
  // Check if the board data is valid
  if (!boardData || !boardData.data || boardData.data.length !== BOARDLENGTH) {
    console.error('Invalid board data: should contain 100 items');
    return { error: 'Invalid board data: should contain 100 items' };
  }

  // Error message, if any found in the board data, it will be returned
  let errorMessage = null;
  // Check if the board data contains allowed values
  boardData.data.map((item: Record<string, string>) => {
    for (const key in item) {
      const value = item[key];
      if (!ALLOWEDVALUES.includes(value)) {
        console.error(`Invalid character in board data: ${value}`);
        errorMessage = { error: `Invalid character in board data: ${value}` };
      }
    }
  });

  // If there was found any not allowed value return error message
  if (errorMessage) {
    return errorMessage;
  }

  // Return the board data array
  const checkedBoardData = boardData?.data;

  return checkedBoardData;
}

// Function to map the shot data
export function mapShotDataUtil(shotData: any) {
  // Check if the shot data is valid
  if (!shotData || !shotData.data || shotData.data.length !== BOARDLENGTH) {
    console.error('Invalid shot data: should contain 100 items');
    return { error: 'Invalid shot data: should contain 100 items' };
  }
  const checkedShotData = shotData?.data;
  return checkedShotData;
}
