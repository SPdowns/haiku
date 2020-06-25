import { Haiku } from "./../src/haiku.js"

describe('Haiku', () => {

  test("should correctly declare a haiku", () => {
    const haiku = new Haiku("This is a test string. This should be lines. And one last word, smores");
    expect(haiku.line1).toEqual("This is a test string. This should be lines. And one last word, smores");
  });

  test("should correctly convert a string into an array", () => {
    const haiku = new Haiku("This is a test string.");
    haiku.lineSplit()
    expect(haiku.line1Arr).toEqual(expect.arrayContaining(["This is a test string"]));
  });

  test("should correctly convert a string with multiple sentences into an split array", () => {
    const haiku = new Haiku("This is a test string. This is a second second. This is the third");
    haiku.lineSplit()
    expect(haiku.line1Arr).toEqual(expect.arrayContaining(["This is a test string", " This is a second second", " This is the third"]));
  });

  test("should correctly determine if array length does not equal 3", () => {
    const haiku = new Haiku("This is a test string. This is a second second. This is the third")
    haiku.lineSplit()
    haiku.checkArray()
    console.log(haiku.line1Arr.length)
    expect(haiku.checkArray()).toEqual("please enter exactly 3 lines")
  });

  test("should correctly determine if 3 items are in the array", () => {
    const haiku = new Haiku("This is a test string. This is a second second. This is the third")
    haiku.lineSplit()
    haiku.checkArray()
    expect(haiku.line1Arr.length).toEqual(3)
  })
    
});

//.to.have.keys('This is a test string','This should be lines','And one last word, smores')
// expect(wizard.inventory).toEqual(expect.not.arrayContaining(["slug potion"]));