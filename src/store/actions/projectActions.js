export const createProject = (project) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore()
    const profile = getState().firebase.profile
    const authorID = getState().firebase.auth.uid
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: new Date(),
        authorID
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project })
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err })
      })
  }
}
