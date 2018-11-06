class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Indecision",
      subtitle: "Put your life in the hands of a computer",
      options: ['thing one', 'thing two', 'thing three'],
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
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
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {

  constructor(props) {
    super(props)
  }

  renderOptions() {
    return this.props.options.map(option => {
      return <Option optionText={option} key={option}/>
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.props.handleDeleteOptions}
        >
          Romove All
        </button>
        <ol>
          {this.props.options ? this.renderOptions() : null}
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>{this.props.optionText}</li>
    )
  }
}

class AddOption extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option) {
      alert(option)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
