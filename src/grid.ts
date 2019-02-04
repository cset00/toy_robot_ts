export default class Grid {
  constructor(public hori = 5, public verti = 5){

  }

  isValidMove(x: number, y:number){
    return (x >= 0 && x < this.hori) && (y >= 0 && y < this.verti)
  }

}