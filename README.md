# Timelock usage test

## Description

Assume we launched a yield farm project similar to some random foodnameswap.
We want to add a new pool. This is done by calling the `add` method in the `contracts/MasterChef.sol`.

However, our **MasterChef** is protected by a **Timelock** (`contracts/Timelock.sol`) to prevent abuse.

## Assignment

Write a migration that does the following:

- Queue the transaction to add a pool with the following arguments:

  - LP token: `0xa184088a740c695e156f91f5cc086a06bb78b827`
  - Multiplier: 5
  - Fee: 0

write answer in `1_queue_transaction.js` (some code is already given)

- Also write the follow up migration to prove that we can execute it after 2 days.

write answer in `2_execute_transaction.js` (some code is already given)

- Write a unit test showing that you know how the timelock works

## Attention

- We are not asking you to deploy/implement the MasterChef/Timelock/... Just the 2 topics above are fine.
- Feel free to redo the structure or change any code that's already there (except for the contracts). As long as the solution is working
- Feel free to use any framework you like (we generally use Truffle)

## Estimated time

We estimate this takes around 1-2 hours
