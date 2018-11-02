console.log("app.js is running")

let template = (
  <div>
    <h1>Title</h1>
    <p>this is some info</p>
    <ol>
      <li>One</li>
      <li>Two</li>
    </ol>
  </div>
)

let user = {
  name: "Billy" ,
  age: 31,
  location: "New Orleans"
}

let userName = "Billy"
let userAge = 31
let userLocation = "New Orleans"
let templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
