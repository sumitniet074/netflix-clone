import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAHDg9dwGC_gKF2NRTK20ixZXw__72mPVY",
  authDomain: "netflix-clone-75e89.firebaseapp.com",
  projectId: "netflix-clone-75e89",
  storageBucket: "netflix-clone-75e89.appspot.com",
  messagingSenderId: "227743329622",
  appId: "1:227743329622:web:673eabe1d31223a67efaf7",
  measurementId: "G-7N1W2SN6MQ"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
