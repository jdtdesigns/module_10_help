const { Circle, Square } = require('../lib/shapes');

describe('Shape Class Tests', () => {
  it('Should render a square element tag', () => {
    const square = new Square('xyz', 'red', 90, 75);

    square.setColor('red');

    expect(square.render()).toBe('<rect width="150" height="150" fill="red" />')
  });

  it('Should return a cicle object matching specific properties', () => {
    const circle = new Circle('xyz', 'blue', 90, 75);

    circle.setColor('blue');

    console.log(circle);

    expect(circle).toMatchObject({
      text: 'xyz',
      textColor: 'blue',
      textX: 90,
      textY: 75
    });
  })
});