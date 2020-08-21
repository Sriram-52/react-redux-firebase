const functions = require('firebase-functions')

const admin = require('firebase-admin')
const fbConfig = require('./fbConfig')
admin.initializeApp(fbConfig)

// const notificationsCreate = (notification) => {
//   return admin
//     .firestore()
//     .collection('notifications')
//     .add({
//       user: notification.user,
//       content: notification.content,
//       time: notification.time,
//     })
//     .then((doc) => console.log('notificationCreated', doc))
// }

// exports.projectNotifications = functions.firestore
//   .document('projects/{projectID}')
//   .onCreate((doc) => {
//     const project = doc.data()
//     const notification = {
//       user: `${project.authorFirstName} ${project.authorLastName}`,
//       title: 'Added a project',
//       time: admin.firestore.FieldValue.serverTimestamp(),
//     }
//     return notificationsCreate(notification)
//   })

// exports.signupNotification = functions.auth.user().onCreate((user) => {
//   const dbRef = admin.firestore().collection('users').doc(user.uid)
//   return dbRef
//     .get()
//     .then((doc) => {
//       const newUser = doc.data()
//       const notification = {
//         user: `${newUser.firstName} ${newUser.lastName}`,
//         title: 'Joined the party',
//         time: admin.firestore.FieldValue.serverTimestamp(),
//       }
//       return notificationsCreate(notification)
//     })
//     .catch((err) => {
//       console.error(err)
//       return err
//     })
// })

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notification)
    .then((doc) => console.log('notification added', doc))
}

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate((doc) => {
    const project = doc.data()
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    }

    return createNotification(notification)
  })

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data()
      const notification = {
        content: 'Joined the party',
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      }

      return createNotification(notification)
    })
})
