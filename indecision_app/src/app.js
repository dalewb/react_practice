console.log("app.js is running")

let app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"],
}

const mapOptions = (options) => {
  return options.map((option, index) => <li key={index}>{option}</li>)
}

const getOptions = (options) => {
  if (options && options.length > 0) {
    return (
      <div>
        <p>Here are your options:</p>
        <ol>{mapOptions(options)}</ol>
      </div>
    )
  } else {
    return <p>No options</p>
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("Submitted")
}

let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {getOptions(app.options)}
    <form onSubmit={handleSubmit}>
      <input type="text" name="option"></input>
      <button>Add Option</button>
    </form>
  </div>
)

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
