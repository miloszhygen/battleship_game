import dotenv from 'dotenv';
dotenv.config();

export const API_ENDPOINT: string | undefined = process.env.API_ENDPOINT;

export const VESSELCOUNT: number = 25;
export const HIT: string = 'X';
export const SEA: string = '~';
export const MISS: string = '.';

export const STRINGS: { [key: string]: string } = {
  hit: 'Hit',
  miss: 'Miss',
};

export const ALLOWEDVALUES: string[] = ['A', 'B', 'D', 'P', 'S', '~', 'X', '.'];
// only A-J and 1-10
export const ALLOWEDINPUTVALUES: RegExp = /^[A-Ja-j](10|[1-9])$/;
export const BOARDLENGTH: number = 100;

export const shipNames: { [key: string]: string } = {
  A: 'Aircraft Carrier',
  B: 'Battleship',
  D: 'Destroyer',
  P: 'Patrol Boat',
  S: 'Submarine',
};
