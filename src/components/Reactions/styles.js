import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 12px 0;
  border-top: 1px solid #eee;
  align-items: center;
`;

export const Icon = styled.div`
  height: 16px;
  width: 16px;
  background: ${(props) => {
    const { background } = props;
    return background || 'transparent';
  }};
  margin: ${(props) => {
    const { margin } = props;
    return margin || '0px';
  }};
`;

export const Counter = styled.p`
  color: #777d88;
  font-size: 14px;
`;
