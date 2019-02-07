import { FETCH_WEATHER } from "../actions";

const INITIAL_STATE = {
  data: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //console.log(action.payload.data, "hhg");
      return { ...state, data: [...state.data, action.payload.data] };
  }
  return state;
}
