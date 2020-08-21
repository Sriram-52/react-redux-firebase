import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

function ProjectDetails(props) {
  const { project, auth } = props
  if (!auth.uid) return <Redirect to='/signin' />
  if (Object.keys(project).length)
    return (
      <div>
        <div className='container project-details section'>
          <div className='card z-depth-0'>
            <div className='card-content grey-text text-darken-3'>
              <span className='card-title'>{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className='card-action grey lighten-4 grey-text-4'>
              <div>
                Posted by {project.authorFirstName + ' ' + project.authorLastName}
              </div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  return (
    <div>
      <div className='center container'>
        <p>Loading..</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.firestore.data['project']
      ? state.firestore.data.project
      : {},
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: 'projects',
        doc: props.match.params.id,
        storeAs: 'project',
      },
    ]
  })
)(ProjectDetails)
