import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { logout } from "../../services/auth";
import { Form, Container } from './styles';
import Logo from '../../assets/fribel.svg';
import { ButtonContainer } from './styles';
import Button from '../../components/logout';

class App extends Component {
  handleLogout = e => {
    logout();
    this.props.history.push('/');
  };
  renderActions() {
    return (
      <ButtonContainer>
        <Button color="#222" onClick={this.handleLogout}>
          <i className="fa fa-times" />
        </Button>
      </ButtonContainer>
    );
  }

  render() {
    return (

      <Container>
         {this.renderActions()}
        <Form>
          <html></html>
          <img src={Logo} alt="Fribel logo" />
          <hr />
        </Form>
      </Container>

    );
  }
}

export default withRouter(App);