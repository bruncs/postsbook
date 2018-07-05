import React from 'react';
import {
  Container, Grid, GridColumn, Text, Title,
} from './styles';

import Image from '../../assets/images/graphics/connected-world.png';

const Header = () => (
  <Container>
    <Grid>
      <GridColumn>
        <Text>
          O Postsbook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua
          vida.
        </Text>
        <img alt="" src={Image} />
      </GridColumn>
      <GridColumn>
        <Title>
Abra uma conta
        </Title>
      </GridColumn>
    </Grid>
  </Container>
);

export default Header;
