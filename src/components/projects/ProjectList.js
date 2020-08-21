import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

function ProjectList({ projects }) {
  return (
    <div className='project-list section'>
      {projects.length > 0 ? (
        projects.map((project, index) => {
          return (
            <Link to={'/project/' + project.id} key={index}>
              <ProjectSummary project={project} />
            </Link>
          )
        })
      ) : (
        <div className='center'>No Projects to display</div>
      )}
    </div>
  )
}


export default (ProjectList)