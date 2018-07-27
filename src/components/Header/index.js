import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../store/ducks/user';
import {
  Container, Grid, GridColumn, Button, ProfileButton, Divider, Avatar,
} from './styles';
import Logo from '../../assets/images/icons/whitelogo.png';
import Avatar1 from '../../assets/images/avatars/01.png';

class Header extends Component {
  static propTypes = {
    signoutRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
  };

  state = {};

  handleSignout = () => {
    const { signoutRequest } = this.props;
    signoutRequest();
  };

  render() {
    const { user } = this.props;
    const firstName = user.data.user.name.split(' ')[0];
    return (
      <Container>
        <Grid>
          <GridColumn justifyContent="flex-start" alignItems="center" padding="4px 0 0 0">
            <Link to="./feed">
              <img alt="" src={Logo} />
            </Link>
          </GridColumn>
          <GridColumn justifyContent="flex-end" alignItems="center">
            <Link to={`./profile?id=${user.data.user._id}`} style={{ textDecoration: 'none' }}>
              <ProfileButton>
                <Avatar alt="" src={Avatar1} />
                <Divider />
                {firstName}
              </ProfileButton>
            </Link>
            <Divider />
            <Link to="./feed">
              <Button name="feed" type="button">
                Página Inicial
              </Button>
            </Link>
            <Divider />
            <Button name="signout" type="button" onClick={this.handleSignout}>
              Sair
            </Button>
          </GridColumn>
        </Grid>
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
