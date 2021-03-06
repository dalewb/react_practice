console.log("app.js is running")

let app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
  choice: '',
}

const getOptions = (options) => {
  if (options && options.length > 0) {
    return (
      options.map((option, index) => {
        return <li key={index}>{option}</li>
      })
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

const onMakeDecision = () => {
  let index = Math.floor(Math.random() * app.options.length)
  let choice = app.options[index]
  alert(choice)
}

const removeAll = () => {
  if (app.options.length > 0) {
    app.options = []
  }
  render()
}

const appRoot = document.getElementById('app')

const render = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <p>Here are your options</p> : <p>You have no options</p>}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {getOptions(app.options)}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

render()
