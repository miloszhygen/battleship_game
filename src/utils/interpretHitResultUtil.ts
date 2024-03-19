/*

  A function that interprets the result of a hit on a ship.

  How to use:

      const hit = {
        shipType: 'A',
        hitResult: 'Hit',
      };

      const result = interpretHitResultUtil(hit);

  Returns:
    "🔥 Aircraft Carrier hit!"

*/
import { shipNames } from '../config.ts';

interface Hit {
  shipType: string | null | undefined;
  hitResult: string;
}

// Allow `hit` to be `Hit` or `null`
export default function interpretHitResultUtil(hit: Hit | null): string {
  // Return "Miss" immediately if `hit` is `null`
  if (hit === null || hit.shipType === null) {
    return 'Miss';
  }

  // Destructure the hit object to get the shipType and hitResult
  const { shipType, hitResult } = hit;

  // Check if the hit result is a "Hit" and the shipType is recognized
  if (shipType && hitResult === 'Hit' && shipNames[shipType]) {
    // Return the name of the ship that was hit
    return `🔥 ${shipNames[shipType]} hit!`;
  } else {
    // Return "Miss" for misses or unrecognized ship types
    return 'Miss';
  }
}
