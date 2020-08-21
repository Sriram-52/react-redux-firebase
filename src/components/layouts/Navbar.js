import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

function Navbar(props) {
  const links = props.auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  const { profile } = props
  console.log(profile)
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link className='brand-logo' to='/'>Mario Plan</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
