import { checkPassword } from './\bcheckPassword';
type PossibleSignUpProps = {
  id: string;
  pwd: string;
  checkPwd: string;
  nickname: string;
  isExit: boolean;
  onDuplicate: boolean;
};

export const setPossibleSignup = ({
  id,
  pwd,
  checkPwd,
  nickname,
  isExit,
  onDuplicate,
}: PossibleSignUpProps) => {
  const samePwd = checkPassword(pwd, checkPwd);
  if (id !== '' && pwd !== '' && nickname !== '' && !isExit && onDuplicate && samePwd) {
    return 'POSITIVE';
  } else {
    return 'NEGATIVE';
  }
};
