import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    console.log(error);
    if (error) {
      this.setState(() => ({ error }))
    } else {
      e.target.reset()
      if (this.state.error) {
        this.setState(() => ({ error: undefined }))
      }
    }
  };

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
