import {createStore, combineReducers, compose} from 'redux'
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';
// @todo

const firebaseConfig = {
    apiKey: "AIzaSyBrI6MzblCLXMM0EWtbeoAF2m9h4eEwvQw",
    authDomain: "reactclientpanel-9a17e.firebaseapp.com",
    databaseURL: "https://reactclientpanel-9a17e.firebaseio.com",
    projectId: "reactclientpanel-9a17e",
    storageBucket: "reactclientpanel-9a17e.appspot.com",
    messagingSenderId: "197802320977"
};


// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);


// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
})

// Check for settings in localStorage
if(localStorage.getItem('settings') == null){
    // Default settings
    const defaultSettings = {
        disableBalanceOnAdd: true,
        disableBalanceOnEdit: false,
        allowRegistration: false
    }

    // Set to localStorage
    localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

// Create initial state
const initialState = {settings: JSON.parse(localStorage.getItem('settings'))};

// Create store

const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    compose(
        reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
