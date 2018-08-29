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

export const AvatarContainer = styled.div``;
