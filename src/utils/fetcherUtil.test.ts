import fetcherUtil from './fetcherUtil.ts';
import fetchMock from 'jest-fetch-mock';

describe('fetcher function', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  // TODO: fix this test
  // it('fetches data successfully from an API', async () => {
  //   const data = { data: 'test data' };
  //   fetchMock.mockResponseOnce(JSON.stringify(data));

  //   const result = await fetcherUtil('https://api.example.com/data');
  //   console.log({ result });

  //   expect(result).toEqual(data);
  //   // expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');
  // });

  it('handles exceptions', async () => {
    fetchMock.mockReject(new Error('fake error message'));

    const result = await fetcherUtil('https://api.example.com/data');
    expect(result).toBeNull();
  });
});
