import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  multiTwo = () =>{
    this.props.onMulti()
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {'a'}
        <button onClick={onIncrement}>
          +
        </button>
        {'b'}
        <button onClick={onDecrement}>
          -
        </button>
        {'c'}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {'d'}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>  
        {'e'}
        <button onClick={this.multiTwo}>
          Multi x 2
        </button>        
      </p>
    )
  }
}

export default Counter
