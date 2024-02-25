// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'

class Home extends Component {
  state = {
    isLogin: false,
  }

  loginLogout = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <Message isLoggedIn={isLogin} />
          {isLogin ? (
            <Logout isClickLogout={this.loginLogout} />
          ) : (
            <Login isClickLogin={this.loginLogout} />
          )}
        </div>
      </div>
    )
  }
}

export default Home