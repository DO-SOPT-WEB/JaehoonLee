import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  type: string; // NONE, POSITIVE, NEGATIVE
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <BasicBtn $type={type} onClick={onClick}>
      {children}
    </BasicBtn>
  );
};

const ButtonStyle = {
  DEFAULT: css`
    background-color: ${({ theme }) => theme.colors.mainWhite};
    color: ${({ theme }) => theme.colors.mainBlack};
  `,
  POSITIVE: css`
    background-color: ${({ theme }) => theme.colors.mainBlack};
    color: ${({ theme }) => theme.colors.mainWhite};
  `,
  NEGATIVE: css`
    background-color: ${({ theme }) => theme.colors.mainGrey};
    color: ${({ theme }) => theme.colors.mainBlack};
  `,
};
const BasicBtn = styled.button<{ $type: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  width: 30rem;
  height: 3.4rem;

  ${({ $type }) => {
    switch ($type) {
      case 'DEFAULT':
        return ButtonStyle.DEFAULT;
      case 'POSITIVE':
        return ButtonStyle.POSITIVE;
      case 'NEGATIVE':
        return ButtonStyle.NEGATIVE;
    }
  }}
`;
export default Button;

// 추후 리팩토링
// const ButtonType = {
//   DEFAULT: 'DEFAULT',
//   POSITIVE: 'POSITIVE',
//   NEGATIVE: 'NEGATIVE',
// };
