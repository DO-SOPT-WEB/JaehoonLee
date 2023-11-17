export const checkPassword = (pwd: string, checkPwd: string) => {
  if (pwd === checkPwd) {
    return true;
  } else {
    return false;
  }
};
