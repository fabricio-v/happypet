import React, { Component } from 'react';
import {Container, Form} from './styles';
import { withRouter } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleHome}>
          <html></html>
          <header>

            
          </header>
        </Form>
      </Container>
    );
  }

}

export default withRouter(Home);