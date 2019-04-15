import {
  LOADING_CONTRACT,
  GET_CONTRACT,
  CLEAR_ERRORS,
  GET_ERRORS,
  CLEAR_CONTRACT,
} from "./types";
import getContract from "../utils/getContract";
import {setTransactionAction} from './transactionsActions';

export const setContractAction = () => dispatch => {
  
  dispatch(setContractLoading());
  getContract
    .then((data) => {
    const { web3 } = data;
    web3.eth.getAccounts()
      .then(dataAccount => {
      const account = dataAccount[0];
        web3.eth.defaultAccount = account;
        dispatch(contractAction(data));
        dispatch(setTransactionAction(data.contract));
      });
  })
  .catch(error => {
    if (error.response && error.response.data) {
      dispatch({
        type: GET_ERRORS,
        payload: {
          message: error.response.data,
          visible: true
        }
      })
    }
  })
};
  
  const contractAction = (data) => {
    return {
      type: GET_CONTRACT,
        payload: {
        contract: data.contract,
        web3: data.web3,
        account: data.web3.eth.defaultAccount,
        }
    }
  }


// Set loading state
export const setContractLoading = () => {
  return {
    type: LOADING_CONTRACT
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const clearContract = () => {
  return {
    type: CLEAR_CONTRACT
  };
};

