import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'rq98pqfvey',
    description: "January Rent",
    note: "This is the final payment for the address",
    amount: 54500,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: null,
    endDate: null,
  },
};
