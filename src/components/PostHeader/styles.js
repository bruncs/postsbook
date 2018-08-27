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
  flex-direction: ${(props) => {
    const { flexDirection } = props;
    return flexDirection;
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

export const Options = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 236px;
  padding: 5px 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  visibility: ${(props) => {
    const { visible } = props;
    return visible ? 'visible' : 'hidden';
  }};
`;

export const Item = styled.li`
  display: flex;
  flex: 1;
  align-items: center;
  height: 30px;
  padding: 10px;
  font-size: 12px;
  border-width: 1px 0;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #4267b2;
    border-width: 1px 0;
    border-style: solid;
    border-color: #29487d;
    color: #fff;
  }
`;
