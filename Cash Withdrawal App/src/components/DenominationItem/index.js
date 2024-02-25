// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onClickReduceAmount} = props
  const {value} = denominationDetails
  // console.log(denominationDetails)

  const onReduceAmount = () => {
    onClickReduceAmount(value)
  }

  return (
    <li className="list-item-container">
      <button type="button" className="custom-button" onClick={onReduceAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
