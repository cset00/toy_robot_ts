import Grid from './grid'

test('valid move', () => {
  const grid = new Grid()
  expect(grid.isValidMove(3,2)).toBe(true)
})

test('invalid move', () => {
  const grid = new Grid()
  expect(grid.isValidMove(5,7)).toBe(false)
})