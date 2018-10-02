import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #fff;
  border: 1px solid #3b5998;
  border-radius: 3px;
  box-sizing: border-box;
  height: 26px;
  left: -1px;
  margin-left: 10px;
  margin-top: 0;
  max-width: 448px;
  overflow: hidden;
  padding-left: 5px;
  padding-right: 48px;
  [contenteditable='true']:empty:before {
    content: attr(placeholder);
    color: #999;
  }
`;

export const TextField = styled.div`
  border-radius: 17px;
  display: inline-block;
  width: 100%;
  min-height: 20px;
  font-size: 14px;
  color: #000;
  padding: 5px 0;
  cursor: text;
`;
