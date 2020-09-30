import * as ITF from "interfaces";
import * as Types from "constants/index";

const initialState = {}

const layout = (state = initialState, action: ITF.IAction) => {
  switch (action.type) {
    case Types.GET_USER_INFO:
      return action.payload;

    default:
      return state;
  }
}

export default layout;