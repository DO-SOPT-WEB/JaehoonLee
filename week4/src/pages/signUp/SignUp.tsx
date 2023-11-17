import * as S from './SignUp.style';
import Button from '../../components/atomComponents/Button';
import useFormInput from '../../hooks/useFormInput';
import useRouter from '../../hooks/useRouter';
import { useState, useEffect } from 'react';
import { client } from '../../apis/client';
import { setPossibleSignup } from '../../utils/setPossibleSignup';
import DuplicateCheckButton from '../../components/atomComponents/DuplicateCheckButton';

const SignUp = () => {
  const [isDuplicateBtnClick, setIsDuplicateBtnClick] = useState(false); //중복버튼 클릭 상태
  // const userId = useFormInput();
  const [userId, setUserId] = useState('');
  const userPwd = useFormInput();
  const checkUserPwd = useFormInput();
  const userNickname = useFormInput();

  const [isExist, setIsExist] = useState(false); //중복여부
  const [signUpBtnState, setSignUpBtnState] = useState('DEFAULT'); //회원가입 버튼 활성화 여부
  const [duplicateBtnState, setDuplicateBtnState] = useState<'POSITIVE' | 'NEGATIVE' | 'DEFAULT'>(
    'DEFAULT', //중복버튼 색상 상태
  );

  const { routeTo } = useRouter();

  const handleBtnState = (e) => {
    setIsDuplicateBtnClick(false);
    setUserId(e.target.value);
  };
  const handleSignUp = async () => {
    try {
      const res = await client.post(`/api/v1/members`, {
        username: userId,
        password: userPwd.value,
        nickname: userNickname.value,
      });
      if (res.status === 201) {
        routeTo('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  //중복 확인 버튼
  const handleDuplicateBtn = async () => {
    try {
      const res = await client.get(`api/v1/members/check?username=${userId}`);
      setIsExist(res.data.isExist);
    } catch (err) {
      console.log(err);
    }
    setIsDuplicateBtnClick(true);
  };

  useEffect(() => {
    const btn = setPossibleSignup({
      id: userId,
      pwd: userPwd.value,
      checkPwd: checkUserPwd.value,
      nickname: userNickname.value,
      isExit: isExist,
      onDuplicate: isDuplicateBtnClick,
    });
    setSignUpBtnState(btn);
  }, [userId, userPwd.value, userNickname, isDuplicateBtnClick, isExist]);

  useEffect(() => {
    console.log(isDuplicateBtnClick);
    if (!isDuplicateBtnClick) {
      setDuplicateBtnState('DEFAULT');
    } else if (userId !== '' && isExist) {
      setDuplicateBtnState('NEGATIVE');
    } else if (userId !== '' && !isExist) {
      setDuplicateBtnState('POSITIVE');
    }
  }, [userId, isExist, isDuplicateBtnClick]);
  return (
    <S.SignUpWrapper>
      <S.SignUpTitle>Sign Up</S.SignUpTitle>
      <S.SignUpFormWrapper>
        <S.InputLabel>
          <S.LabelSpan> ID : </S.LabelSpan>
          <S.SignUpInput
            $wid={false}
            type="text"
            placeholder="아이디를 입력해주세요"
            value={userId}
            onChange={handleBtnState}
          />
          {/* <S.DuplicationBtn>중복확인</S.DuplicationBtn> */}
          <DuplicateCheckButton
            type={duplicateBtnState}
            onClick={handleDuplicateBtn}
          ></DuplicateCheckButton>
        </S.InputLabel>
        <S.InputLabel>
          <S.LabelSpan> 비밀번호 : </S.LabelSpan>
          <S.SignUpInput
            $wid={true}
            type="text"
            placeholder="비밀번호를 입력해주세요"
            {...userPwd}
          />
        </S.InputLabel>
        <S.InputLabel>
          <S.LabelSpan> 비밀번호 확인 : </S.LabelSpan>
          <S.SignUpInput
            $wid={true}
            type="text"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            {...checkUserPwd}
          />
        </S.InputLabel>
        <S.InputLabel>
          <S.LabelSpan> 닉네임 : </S.LabelSpan>
          <S.SignUpInput
            $wid={true}
            type="text"
            placeholder="닉네임을 입력해주세요"
            {...userNickname}
          />
        </S.InputLabel>
        <Button type={signUpBtnState} onClick={handleSignUp}>
          회원가입
        </Button>
      </S.SignUpFormWrapper>
    </S.SignUpWrapper>
  );
};

export default SignUp;
