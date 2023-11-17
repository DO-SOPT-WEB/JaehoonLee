import styled from 'styled-components';
import { MainContentsWrapper } from '../../components/atomComponents/MainContents.style';

export const SignUpWrapper = styled.div`
  ${MainContentsWrapper}
`;

export const SignUpTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head1};
  color: ${({ theme }) => theme.colors.mainBlack};
`;
export const SignUpFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  text-align: start;

  width: 31rem;
  margin-bottom: 1rem;
`;

export const LabelSpan = styled.span`
  display: inline-block;
  width: 11rem;
  font-size: ${({ theme }) => theme.fontSize.body1};
`;
export const SignUpInput = styled.input<{ $wid: boolean }>`
  width: 20rem;

  width: ${(props) => (props.$wid ? '20rem' : '14rem')};
  height: 3rem;
  padding: 0.5rem;
`;

export const DuplicationBtn = styled.button`
  width: 5.5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  border-radius: 5px;
  background-color: black;
  color: white;
`;
