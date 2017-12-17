import {connect} from 'react-redux';

import CharGrid from './CharGrid';
import {actions} from '../Actions/actions';

export const mapStateToProps = (state) => {
    // const debug = state.characterGrid.toJS()
    return {
        grid: state.get('characterGrid'),
        style: state.get('gridStyle'),
    }
 }

export const mapDispatchToProps = (dispatch) => {
     return {
         mouseMoveEvent: (character) => (e) => {
            if (isDrawing(e.buttons)){
                e.preventDefault();
                const newMousePostion = {
                    x: e.screenX,
                    y: e.screenY
                };
                dispatch(actions.drawMovement(newMousePostion, character))
            }
         },
         mouseEnterEvent: (e) => {
             if(isMouseDown(e)){
                 const mousePosition = {
                    x: e.screenX,
                    y: e.screenY
                 }
                 dispatch(actions.startDrawing(mousePosition))
             }
         },
         mouseExitEvent: (e) => {
             dispatch(actions.stopDrawing)
         }
     }
 }

 function isMouseDown(event) {
//TODO
 //Determine whether the mouse button is held down when entering
 //or exiting the grid
 } 

const CharContainerGrid = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharGrid)

function isDrawing(buttonCode){
    //determine whether the mouse button is
    //being held down when dragging
    //TODO
    return true;
}

  export default CharContainerGrid;