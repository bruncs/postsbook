import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 30px;
  [contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: #666;
  }
`;

export const Grid = styled.div`
  display: flex;
`;

export const TextField = styled.div`
  display: block;
  width: 570px;
  min-height: 20px;
  font-size: 20px;
  color: #000;
  padding: 10px;
  cursor: text;
  margin-left: 10px;
`;

export const Footer = styled.div`
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
