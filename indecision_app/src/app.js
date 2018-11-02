console.log("app.js is running")

let app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"],
}

function mapOptions(options) {
  return options.map(option => {
    return (
      <li>{option}</li>
    )
  })
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

let user = {
  name: "Billy",
  age: 31,
  location: "New York",
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

let templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
