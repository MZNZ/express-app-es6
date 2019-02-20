export const changeHttpStatusCode = (httpStatusCode) => {
  console.log(httpStatusCode);
  return {
    type: 'CHANGE_LOGIN_STATUS',
    payload: httpStatusCode,
  }
}