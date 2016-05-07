import Firebase from 'firebase'
import { FIREBASE_URL } from './constants'

const firebaseRef = new Firebase(FIREBASE_URL)

export default firebaseRef
