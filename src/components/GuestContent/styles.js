import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(#fff, #d3d8e8);
  background-repeat: no-repeat;
  display: flex;
  flex: 1;
  justify-content: center;
  height: 573px;
  top: 0;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

export const GridColumn = styled.div`
  width: 450px;
  padding: ${(props) => {
    const { padding } = props;
    return padding || '0px';
  }};
`;

export const Text = styled.h2`
  color: #0e385f;
  font-size: 20px;
  font-weight: bold;
  line-height: 29px;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 36px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: #333;
  font-size: 19px;
  padding-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: ${(props) => {
    const { padding } = props;
    return padding || '0px';
  }};
`;

export const Input = styled.input`
  border: 1px solid #bdc7d8;
  border-color: #bdc7d8;
  border-radius: 5px;
  margin: 0;
  width: 399px;
  font-size: 18px;
  padding: 8px 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 194px;
  height: 39px;
  margin: 10px 0;
  background: linear-gradient(#67ae55, #578843);
  background-color: #69a74e;
  box-shadow: inset 0 1px 1px #a4e388;
  border-color: #3b6e22 #3b6e22 #2c5115 !important;
  border: 1px solid;
  border-radius: 5px;
  font-family: 'Freight Sans Bold', Helvetica, Arial, sans-serif !important;
  font-size: 18px;
  font-weight: bold !important;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  text-rendering: optimizelegibility;
  cursor: pointer;

  &:hover {
    background: linear-gradient(#79bc64, #578843);
  }

  &:active {
    margin-top: 12px;
  }
`;
