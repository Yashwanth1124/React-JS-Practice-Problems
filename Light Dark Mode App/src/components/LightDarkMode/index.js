// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {changeModeToLight: false}

  changeMode = () => {
    const {changeModeToLight} = this.state

    if (changeModeToLight === false) {
      this.setState({changeModeToLight: true})
    } else {
      this.setState({changeModeToLight: false})
    }
  }

  render() {
    const {changeModeToLight} = this.state
    const bgContainerStyle = changeModeToLight
      ? 'bg-light-container'
      : 'bg-dark-container'
    const headingStyle = changeModeToLight ? 'light-heading' : 'dark-heading'

    return (
      <div className="main-container">
        <div className={bgContainerStyle}>
          <h1 className={headingStyle}>Click To Change Mode</h1>
          {changeModeToLight ? (
            <button
              className="light-button"
              type="button"
              onClick={this.changeMode}
            >
              Dark Mode
            </button>
          ) : (
            <button
              className="dark-button"
              type="button"
              onClick={this.changeMode}
            >
              Light Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
