console.log("app.js is running")

let app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
}

const mapOptions = (options) => {
  return options.map((option, index) => <li key={index}>{option}</li>)
}

const getOptions = (options) => {
  if (options && options.length > 0) {
    return (
      <ol>{options.map((option, index) => <li key={index}>{option}</li>)}</ol>
    )
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const removeAll = () => {
  if (app.options.length > 0) {
    app.options = []
    render()
  }
}

const appRoot = document.getElementById('app')

const render = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button onClick={removeAll}>Remove All</button>
      {app.options.length > 0 ? <p>Here are your options</p> : <p>You have no options</p>}
      {getOptions(app.options)}
      <form onSubmit={handleSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

render()
