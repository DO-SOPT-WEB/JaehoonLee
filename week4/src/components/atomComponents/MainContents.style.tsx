import { css } from 'styled-components';

export const MainContentsWrapper = css`
  display: flex;
  align-items: center;

  flex-direction: column;
  border-radius: 5px;
  gap: 4rem;
  width: 45rem;
  height: 35rem;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;
