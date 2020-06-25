import { Haiku } from "./../src/haiku.js"

describe('Haiku', () => {

  test("should correctly declare a haiku", () => {
    const haiku = new Haiku("This is a test string. This should be lines. And one last word, smores");
    expect(haiku.line1).toEqual("This is a test string. This should be lines. And one last word, smores");
  });

  test("should correctly split the text at a peroid", () => {
  const haiku = new Haiku("This is a test string. This should be lines. And one last word, smores.",[]);
  haiku.lineSplit()
  console.log(haiku)
  expect(haiku.line1Arr).any("This is a test string", " This should be lines", " And one last word, smores.")
  });
});

//.to.have.keys('This is a test string','This should be lines','And one last word, smores')
