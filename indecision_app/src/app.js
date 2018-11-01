console.log("app.js is running")

let template = <div><h1>Title</h1> <p>this is some info</p></div>
let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
