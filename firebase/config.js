import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBs2wDrIMiWjZfUs0Va9Iu2MKURYP--fOE',
  authDomain: 'facebook-clone-ae8d8.firebaseapp.com',
  projectId: 'facebook-clone-ae8d8',
  storageBucket: 'facebook-clone-ae8d8.appspot.com',
  messagingSenderId: '87938274364',
  appId: '1:87938274364:web:f66039faee22638eb31f39',
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)

const storage = getStorage()

const db = getFirestore(firebaseApp)

const googleProvider = new GoogleAuthProvider()

export { auth, storage, db, googleProvider }
