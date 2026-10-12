# testmyagent-demo-task

A small public task for [TestMyAgent](https://github.com/devfellowship/itera-certificacao-onchain), in the
Harbor-shaped layout of `packages/contracts/schemas/task.schema.json`:

```
task.json            the contract (verifier argv, timeouts, editable and protected paths)
instruction.md       the prompt the agent receives
environment/         the starting repository (the agent workspace root)
tests/public/        tests the agent sees
tests/hidden/        tests that run only in the grading container
solution/            the reference patch (the validation gate applies it)
```

The bug: `splitEvenly` in `environment/src/money.ts` drops the remainder.

This repo is **public**, so on TestMyAgent its tests are *open tests*: a run on it is not ranked.
A ranked (sealed) task needs a private repo.

Branches:

- `main` — the positive control: the gate passes (baseline hidden FAIL, solution PASS 3/3).
- `negative-control` — the bug is already fixed in `environment/`, so the hidden tests pass on the
  baseline and the gate marks the version `invalid`.
