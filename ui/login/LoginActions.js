export const changeHttpStatusCode = (httpStatusCode) => {
  return {
    type: 'CHANGE_LOGIN_STATUS',
    payload: httpStatusCode,
  }
}