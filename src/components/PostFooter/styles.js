import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 5px 0;
  border-top: 1px solid #eee;
  align-items: center;
  justify-content: space-between;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  background-color: transparent;
  border: none;
  color: #999;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }

  &:active {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const LikeButton = ActionButton.extend`
  color: ${(props) => {
    const { liked } = props;
    return liked ? '#3578E5' : '#999';
  }};
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px
  margin-right: 4px;
`;

export const LikeIcon = styled.div`
  width: 18px;
  height: 18px
  margin-right: 4px;
  background-image: ${(props) => {
    const { backgroundImage } = props;
    return backgroundImage || 'none';
  }};
  background-position: ${(props) => {
    const { liked } = props;
    return liked ? '0 -152px' : '0 -171px';
  }};
  background-repeat: no-repeat;
  background-size: auto;
`;
