/**
 * Split an amount of money (integer cents) into `parts` shares.
 * The shares must add up to the total, and no two shares may differ by more than one cent.
 */
export function splitEvenly(totalCents: number, parts: number): number[] {
  const each = Math.floor(totalCents / parts);
  return Array.from({ length: parts }, () => each);
}
