import * as S from './MyPage.style';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useRouter from '../../hooks/useRouter';
import { client } from '../../apis/client';
import Button from '../../components/atomComponents/Button';
const MyPage = () => {
  const [data, setData] = useState();
  const { userId } = useParams();
  const { routeTo } = useRouter();
  const getUserInfo = async () => {
    try {
      const res = await client.get(`/api/v1/members/${userId}`);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    routeTo('/');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <S.MyPageWrapper>
      <S.MyPageTitle> MY PAGE</S.MyPageTitle>
      <S.MyPageContainer>
        <S.MyPageImage />
        <S.UserInfoWrapper>
          <S.UserInfoContainer>
            <S.UserInfoText>ID: </S.UserInfoText> <S.UserInfoText>{data?.username}</S.UserInfoText>
          </S.UserInfoContainer>
          <S.UserInfoContainer>
            <S.UserInfoText>닉네임: </S.UserInfoText>
            <S.UserInfoText> {data?.nickname}</S.UserInfoText>
          </S.UserInfoContainer>
        </S.UserInfoWrapper>
      </S.MyPageContainer>
      <Button type="NEGATIVE" onClick={handleLogout}>
        로그아웃
      </Button>
    </S.MyPageWrapper>
  );
};

export default MyPage;
