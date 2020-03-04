import { FETCH_PLAYER, SELECT_PLAYER, CHANGE_TITLE } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    // currently fetching players will clear states, but fetch players is only called in intial load..
    case FETCH_PLAYER: 
      return action.payload;
    case SELECT_PLAYER:
            return {...state,
                selectedPlayer : action.payload,
                shouldReset : false
            }
    case CHANGE_TITLE:
      let check = false;
      action.payload ==="Correct!" ? check = true : check = false
            return {...state,
              confirm : action.payload,
              shouldReset : check,
            }
    default:
      return state;
  }
}
