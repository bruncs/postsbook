import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  GridColumn,
  Name,
  ButtonGroup,
  AcceptButton,
  RejectButton,
} from './styles';
import Avatar from '../Avatar';

class FriendRequest extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      image: PropTypes.shape(),
    }),
  };

  static defaultProps = {
    avatar: {
      image: {
        type: 'Buffer',
        data: [],
        createdAt: '',
      },
    },
  };

  state = {};

  render() {
    const { id, name, avatar } = this.props;
    return (
      <Container>
        <Grid>
          <GridColumn>
            <Avatar size="medium" image={avatar.image} />
          </GridColumn>
          <GridColumn padding="0 0 0 10px">
            <Link to={`./profile/${id}`} style={{ textDecoration: 'none' }}>
              <Name>{name}</Name>
            </Link>
            <ButtonGroup>
              <AcceptButton>Confirmar</AcceptButton>
              <RejectButton>Excluir</RejectButton>
            </ButtonGroup>
          </GridColumn>
        </Grid>
      </Container>
    );
  }
}

export default FriendRequest;
