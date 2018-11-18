import { createStore } from 'redux';

// Action Generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy,
})

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy,
})

const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count,
})

const resetCount = () => ({
  type: 'RESET',
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
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

// Reset the count
store.dispatch(resetCount())

// Decrement the count
store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

// Set the count
store.dispatch(setCount({ count: 101 }))
