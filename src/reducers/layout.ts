import * as ITF from "interfaces";
import * as Types from "constants/index";

import _ from "lodash";
const initialState = {
  isCallingAPI: false,
}

const layout = (state = initialState, action: ITF.IAction) => {
  switch (action.type) {
    case Types.CALLINGAPI:
      return _.assign({}, state, { isCallingAPI: action.payload });

    default:
      return state;
  }
}

export default layout;