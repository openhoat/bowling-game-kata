import { isSpare, isStrike } from './rules'

export interface RollingGame {
  roll: (...pinsPerRoll: [number, ...number[]]) => void
  score: number
}

export const createGame = (): RollingGame => new BowlingGame()

export class BowlingGame implements RollingGame {
  #score = 0

  get score(): number {
    return this.#score
  }

  roll(...pinsPerRoll: [number, ...number[]]): void {
    if (
      typeof pinsPerRoll[1] === 'number' &&
      typeof pinsPerRoll[2] === 'number'
    ) {
      if (isSpare(pinsPerRoll[0], pinsPerRoll[1])) {
        this.#score = 10 + pinsPerRoll[2] * 2
        return
      }
      if (isStrike(pinsPerRoll[0])) {
        this.#score = 10 + (pinsPerRoll[1] + pinsPerRoll[2]) * 2
        return
      }
    }
    for (const pin of pinsPerRoll) {
      this.#score += pin
    }
  }
}
