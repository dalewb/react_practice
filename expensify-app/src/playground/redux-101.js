import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
});

console.log(store.getState());

// Actions - then an object gets sent to a createStore

// Increment the count
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

// Decrement the count
store.dispatch({
  type: 'DECREMENT'
});

// Reset the count
// store.dispatch({
//   type: 'RESET'
// });

console.log(store.getState());
