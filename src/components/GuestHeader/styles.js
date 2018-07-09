import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(#4e69a2, #3b5998);
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 83px;
  border-bottom: 1px solid #29487d;
  top: 0;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  padding-top: 20px;
`;

export const GridColumn = styled.div`
  width: 450px;
  padding: ${(props) => {
    const { padding } = props;
    return padding || '0px';
  }};
`;

export const Form = styled.form`
  display: flex;
  padding: ${(props) => {
    const { padding } = props;
    return padding || '0px';
  }};
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => {
    const { padding } = props;
    return padding || '0px';
  }};
`;

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  margin-left: 1px;
`;

export const Input = styled.input`
  border: 1px solid #29487d;
  padding: 3px;
  width: 150px;
  margin: ${(props) => {
    const { margin } = props;
    return margin || '0px';
  }};
`;

export const Button = styled.button`
  width: 50px;
  height: 24px;
  margin: 17px 0 0 14px;
  background-color: #4267b2;
  border: 1px solid #29487d;
  border-radius: 2px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;
