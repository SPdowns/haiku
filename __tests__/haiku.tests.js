import { Haiku } from "./../src/haiku.js"

describe('Haiku', () => {

  test("should correctly split the text at return cariage and/or period", () => {
    const haiku = new Haiku("This is a test string. This should be lines. And one last word, smores");
    expect(haiku.line1).toEqual("This is a test string. This should be lines. And one last word, smores");
  });

  test("should correctly split the text at a peroid", () => {
  const haiku = new Haiku("This is a test string. This should be lines. And one last word, smores.");
  expect(haiku.line1).toEqual(["This is a test string.", "This should be lines.", "And one last word, smores."])
  });
});