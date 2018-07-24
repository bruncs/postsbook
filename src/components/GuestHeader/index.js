import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/user';

import {
  Container,
  Grid,
  Title,
  GridColumn,
  Label,
  Input,
  Form,
  FormField,
  Button,
} from './styles';

class GuestHeader extends Component {
  static propTypes = {
    signinRequest: PropTypes.func.isRequired,
    data: PropTypes.shape({
      signinLoading: PropTypes.bool.isRequired,
      isAuthenticated: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        email: PropTypes.string,
      }),
      token: PropTypes.string,
    }).isRequired,
  };

  state = {
    formData: {
      email: '',
      password: '',
    },
  };

  handleChange = e => this.setState({
    formData: { ...this.state.formData, [e.target.name]: e.target.value },
  });

  handleSubmit = (e) => {
    const { formData } = this.state;
    const { signinRequest } = this.props;

    e.preventDefault();
    signinRequest(formData);
  };

  render() {
    const { formData } = this.state;
    const { data } = this.props;
    if (data.isAuthenticated) {
      return <Redirect to="/feed" />;
    }

    return (
      <Container>
        <Grid>
          <GridColumn>
            <Title>
Postsbook
            </Title>
          </GridColumn>
          <GridColumn padding="6px 0 0 48px">
            <Form onSubmit={this.handleSubmit}>
              <FormField padding="0 0 0 14px">
                <Label htmlFor="email">
Email
                </Label>

                <Input
                  type="text"
                  name="email"
                  margin="4px 0 0 0"
                  value={formData.email}
                  onChange={this.handleChange}
                  autoComplete="email"
                />
              </FormField>
              <FormField padding="0 0 0 14px">
                <Label htmlFor="password">
Senha
                </Label>
                <Input
                  type="password"
                  name="password"
                  margin="4px 0 0 0"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={this.handleChange}
                />
              </FormField>
              <Button type="submit">
Entrar
              </Button>
            </Form>
          </GridColumn>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GuestHeader);
