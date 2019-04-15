import {
  SET_TRANSACTION,
} from "./types";

export const setTransactionAction = (contract) => dispatch => {
  
  const messageEvent = contract.events.message();

  messageEvent.on("data", event => {    
   let time = new Date(event.returnValues[4] * 1000).toLocaleString();

   const trans = {
     from: event.returnValues[0],
     to: event.returnValues[1],
     unitPrice: event.returnValues[1],
     quantity: event.returnValues[3]._hex,
     date:time
    };

    dispatch(transactionAction(trans));

 })
 .on("error", console.error);

};
  


  const transactionAction = (data) => {
    return {
      type: SET_TRANSACTION,
        payload: data,
    }
  }


