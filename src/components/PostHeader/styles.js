import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
  align-items: center;
`;

export const Grid = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const GridColumn = styled.div`
  display: flex;
  align-items: ${(props) => {
    const { alignItems } = props;
    return alignItems;
  }};
  justify-content: ${(props) => {
    const { justifyContent } = props;
    return justifyContent;
  }};
  width: ${(props) => {
    const { width } = props;
    return width;
  }};
`;

export const Text = styled.div`
  margin-left: 15px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #666;
`;

export const Time = styled.p`
  font-size: 14px;
  color: #999;
`;

export const OptionsButton = styled.button`
  background-size: auto;
  background-position: 0 -123px;
  height: 20px;
  width: 20px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-image: ${(props) => {
    const { backgroundImage } = props;
    return backgroundImage || 'none';
  }};

  &:hover {
    background-position: -21px -123px;
  }
`;
