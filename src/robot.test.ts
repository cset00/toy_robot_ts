import Robot from './robot'

describe('robot commands work', () => {
  // beforeEach(() => {
  //   const robot = new Robot()
  // })

  test('place robot', () => {
    const robot = new Robot()
    expect(robot.place(0,2,"WEST")).toEqual([0,2,"WEST"])
  })

  test('can move', () => {
    const robot = new Robot()
    expect(robot.move()).toEqual([0,1,"NORTH"])
  })

  test('look left', () => {
    const robot = new Robot()
    expect(robot.left()).toBe("WEST")
  })

  test('look right', () => {
    const robot = new Robot()
    expect(robot.right()).toBe("EAST")
  })

  test('next position', () => {
    const robot = new Robot()
    robot.move
    expect(robot.nextPosition()).toEqual([0,1,"NORTH"])
  })

  test('report works', () => {
    const robot = new Robot()
    expect(robot.report()).toBe("0, 0, NORTH")
  })
})



