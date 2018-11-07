class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Indecision",
      subtitle: "Put your life in the hands of a computer",
      options: props.options,
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch(e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('save data');
    }
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}))
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }))
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

    this.setState((prevState) => ({
      options: [...prevState.options, option]
    }))

  }

  render() {
    return (
      <div>
        <Header
          subtitle={this.state.subtitle}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision"
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
      return (
        <Option
          optionText={option}
          key={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      )
    })
  }

  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}
      >
        Romove All
      </button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      <ol>
        {props.options ? renderOptions() : null}
      </ol>
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <li>{props.optionText}</li>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
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
      this.setState(() => ({ error }))
    } else {
      e.target.reset()
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
