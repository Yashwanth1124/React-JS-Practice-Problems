// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {countValue: 0, displayCountType: 'Count is Even'}

  incrementRandomNumber = () => {
    const x = Math.floor(Math.random() * 100)
    this.setState({countValue: x})
    if (x % 2 === 0) {
      this.setState({displayCountType: 'Count is Even'})
    } else {
      this.setState({displayCountType: 'Count is Odd'})
    }
  }

  render() {
    const {countValue, displayCountType} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Count {countValue}</h1>
          <p className="description">{displayCountType}</p>
          <button
            className="increment-button"
            type="button"
            onClick={this.incrementRandomNumber}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
