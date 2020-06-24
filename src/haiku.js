export class Haiku {
    constructor(line1){
        this.line1 = line1;
    }  
    
    lineSplit() {
      return line1.split(/\r\n/);
    }
}