import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATA
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducer = (state = [], action) => {
  
}

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
