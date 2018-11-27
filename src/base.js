import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import config from './firebaseConfig'
import fb from 'firebase/app';

const app = firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId
});

let db = firebase.database(app);
let base = Rebase.createClass(db);

export default base;

