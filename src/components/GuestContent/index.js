import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/user';

import {
  Container, Grid, GridColumn, Text, Title, Subtitle, Form, Input, Button,
} from './styles';

import Image from '../../assets/images/graphics/connected-world.png';

class GuestContent extends Component {
  state = {
    data: {
      name: '',
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
    this.props.signupRequest(data);
  };

  render() {
    const { data } = this.state;
    return (
      <Container>
        <Grid>
          <GridColumn padding="40px 0 0 10px">
            <Text>
              O Postsbook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da
              sua vida.
            </Text>
            <img alt="" src={Image} />
          </GridColumn>
          <GridColumn padding="25px 0 0 40px">
            <Title>
Abra uma conta
            </Title>
            <Subtitle>
É gratuito e sempre será.
            </Subtitle>
            <Form onSubmit={this.handleSubmit}>
              <Input
                autoComplete="name"
                name="name"
                type="text"
                placeholder="Nome"
                value={data.name}
                onChange={this.handleChange}
              />
              <Input
                autoComplete="email"
                name="email"
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={this.handleChange}
              />
              <Input
                autoComplete="new-password"
                name="password"
                type="password"
                placeholder="Senha"
                value={data.password}
                onChange={this.handleChange}
              />
              <Button type="submit">
Cadastre-se
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
)(GuestContent);
