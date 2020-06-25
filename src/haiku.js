export class Haiku {
  constructor(line1) {
    this.line1 = line1;
    this.warning = "";
    this.line1Arr = [];
    
  }

  lineSplit() {
    let newArray = this.line1.split('.');
    this.line1Arr = newArray;
    }

  checkArray(){
    this.warning = "please enter exactly 3 lines" 
    if(this.line1Arr.length !== 3){
      return this.warning
    } else {
    return this.line1Arr.length;

  }
  }


//  numberOfVowels = function(){
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
//     for(let char of this.body.toLowerCase()) {
//       if(vowels.includes(char)){
//         vowelCount++;
//       }
//     }
//     return vowelCount;
//   }


}
  



// lines() {
  //   return this.line1.split(/\r\n/);
  //   //console.log(lines())
  // }

  // lineCount() {
  //   return this.lines().length -1;

  // }

  //console.log(lineCount());



// String.prototype.lines = function() { return this.split(/\r*\n/); }
// String.prototype.lineCount = function() { return this.lines().length -1