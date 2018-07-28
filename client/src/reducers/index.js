import { combineReducers } from 'redux';

const basic = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  basic
});
