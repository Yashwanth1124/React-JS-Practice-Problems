// Write your code here
import './index.css'

const Login = props => {
  const {isClickLogin} = props
  return (
    <button type="button" className="login-button" onClick={isClickLogin}>
      Login
    </button>
  )
}

export default Login