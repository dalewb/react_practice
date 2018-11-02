console.log("app.js is running")

let app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
}

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
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
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
