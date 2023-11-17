import styled, { css } from 'styled-components';

type DuplicateCheckBtnProps = {
  type: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const DuplicateCheckButton = ({ type, onClick }: DuplicateCheckBtnProps) => {
  return (
    <DuplicationBtn type={type} onClick={onClick}>
      중복확인
    </DuplicationBtn>
  );
};

const ButtonStyle = {
  DEFAULT: css`
    background-color: ${({ theme }) => theme.colors.mainBlack};
    color: ${({ theme }) => theme.colors.mainWhite};
  `,
  POSITIVE: css`
    background-color: ${({ theme }) => theme.colors.mainGreen};
    color: ${({ theme }) => theme.colors.mainWhite};
  `,
  NEGATIVE: css`
    background-color: ${({ theme }) => theme.colors.mainRed};
    color: ${({ theme }) => theme.colors.mainWhite};
  `,
};
const DuplicationBtn = styled.button<{ type: string }>`
  width: 5.5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  border-radius: 5px;
  ${({ type }) => {
    switch (type) {
      case 'DEFAULT':
        return ButtonStyle.DEFAULT;
      case 'POSITIVE':
        return ButtonStyle.POSITIVE;
      case 'NEGATIVE':
        return ButtonStyle.NEGATIVE;
    }
  }}
`;
//   background-color: ${(props) =>
//     props.type == 'NEGATIVE' ? 'red' : props.type == 'POSITIVE' ? 'green' : 'black'};

export default DuplicateCheckButton;
