import styled from 'styled-components';
import { MainContentsWrapper } from '../../components/atomComponents/MainContents.style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const MyPageWrapper = styled.div`
  ${MainContentsWrapper}
`;

export const MyPageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head1};
  color: ${({ theme }) => theme.colors.mainBlack};
`;

export const MyPageContainer = styled.div`
  display: flex;
  width: 30rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const MyPageImage = styled(AccountCircleIcon)`
  && {
    width: 5rem;
    height: 5rem;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 20rem;
  height: 7rem;
`;
export const UserInfoContainer = styled.div`
  display: flex;

  align-items: center;
  width: 15rem;
  height: 3rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.mainGrey};
`;
export const UserInfoText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.mainBlack};
  margin: 0 0.5rem;
`;
