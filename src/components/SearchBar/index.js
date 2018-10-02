import React, { Component } from 'react';
import { Container, TextField } from './styles';

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <Container>
        <TextField contentEditable suppressContentEditableWarning placeholder="Pesquisar" />
      </Container>
    );
  }
}

export default SearchBar;
