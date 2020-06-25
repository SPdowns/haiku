export class Haiku {
  constructor(line1) {
    this.line1 = line1;
    this.line1Arr = [];
    this.warning = "please enter exactly 3 lines" 
  }

  lineSplit() {
    let newArray = this.line1.split('.');
    this.line1Arr = newArray;
    }

    checkArray(){
      if(this.line1Arr !== 3){
        return this.warning
      } else {
      return this.line1Arr.length;

    }
  }
  // lines() {
  //   return this.line1.split(/\r\n/);
  //   //console.log(lines())
  // }

  // lineCount() {
  //   return this.lines().length -1;

  // }

  //console.log(lineCount());

}


// String.prototype.lines = function() { return this.split(/\r*\n/); }
// String.prototype.lineCount = function() { return this.lines().length -1