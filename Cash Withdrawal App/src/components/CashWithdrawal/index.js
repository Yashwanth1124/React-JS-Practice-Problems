// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {fullName: 'Sarah Williams', originalAmount: 2000}

  onClickReduceAmount = value => {
    const {originalAmount} = this.state
    // console.log(originalAmount)
    if (originalAmount >= value) {
      this.setState({originalAmount: originalAmount - value})
    }
  }

  render() {
    const {denominationsList} = this.props
    // console.log(denominationsList)
    const {fullName, originalAmount} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="cash-withdrawal-container">
            <div className="name-container">
              <div className="first-letter-container">
                <h1 className="first-letter">{fullName.slice(0, 1)}</h1>
              </div>
              <p className="full-name">{fullName}</p>
            </div>
            <div className="balance-container">
              <p className="your-balance">Your Balance</p>
              <div className="amount-container">
                <p className="amount">{originalAmount}</p>
                <p className="amount-type">In Rupees</p>
              </div>
            </div>
            <div className="withdraw-container">
              <p className="withdraw">Withdraw</p>
              <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
              <ul className="unordered-list-container">
                {denominationsList.map(eachItem => (
                  <DenominationItem
                    denominationDetails={eachItem}
                    key={eachItem.id}
                    onClickReduceAmount={this.onClickReduceAmount}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
