/**
 * Split an amount of money (integer cents) into `parts` shares.
 * The shares must add up to the total, and no two shares may differ by more than one cent.
 */
export function splitEvenly(totalCents: number, parts: number): number[] {
  if (!Number.isInteger(totalCents) || totalCents < 0) throw new RangeError('totalCents must be a non-negative integer');
  if (!Number.isInteger(parts) || parts < 1) throw new RangeError('parts must be a positive integer');
  const each = Math.floor(totalCents / parts);
  const remainder = totalCents - each * parts;
  return Array.from({ length: parts }, (_, i) => (i < remainder ? each + 1 : each));
}
