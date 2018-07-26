import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Title } from './styles';
import { Creators as UserCreators } from '../../store/ducks/user';

class Header extends Component {
  handleClick = () => {
    this.props.signout();
  };

  render() {
    if (!this.props.user.isAuthenticated) {
      return <Redirect to="./" />;
    }
    return (
      <Container>
        <Title>
PostsBook
        </Title>
        <button type="button" onClick={this.handleClick}>
          Sair
        </button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
