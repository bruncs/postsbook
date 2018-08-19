import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Icon, Counter } from './styles';
import IconSet from '../../assets/images/icons/iconset4.png';

class Reactions extends Component {
  static propTypes = {
    numberOfLikes: PropTypes.number.isRequired,
  };

  state = {};

  render() {
    const { numberOfLikes } = this.props;
    return (
      <Container>
        <Icon background={`url(${IconSet}) no-repeat -357px -103px`} margin="0 5px 0 0" />
        <Counter>{numberOfLikes}</Counter>
      </Container>
    );
  }
}

export default Reactions;
