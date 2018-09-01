import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  border: solid #d3d6db;
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 3px 3px;
  margin-bottom: 10px;
`;

export const CoverImage = styled.div`
  background-color: #1c1e21;
  width: 852px;
  height: ${(props) => {
    const { image } = props;
    return image ? '315px' : '205px';
  }};
`;

export const HeadLine = styled.ul`
  display: flex;
  flex: 1;
  height: 43px;
  background-color: #fff;
`;

export const ProfileThumb = styled.div`
  position: absolute;
  width: 176px;
  height: 176px;
  margin-left: 16px;
  margin-top: 58px;
  border: 4px solid #fff;
  border-radius: 2px;
`;

export const Name = styled.h1`
  position: absolute;
  margin-left: 210px;
  margin-top: 160px;
  font-size: 24px;
  color: #fff;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
`;
