export const isStrike = (pins: number): boolean => pins === 10

export const isSpare = (...pinsPerRoll: [number, number]): boolean =>
  pinsPerRoll[0] !== 10 && pinsPerRoll[0] + pinsPerRoll[1] === 10
