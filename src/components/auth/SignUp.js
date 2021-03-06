import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  render() {
    const { auth, authError } = this.props
    if(auth.uid) return <Redirect to='/'/>
    return (
      <div>
        <div className='container'>
          <form onSubmit={this.onSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>SignUp</h5>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="firstName">FirstName</label>
                <input type="text" id="firstName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="lastName">LastName</label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <button type='submit' className='btn pink lighten-1 z-depth-0'>SignUp</button>
              <div className="red-text center">
                {authError ? authError : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (newUser) => {
      dispatch(signUp(newUser))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
