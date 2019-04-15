import {
  GET_CONTRACT,
  LOADING_CONTRACT,
  CLEAR_CONTRACT,
} from "../actions/types";

const initialState = {
  contract: null,
  web3: null,
  account : null,
  loading: false,
  transactions:[]
};


export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_CONTRACT:
      return {
        ...state,
        loading: true
      };
    case GET_CONTRACT:
      
      return {
        ...state,
        contract: action.payload.contract,
        web3: action.payload.web3,
        account: action.payload.account,
        loading: false,
      };
    case CLEAR_CONTRACT:
      return {};
    default:
      return state;
  }
}
