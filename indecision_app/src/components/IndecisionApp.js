import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of a computer",
      options: [],
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
      console.log("Error: ", e)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

export default IndecisionApp
