export default class Robot {
  constructor(public x = 0, public y = 0, public f = "NORTH") {
    
  }

  place(x: number, y:number, f: string) {
    this.x = x
    this.y = y
    this.f = f

    return this.currentPosition()
  }

  move() {
    if (this.f == 'NORTH') {
      this.y += 1
    } else if (this.f == 'EAST') {
      this.x += 1
    } else if (this.f == 'SOUTH') {
      this.y -= 1
    } else {
      this.x -= 1
    }

    return this.currentPosition()

  }

  left(){
    switch(this.f) {
      case 'NORTH':
        return 'WEST'
        break
      case 'WEST':
        return 'SOUTH'
        break
      case 'SOUTH':
        return 'EAST'
        break
      case 'EAST':
        return 'NORTH'
        break
    }
    return this.currentPosition()
  }

  right() {
    switch(this.f) {
      case 'NORTH':
        return 'EAST'
        break
      case 'EAST':
        return 'SOUTH'
        break
      case 'SOUTH':
        return 'WEST'
        break
      case 'WEST':
        return 'NORTH'
        break
    }
    return this.currentPosition()
  }

  currentPosition() {
    return [this.x, this.y, this.f]
  }

  nextPosition() {
    let x = this.x
    let y = this.y

    if (this.f == 'NORTH') {
      y += 1
    } else if (this.f == 'EAST') {
      x += 1
    } else if (this.f == 'SOUTH') {
      y -= 1
    } else {
      x -= 1
    }

    return [x, y, this.f]
  }

  report() {
    return `${this.x}, ${this.y}, ${this.f}`
  }
}

