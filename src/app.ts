import Robot from './robot'
import Grid from './grid'
var fs = require('fs')

export default class App {
  public robot: Robot
  public grid: Grid
  
  constructor() {
    this.robot = new Robot()
    this.grid = new Grid()
  }

  openFile(file_name) {

  }
}