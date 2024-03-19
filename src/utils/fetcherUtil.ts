/*

  How to use fetcher:

  const boardData = await fetcher(`${process.env.API_ENDPOINT}/new-board`);

  Returns data if successful, or null if there was an error

*/

// TODO: add error handling
export default async function fetcherUtil(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
