import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  [contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: #666;
  }
`;

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 15px;
  margin-right: 10px;
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
`;
