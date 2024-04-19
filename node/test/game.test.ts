import type { RollingGame } from '../lib/game'
import { createGame } from '../lib/game'
import { testCases } from './game.testcases'

describe('Bowling Game Kata tests', () => {
  describe('Game', () => {
    describe('Frame', () => {
      let game: RollingGame
      beforeEach(() => {
        game = createGame()
      })
      test.each(testCases)(
        'should return $expectedScore given pins $pinsPerRoll',
        ({ pinsPerRoll, expectedScore }) => {
          // When
          game.roll(...pinsPerRoll)
          // Then
          expect(game.score).toBe(expectedScore)
        },
      )
    })
  })
})
