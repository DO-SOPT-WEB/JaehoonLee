import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
const LayoutComponents = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mainPurple};
`;
export default LayoutComponents;
