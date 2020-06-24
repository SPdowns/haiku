export class Haiku {
    constructor(line1){
        this.line1 = line1;
    }  
    
    // lineSplit() {
    //   return line1.split(/\r\n/);
    
    //  }
    
    lines() {
      return this.line1.split(/\r\n/);
      //console.log(lines())
    }
    
    lineCount() {
      return this.lines().length -1;
      
    }
    
    //console.log(lineCount());

    
    }

// String.prototype.lines = function() { return this.split(/\r*\n/); }
// String.prototype.lineCount = function() { return this.lines().length -1; 