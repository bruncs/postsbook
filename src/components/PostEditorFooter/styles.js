import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #eee;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 30px;
  background: #4267b2;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;

  &:hover {
    background-color: #314c86;
    cursor: pointer;
  }

  &:active {
    background-color: #233868;
    cursor: pointer;
  }
`;
