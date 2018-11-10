import React from 'react';
import Option from './Option'

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

export default Options
