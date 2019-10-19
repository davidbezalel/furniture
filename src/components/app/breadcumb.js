import React, { Component } from 'react';
import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react';

class Breadcumb extends Component {
  render() {
    return (
      <Container text>
        <Header
          as='h1'
          content='Furniture Example'
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '1em',
          }}
        />
        <Header
          as='h2'
          content='Something short and leading about the collection below—its contents, the creator, etc.'
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
  }
};

export default Breadcumb;
