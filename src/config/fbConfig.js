import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCMV4WvB2gbBfYUsrTQPIFvk7SSIH2XbLE',
  authDomain: 'mario-plan-9210f.firebaseapp.com',
  databaseURL: 'https://mario-plan-9210f.firebaseio.com',
  projectId: 'mario-plan-9210f',
  storageBucket: 'mario-plan-9210f.appspot.com',
  messagingSenderId: '175848726632',
  appId: '1:175848726632:web:0eb2dc25bb41eed87a1bdd',
  measurementId: 'G-ZJ5HVR1LHV',
}

firebase.initializeApp(firebaseConfig)

export default firebase