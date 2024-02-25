// Write your code here
import './index.css'

const Logout = props => {
  const {isClickLogout} = props
  return (
    <button type="button" className="logout-button" onClick={isClickLogout}>
      Logout
    </button>
  )
}

export default Logout