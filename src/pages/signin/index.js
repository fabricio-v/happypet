import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Logo from "../../assets/happypet.png";
// import api from "../../services/useApi";
import api from "../../services/api";
import { login as handleLogin } from "../../services/auth";
import { Form, Container } from "./styles";
import Navbar from "../../components/Navbar";

class SignIn extends Component {
  state = {
    login: "",
    password: "",
    error: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    if (!login || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/api/v1/users/login", { login, password });
        // login(response.data.token);
        alert("response.status:" + response.status);

        handleLogin("ABC!@#.");
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error: "O endereço de e-mail ou senha não é válido.",
        });
      }
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Form onSubmit={this.handleSignIn}>
            <html></html>
            <img src={Logo} alt="Happy logo" />
            {this.state.error && <p>{this.state.error}</p>}
            <input
              // type=""
              placeholder="Login"
              onChange={(e) => this.setState({ login: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <button type="submit">Entrar</button>
            <hr />
          </Form>
        </Container>
      </>
    );
  }
}

async function teste() {
  await api.get("/api/v1/teste");
}

export default withRouter(SignIn);
