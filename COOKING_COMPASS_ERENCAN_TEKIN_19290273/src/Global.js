// globals.js
let myGlobalVariable = 'all';
let myGlobalSearchVariable = '';

module.exports = {
  getMyGlobalVariable: function() {
    return myGlobalVariable;
  },
  setMyGlobalVariable: function(newValue) {
    myGlobalVariable = newValue;
  },
  getMyGlobalSearchVariable: function() {
    return myGlobalSearchVariable;
  },
  setMyGlobalSearchVariable: function(newValue) {
    myGlobalSearchVariable = newValue;
  }
};
