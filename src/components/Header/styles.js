import styled from 'styled-components';

export const Container = styled.div`
  background: #4267b2;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 43px;
  border-bottom: 1px solid #29487d;
  position: sticky;
  top: 0;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

export const GridColumn = styled.div`
  width: 450px;
  display: flex;
  justify-content: ${(props) => {
    const { justifyContent } = props;
    return justifyContent || 'space-around';
  }};
  align-items: ${(props) => {
    const { alignItems } = props;
    return alignItems || 'center';
  }};
  padding: ${(props) => {
    const { padding } = props;
    return padding || '0px';
  }};
`;

export const Button = styled.button`
  height: 28px;
  background: ${(props) => {
    const { background } = props;
    return background || '#4267b2';
  }};
  padding: ${(props) => {
    const { padding } = props;
    return padding || '0px 10px 0 10px';
  }};
  background-position: 2px 2px;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  border: none;
  border-radius: 2px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #3b5ca0;
  }
`;

export const ProfileButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding: 0px 10px 0 10px;
  border: none;
  border-radius: 2px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #3b5ca0;
  }
`;

export const Divider = styled.div`
  width: 5px;
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 5px 0 0;
`;
