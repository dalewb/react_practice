let count = 0

const plusOne = () => {
  count++
  renderCounterApp()
}

const minusOne = () => {
  count > 0 ? count-- : null
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button className="button" onClick={plusOne}>+1</button>
      <button className="button" onClick={minusOne}>-1</button>
      <button className="button" onClick={reset}>Reset</button>
    </div>
  )

  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()
