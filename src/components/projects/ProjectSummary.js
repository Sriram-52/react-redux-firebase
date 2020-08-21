import React from 'react'
import moment from 'moment'

function ProjectSummary({ project }) {
  return (
    <div className='card z-depth-0 project-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title '>{project.title}</span>
        <p>{project.content}</p>
        <div className='card-action grey lighten-4 grey-text-4'>
          <div>
            Posted by {project.authorFirstName + ' ' + project.authorLastName}
          </div>
          <div>{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
