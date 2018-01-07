import measureTextWidth from './measureTextWidth';
import {characterStyle, fontSize} from '../Reducer/initialState';

function caclGridSize () {
    const font = characterStyle.fontSize + ' ' + characterStyle.fontFamily;
    //console.log(font);
    const charWidth = measureTextWidth('+', font);
    //console.log('charWidth', charWidth)
    //console.log("window width", window.innerWidth)
    const gridWidth = Math.floor((window.innerWidth -20) / charWidth);
    //console.log('gridWidth', gridWidth)
    const gridHeight = Math.floor((window.innerHeight - 20) / fontSize);
    console.log('window height', window.innerHeight)
    console.log('grid height', gridHeight)

    return {gridHeight, gridWidth, charWidth}
}

export default caclGridSize;