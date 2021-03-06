import styled from 'styled-components';

export const Container = styled.div`
  width: 323px;
  border: 1px solid #dddfe2;
  border-radius: 3px;
  background-color: #fff;
  padding: 0 10px 10px 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const Friend = styled.div`
  position: relative;
`;

export const Name = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
`;
