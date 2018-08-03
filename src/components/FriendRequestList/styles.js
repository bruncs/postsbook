import styled from 'styled-components';

export const Container = styled.div`
  visibility: ${(props) => {
    const { visible } = props;
    return visible ? 'visible' : 'hidden';
  }};
  background: #fff;
  border: 1px solid rgba(100, 100, 100, 0.4);
  border-radius: 0 0 2px 2px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  color: #1d2129;
  overflow: visible;
  position: absolute;
  top: 38px;
  width: 430px;
  z-index: -1;
`;
