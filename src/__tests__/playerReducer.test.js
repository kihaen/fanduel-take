import reducer from '../reducers/playerReducer';
import * as types from '../actions/types';

describe('players into state',()=>{  
    it('should return the initial state',()=>{
        expect(reducer([],{})).toEqual([])
    })

    it('should handle SELECT_PLAYER:', () => {
    const player = {
        name : "rodger",
        fppg : 12345
    }
        expect(
          reducer([], {
            type: types.SELECT_PLAYER,
            payload: player
          })
        ).toEqual(
          {
            selectedPlayer: player,
            shouldReset : false
          }
        )
    })
    // testing change title from empty state...
    it('should handle CHANGE_TITLE:', () => {
            expect(
              reducer([], {
                type: types.CHANGE_TITLE,
                payload: "Correct!"
              })
            ).toEqual(
              {
                confirm : "Correct!",
                shouldReset : true,
              }
            )
        })
})

