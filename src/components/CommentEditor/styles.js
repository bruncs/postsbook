import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  [contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: #666;
  }
  margin-top: 10px;
`;

export const TextField = styled.div`
  border: 1px solid #ccc;
  border-radius: 17px;
  display: block;
  min-height: 20px;
  font-size: 14px;
  color: #000;
  padding: 10px;
  cursor: text;
  margin-left: 10px;
`;
