// globals.js
let myGlobalVariable = 'all';
let myFavGlobalVariable = 'all';
let myGlobalSearchVariable = '';
let myFavGlobalSearchVariable = '';
let username = [];
let email = '';
let selectedFavCategory = '';
let FIREBASE_GLOBAL;

module.exports = {
  getMyGlobalVariable: function() {
    return myGlobalVariable;
  },
  setMyGlobalVariable: function(newValue) {
    myGlobalVariable = newValue;
  },
  getMyFavGlobalVariable: function() {
    return myFavGlobalVariable;
  },
  setMyFavGlobalVariable: function(newValue) {
    myFavGlobalVariable = newValue;
  },
  getMyGlobalSearchVariable: function() {
    return myGlobalSearchVariable;
  },
  setMyGlobalSearchVariable: function(newValue) {
    myGlobalSearchVariable = newValue;
  },
  getMyFavGlobalSearchVariable: function() {
    return myFavGlobalSearchVariable;
  },
  setMyFavGlobalSearchVariable: function(newValue) {
    myFavGlobalSearchVariable = newValue;
  },
  getSelectedFavCategory: function() {
    return selectedFavCategory;
  },
  setSelectedFavCategory: function(newValue) {
    selectedFavCategory = newValue;
  },
  getUsername: function() {
    return username;
  },
  setUsername: function(newValue) {
    username = newValue;
  },
  getEmail: function() {
    return email;
  },
  setEmail: function(newValue) {
    email = newValue;
  },
  getFIREBASEGLOBAL: function() {
    return FIREBASE_GLOBAL;
  },
  setFIREBASEGLOBAL: function(newValue) {
    FIREBASE_GLOBAL = newValue;
  } 

};
