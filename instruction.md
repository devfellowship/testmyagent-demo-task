`splitEvenly(totalCents, parts)` in `src/money.ts` loses money: when the total does not divide evenly, the remainder disappears.

Fix it so that the shares always add up to the total, no two shares differ by more than one cent, and the extra cents go to the first shares. An invalid `parts` (zero, negative or not an integer) must throw a `RangeError`. Do not edit the tests.
