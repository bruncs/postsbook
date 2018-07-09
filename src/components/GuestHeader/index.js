import React from 'react';
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

const Header = () => (
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
          <Button type="submit">
Entrar
          </Button>
        </Form>
      </GridColumn>
    </Grid>
  </Container>
);

export default Header;
