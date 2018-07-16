import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';

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
  handleSubmit() {
    const { signup } = this.props;
    return signup();
  }

  render() {
    return (
      <Container>
        <Grid>
          <GridColumn>
            <Title>
Postsbook
            </Title>
          </GridColumn>
          <GridColumn padding="6px 0 0 48px">
            <Form>
              <FormField padding="0 0 0 14px">
                <Label htmlFor="email">
Email
                </Label>

                <Input type="text" name="email" margin="4px 0 0 0" />
              </FormField>
              <FormField padding="0 0 0 14px">
                <Label htmlFor="password">
Senha
                </Label>
                <Input type="password" name="password" margin="4px 0 0 0" />
              </FormField>
              <Button type="submit" onClick={this.handleSubmit}>
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
