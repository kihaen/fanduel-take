import * as actions from '../actions'
import * as types from '../actions/types'

//necessary as redux thunk will return dispatch as anon funct -- Async Dispatch
import configureMockStore from "redux-mock-store"; 
import thunk from "redux-thunk";
export const mockStore = configureMockStore([thunk]);

describe('action should sent player obj', () => {
  it('should create an action to add a todo', async() => {
    const store = mockStore();
    const player = {
        name : 'Jordan',
        fppg : 1352.32
    }
    await store.dispatch(actions.selectPlayer(player));
    const action = store.getActions();
    const expectedAction = {    
      type: types.SELECT_PLAYER,
      payload : player
    }
    expect(action[0]).toEqual(expectedAction);
  })
})