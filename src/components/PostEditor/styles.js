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
