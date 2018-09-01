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
  z-index: 99;
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
  justify-content: center;
  align-items: center;
  height: 28px;
  padding: 0px 8px 0 8px;
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
  width: 1px;
  height: 20px;
  background-color: #3b5ca0;
  margin: 0 8px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 24px;
  width: 24px;
  opacity: ${(props) => {
    const { opacity } = props;
    return opacity || 0.6;
  }};
  cursor: pointer;

  background: ${(props) => {
    const { background } = props;
    return background || '#4267b2';
  }};
  margin: ${(props) => {
    const { margin } = props;
    return margin || '0px';
  }};

  &:hover {
    opacity: 0.9;
  }
`;

export const Counter = styled.div`
  display: inline-block;
  background: #fa3e3e;
  border-radius: 15%;
  color: #fff;
  font-size: 0.7em;
  font-weight: bold;
  padding: 1px 2px;
  margin: -8px 0 0 0;
  z-index: 2;
`;

export const Caption = styled.p`
  margin-left: 8px;
`;
