import React from 'react';
import {
  Container, Grid, GridColumn, Text, Title, Subtitle, Form, Input, Button,
} from './styles';

import Image from '../../assets/images/graphics/connected-world.png';

const Header = () => (
  <Container>
    <Grid>
      <GridColumn padding="40px 0 0 10px">
        <Text>
          O Postsbook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua
          vida.
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
        <Form>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit">
Cadastre-se
          </Button>
        </Form>
      </GridColumn>
    </Grid>
  </Container>
);

export default Header;
