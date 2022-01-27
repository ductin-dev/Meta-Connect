import * as storage from "redux-storage";
import { combineReducers, applyMiddleware } from "redux";
import { BigNumber } from "ethers";
import * as actionTypes from "../../data/Action";

export interface walletType {
  address: string;
  credit: BigNumber;
  connected: boolean;
}

export const initState = {
  wallet: {
    address: "",
    credit: BigNumber.from(0),
    connected: false,
  } as walletType,
};

function actionHandler(state = initState, action: any) {
  switch (action.type) {
    case actionTypes.UPDATE_WALLET:
      return {
        ...state,
        wallet: action.wallet,
      };
    default:
      return state;
  }
}

const reducer = storage.reducer(
  combineReducers({
    globalState: actionHandler,
  })
);

export default reducer;
