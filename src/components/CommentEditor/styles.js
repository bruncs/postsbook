import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  [contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: #666;
  }
`;

export const TextField = styled.div`
  border: 1px solid #ccc;
  border-radius: 17px;
  display: block;
  width: 610px;
  min-height: 20px;
  font-size: 14px;
  color: #000;
  padding: 10px;
  cursor: text;
  margin-left: 10px;
`;
