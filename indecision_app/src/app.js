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

let templateTwo = (
  <div>
    <h1>William Dale</h1>
    <p>Age: 31</p>
    <p>Location: New York</p>
  </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
