import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notification from './Notification'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s6'>
            <ProjectList
              projects={
                Array.isArray(this.props.projects) ? this.props.projects : []
              }
            />
          </div>
          <div className='col s5 offset-1'>
            <Notification />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects', }])
)(Dashboard)
