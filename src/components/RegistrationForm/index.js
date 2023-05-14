// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({isFirstNameEmpty: true})
    }
  }

  onReset = () => {
    this.setState({isSubmitted: false, firstName: '', isLastNameEmpty: ''})
  }

  submitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    if (firstName === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({isFirstNameEmpty: false})
    }
    if (lastName === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({isLastNameEmpty: true})
    }
  }

  render() {
    const {
      isLastNameEmpty,
      isFirstNameEmpty,
      firstName,
      lastName,
      isSubmitted,
    } = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isSubmitted ? (
          <div className="submit-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="image"
            />
            <p>Submitted Successfully</p>
            <button
              type="button"
              className="reset-btn button"
              onClick={this.onReset}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <div>
            <form className="form-container" onSubmit={this.submitForm}>
              <div className="card">
                <label htmlFor="firstName" className="labelEl">
                  FIRST NAME
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  className="inputEl"
                  onBlur={this.onBlurFirstName}
                  value={firstName}
                  onChange={this.onChangeFirstName}
                />
                {isFirstNameEmpty && <p className="warning">Required</p>}
              </div>
              <div className="card">
                <label htmlFor="lastName" className="labelEl">
                  LAST NAME
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className="inputEl"
                  onBlur={this.onBlurLastName}
                  value={lastName}
                  onChange={this.onChangeLastName}
                />
                {isLastNameEmpty && <p className="warning">Required</p>}
              </div>
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
