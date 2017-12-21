import {Map} from 'immutable';

import {getMouseDirection, getAsciiCharacter} from './updateCharacters';
import updateCharacters from './updateCharacters'
import {initialCharacter} from './initialState'
import INITIAL_STATE from './initialState'

test('getMouseDirection() finds the correct vector angle based on the start and end point', () => {
    const startPoint1 = Map({
        x: 0,
        y: 0
    })
    const endPoint1 = Map({
        x: 1,
        y: 0
    })
    const endPoint2 = Map({
        x: 1,
        y: 1
    })
    const endPoint3 = Map({
        x: 0,
        y: 1
    })
    const angle1 = getMouseDirection(startPoint1, endPoint1)
    const angle2 = getMouseDirection(startPoint1, endPoint2)
    const angle3 = getMouseDirection(startPoint1, endPoint3)

    expect(angle1).toEqual(0)
    expect(angle2).toEqual(45)
    expect(angle3).toEqual(90)
})

test('getAsciiCharacter() returns the correct character based on the angle', () => {
    expect(getAsciiCharacter(0)).toEqual('-')
    expect(getAsciiCharacter(45)).toEqual('\\')
    expect(getAsciiCharacter(90)).toEqual('|')
    expect(getAsciiCharacter(135)).toEqual('/')
})

test('updateCharacter() updates the mousePosition to the new mouse position', () => {
    const newPosition = Map({
        x: 1,
        y: 2
    })
    const newState = updateCharacters(INITIAL_STATE, newPosition, initialCharacter)
    expect(newState.get('mousePosition')).toEqual(newPosition)
})
