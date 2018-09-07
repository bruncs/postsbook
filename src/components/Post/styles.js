import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props) => {
    const { thin } = props;
    return thin ? '520px' : '700px';
  }};
  padding: 15px 20px 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 30px;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #333;
  margin: 15px 0;
  line-height: 18px;
`;
