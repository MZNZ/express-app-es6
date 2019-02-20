const loginInitState = {
  httpStatusCode: null
};

export const login = (state = loginInitState, {type, payload}) => {
  switch (type) {
    case 'CHANGE_LOGIN_STATUS':
      const newState = {httpStatusCode: payload};
      return {...state, ...newState};
    default:
      return state;
  }
};