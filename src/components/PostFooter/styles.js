import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #eee;
  align-items: center;
`;

export const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  background-color: #fff;
  border: none;
  color: #999;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }

  &:active {
    background-color: #d8d8d8;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;
