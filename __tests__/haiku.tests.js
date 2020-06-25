import { Haiku } from "./../src/haiku.js"

describe('Haiku', () => {

  test("should correctly declare a haiku", () => {
    const haiku = new Haiku("This is a test string. This should be lines. And one last word, smores", []);
    expect(haiku.line1).toEqual("This is a test string. This should be lines. And one last word, smores", []);
  });

  test("should correctly convert a string into an array", () => {
  const haiku = new Haiku("This is a test string.");
  haiku.lineSplit()
  expect(haiku.line1Arr).toEqual(expect.arrayContaining(["This is a test string", ""]));
  });
});

//.to.have.keys('This is a test string','This should be lines','And one last word, smores')
// expect(wizard.inventory).toEqual(expect.not.arrayContaining(["slug potion"]));