import styled from 'styled-components';

export const Image = styled.img`
  width: ${(props) => {
    const { size } = props;
    switch (size) {
      case 'mini':
        return '24px';
      case 'small':
        return '34px';
      case 'medium':
        return '48px';
      case 'grown':
        return '100px';
      case 'large':
        return '168px';
      default:
        return '60px';
    }
  }};
  height: ${(props) => {
    const { size } = props;
    switch (size) {
      case 'mini':
        return '24px';
      case 'small':
        return '34px';
      case 'medium':
        return '48px';
      case 'grown':
        return '100px';
      case 'large':
        return '168px';
      default:
        return '60px';
    }
  }};
  border-radius: ${(props) => {
    const { format } = props;
    switch (format) {
      case 'square':
        return '0';
      default:
        return '50%';
    }
  }};
  border: ${(props) => {
    const { border } = props;
    return border;
  }};
`;
