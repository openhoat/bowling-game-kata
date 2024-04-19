import type { RollingGame } from '../lib/game.ts'
import { createGame } from '../lib/game.ts'
import { testCases } from './game.testcases.ts'
import { beforeEach, describe, expect, it, run } from '../deps/test/x/tincan.ts'

describe('Bowling Game Kata tests', () => {
  describe('Game', () => {
    describe('Frame', () => {
      let game: RollingGame
      beforeEach(() => {
        game = createGame()
      })
      testCases.forEach(({ pinsPerRoll, expectedScore }) => {
        it(`should return ${expectedScore} given pins ${pinsPerRoll}`, () => {
          // When
          game.roll(...pinsPerRoll)
          // Then
          expect(game.score).toBe(expectedScore)
        })
      })
    })
  })
})

run()
