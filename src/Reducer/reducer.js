import updateCharacters from './updateCharacters'

export function reducer (previousState, action) {
    switch (action.type) {
        case 'DRAW_MOVEMENT':
            return updateCharacters(previousState, action)
    }
}