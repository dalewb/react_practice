console.log("appp is running");

let state = {
  show: false,
  details: ["these are some details we can now see!"]
}

const onToggleDetails = () => {
  state.show = !state.show
  render()
}

const renderButton = () => {
  if (!state.show) {
    return <button onClick={onToggleDetails}>Show Details</button>
  } else {
    return <button onClick={onToggleDetails}>Hide Details</button>
  }
}

const renderDetails = () => {
  if (state.details.length > 0) {
    return state.details.map(detail => {
      return <li key={detail}>{detail}</li>
    })
  } else {
    return <p>There are no details to show</p>
  }
}

let appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      {renderButton()}
      <ol>
        {state.show ? renderDetails() : null}
      </ol>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

render()
