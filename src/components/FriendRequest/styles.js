import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const Grid = styled.div`
  display: flex;
`;

export const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => {
    const { padding } = props;
    return padding || '0px';
  }};
`;

export const ButtonGroup = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 12px;
  text-decoration: none;
  font-weight: bold;
  color: #365899;

  &:hover {
    text-decoration: underline;
  }
`;

export const AcceptButton = styled.button`
  margin-right: 5px;

  background-color: #4267b2;
  color: #fff;

  transition: 200ms cubic-bezier(0.08, 0.52, 0.52, 1) background-color,
    200ms cubic-bezier(0.08, 0.52, 0.52, 1) box-shadow,
    200ms cubic-bezier(0.08, 0.52, 0.52, 1) transform;
  border: 1px solid #4267b2;
  border-radius: 2px;
  box-sizing: content-box;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  justify-content: center;
  padding: 0 8px;
  position: relative;
  text-align: center;
  text-shadow: none;
  vertical-align: middle;

  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  height: 24px;
`;

export const RejectButton = styled.button`
  background-color: #f6f7f9;
  color: #4b4f56;

  transition: 200ms cubic-bezier(0.08, 0.52, 0.52, 1) background-color,
    200ms cubic-bezier(0.08, 0.52, 0.52, 1) box-shadow,
    200ms cubic-bezier(0.08, 0.52, 0.52, 1) transform;
  border: 1px solid #ced0d4;
  border-radius: 2px;
  box-sizing: content-box;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  justify-content: center;
  padding: 0 8px;
  position: relative;
  text-align: center;
  text-shadow: none;
  vertical-align: middle;

  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  height: 24px;
`;
