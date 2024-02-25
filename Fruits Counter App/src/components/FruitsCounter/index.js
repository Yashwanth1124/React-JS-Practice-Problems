// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  increaseMangoCount = () => {
    this.setState(prevState => {
      console.log(`Previous Mango Count Value: ${prevState.mangoCount}`)
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  increaseBananaCount = () => {
    this.setState(prevState => {
      console.log(`Previous Banana Count Value: ${prevState.bananaCount}`)
      return {bananaCount: prevState.bananaCount + 1}
    })
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">
            Bob ate <span className="count-number">{mangoCount}</span> mangoes{' '}
            <span className="count-number">{bananaCount}</span> bananas
          </h1>
          <div className="image-button-container">
            <div className="mat">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.increaseMangoCount}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="mat">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.increaseBananaCount}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
