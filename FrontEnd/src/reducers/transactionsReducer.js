import {
  SET_TRANSACTION,
  SET_TRANSACTIONS,
  TRANS_LOADING
} from "../actions/types";
import toaster from "toasted-notes";

const initialState = {
  transactions: [],
  myTransactions: [],
  loading:false
};

const notify = trans => {
  toaster.notify("Transaction of "+trans.quantity+" Kwh with the price of "+trans.unitPrice +" Ether", {
  position: 'top-right',
});
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSACTION:
      let tran = [];
      notify(action.payload.transaction);
      if (action.payload.account === action.payload.transaction.from || action.payload.account === action.payload.transaction.to) {
         tran = [...state.myTransactions,action.payload.transaction]
      }
      return {
        transactions: [...state.transactions, action.payload.transaction].sort((t1,t2) => (t1.date <= t2.date) ? 1 : -1),
        myTransactions : tran.sort((t1,t2) => (t1.date <= t2.date) ? 1 : -1),
      };
    case SET_TRANSACTIONS:
      return {
        transactions: action.payload.transactions.sort((t1,t2) => (t1.date <= t2.date) ? 1 : -1),
        myTransactions: action.payload.transactions
          .filter((trans) => trans.from === action.payload.account)
          .sort((t1,t2) => (t1.date <= t2.date) ? 1 : -1),
        loading:false
      };
    case TRANS_LOADING:
      return {
        ...state,
        loading:true
      };
    default:
      return state;
  }
}
