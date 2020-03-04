import axios from 'axios';
import { FETCH_PLAYER, SELECT_PLAYER, CHANGE_TITLE } from './types';

export const fetchPlayers = () => async dispatch => {
  const res = await axios.get('https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json');

  dispatch({ type: FETCH_PLAYER, payload: res.data });
};

export const selectPlayer = (player) => dispatch =>{ // expect player object 
    console.log("selectPlayer - action")
    dispatch({ type: SELECT_PLAYER, payload: player});
}

export const setPageTitle = (title) => dispatch =>{
    dispatch({ type: CHANGE_TITLE, payload: title});
}