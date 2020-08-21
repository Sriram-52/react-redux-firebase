import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from "../../store/actions/authActions";

function SignedInLinks(props) {
  const { profile } = props
  return (
    <ul className='right'>
      <li>
        <a onClick={props.signOut}>Sign Out</a>
      </li>
      <li>
        <NavLink to='/createproject'>Create Project</NavLink>
      </li>
      <li>
        <NavLink className='btn btn-floating pink lighten-1' to='/'>
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      dispatch(signOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
