import styled from 'styled-components';
import { MainContentsWrapper } from '../../components/atomComponents/MainContents.style';
export const LoginWrapper = styled.div`
  ${MainContentsWrapper}
`;

export const LoginText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head1};
  color: ${({ theme }) => theme.colors.mainBlack};
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
`;

export const InputLabel = styled.label`
  display: flex;
  width: 20rem;
  margin-bottom: 1rem;
`;

export const LabelSpan = styled.span`
  width: 5rem;
  font-size: ${({ theme }) => theme.fontSize.body1};
`;
export const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
