const MIN_DELAY = 1;
const MAX_DELAY = 3;

/**
 * Generate a random number between a min and max
 */
export function randomNumber(): number {
  return Number(Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY);
}
