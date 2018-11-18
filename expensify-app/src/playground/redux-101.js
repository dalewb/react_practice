import { createStore } from 'redux';

// Action Generators - functions that return action objects

const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      const count = action.count
      return {
        count
      }
    default:
      return state
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Actions - then an object gets sent to a createStore

// Increment the count
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

// Decrement the count
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10,
});

// Reset the count
store.dispatch({
  type: 'RESET'
});

// Set the count
store.dispatch({
  type: 'SET',
  count: 101,
})
