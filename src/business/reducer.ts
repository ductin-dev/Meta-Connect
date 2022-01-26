import { combineReducers } from "redux";
import { BigNumber } from "ethers";
import * as actionTypes from "../data/Action";

export const initState = {
  wallet: {
    address: "",
    credit: BigNumber.from(0),
    connected: false,
  },
};

function actionHandler(state = initState, action: any) {
  switch (action.type) {
    case actionTypes.WALLET_CONNECT:
      return {
        ...state,
        wallet: action.wallet,
      };
    case actionTypes.WALLET_DISCONNECT:
      return {
        ...state,
        wallet: action.wallet,
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  globalState: actionHandler,
});

export default reducer;
