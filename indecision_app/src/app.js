console.log("app.js is running")

let app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"],
}

function mapOptions(options) {
  return options.map((option, index) => <li key={index}>{option}</li>)
}

function getOptions(options) {
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

let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {getOptions(app.options)}
  </div>
)

let count = {
  value: 0,
}

const increaseCounter = (e) => count.value++

const templateTwo = (
  <div>
    <h1>Count: {count.value}</h1>
    <button className="button" onClick={increaseCounter}>+1</button>
  </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
