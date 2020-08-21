import React, { Component } from 'react'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.signIn(this.state)
  }

  render() {
    const { authError, auth } = this.props
    if(auth.uid) return <Redirect to='/'/>
    return (
      <div>
        <div className='container'>
          <form onSubmit={this.onSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>SignIn</h5>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' onChange={this.handleChange} />
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                onChange={this.handleChange}
              />
            </div>
            <div className='input-field'>
              <button type='submit' className='btn pink lighten-1 z-depth-0'>
                Login
              </button>
              {authError ? (
                <div className='red-text center'>{authError}</div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (creds) => {
      dispatch(signIn(creds))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
