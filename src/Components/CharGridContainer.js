import {connect} from 'react-redux';

import CharGrid from './CharGrid';
import actions from '../Actions/actions';

 const mapStateToProps = (state) => {
    return {
        grid: state.characterGrid,
        style: {},
    }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         mouseMoveEvent: (character) => (e) => {
            if (isDrawing(e.buttons)){
                e.preventDefault();
                const newMousePostion = {
                    x = e.screenX,
                    y = e.screenY
                };
                dispatch(actions.drawMovement(newMousePostion, character))
            }
         }
     }
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