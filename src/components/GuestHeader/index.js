import React, { Component } from 'react';

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
  state = {
    data: {
      email: '',
      password: '',
    },
  };

  handleChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value },
  });

  handleSubmit = (e) => {
    const { data } = this.state;
    e.preventDefault();
    this.props.signinRequest(data);
  };

  render() {
    const { data } = this.state;
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
                  value={data.email}
                  onChange={this.handleChange}
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
                  value={data.password}
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
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GuestHeader);
