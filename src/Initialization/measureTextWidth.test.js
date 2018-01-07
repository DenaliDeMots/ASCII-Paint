import getTextWidth from './measureTextWidth';

test('getTextWidth returns a valid measurement', () => {
    const width = getTextWidth('+', '18pt Courier');
    expect(typeof width).toBe('number');
})

test('getTextWidth includes spacing between characters', () => {
    const singleCharWidth = getTextWidth('+', '18px Courier')
    const calculatedWidth = singleCharWidth * 30
    const thirtyCharWidth = getTextWidth('++++++++++++++++++++++++++++++', '18px Courier')
    expect(calculatedWidth).toBeCloseTo(thirtyCharWidth)
})