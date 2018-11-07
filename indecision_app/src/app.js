class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Indecision",
      subtitle: "Put your life in the hands of a computer",
      options: [],
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      }
    })
  }
  handlePick() {
    let index = Math.floor(Math.random() * this.state.options.length)
    let choice = this.state.options[index]
    alert(choice)
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists'
    }
    this.setState((prevState) => {
      return {
        options: [...prevState.options, option]
      }
    })
  }
  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  const renderOptions = () => {
    return props.options.map(option => {
      return <Option optionText={option} key={option}/>
    })
  }
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}
      >
        Romove All
      </button>
      <ol>
        {props.options ? renderOptions() : null}
      </ol>
    </div>
  )
}

const Option = (props) => {
  return (
    <li>{props.optionText}</li>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    if (error) {
      this.setState(() => {
        return { error }
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

// const User  = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
