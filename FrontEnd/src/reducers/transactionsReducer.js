import {
  SET_TRANSACTION,
} from "../actions/types";
import toaster from "toasted-notes";

const initialState = {
  transactions:[]
};

const notify = trans => {
  toaster.notify("Transaction of "+trans.quantity+"Kwh with the price of "+trans.unitPrice, {
  position: 'top-right',
  duration: 3000
});
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSACTION:
      notify(action.payload);
      console.log('payload:', action.payload)
      return {
        transactions: [...state.transactions,action.payload]
      };
    default:
      return state;
  }
}
