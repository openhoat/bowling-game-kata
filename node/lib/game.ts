export interface RollingGame {
  roll: (...pinsPerRoll: [number, ...number[]]) => void
  score: number
}

export const createGame = (): RollingGame => {
  throw new Error('Not yet implemented')
}
