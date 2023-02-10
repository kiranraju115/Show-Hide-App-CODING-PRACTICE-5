// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameClicked: false, isLastNameClicked: false}

  onClickShowHideFirstName = () => {
    this.setState(prevState => ({
      isFirstNameClicked: !prevState.isFirstNameClicked,
    }))
  }

  onClickShowHideLastName = () => {
    this.setState(prevState => ({
      isLastNameClicked: !prevState.isLastNameClicked,
    }))
  }

  render() {
    const {isFirstNameClicked, isLastNameClicked} = this.state
    return (
      <div className="container">
        <h1 className="header"> Show/Hide</h1>
        <div className="ins-container">
          <div className="name-btn-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickShowHideFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstNameClicked ? <p className="hide-box">Joe</p> : null}
          </div>
          <div className="name-btn-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickShowHideLastName}
            >
              Show/Hide LastName
            </button>
            {isLastNameClicked ? <p className="hide-box">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
