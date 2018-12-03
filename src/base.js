import Rebase from 're-base';
import config from './firebaseConfig'
import firebase from '@firebase/app';
require('@firebase/database');


const app = firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId
});

let db = firebase.database(app);
let base = Rebase.createClass(db);

export default base;