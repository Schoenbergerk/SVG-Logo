const { Triangle, Circle, Square } = require('../lib/shapes');


describe('Circle', () => {
    test('should show the text color as blue', () => {
        const shapeColor = 'blue';
        expectedColor = 'blue';
        const shape = new shapeColor([color]);
        expect(shape.render()).toEqual(expectedColor);
    })
})