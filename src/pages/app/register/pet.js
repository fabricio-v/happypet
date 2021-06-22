import React, { Component } from "react";
import "./pet.css";
import { withRouter } from "react-router-dom";
import api from "../../../services/api";

class RegisterPet extends Component {
  state = {
    name: "",
    age: "",
    cor: "",
    species: "",
    type_pet: "",
    owner: "",
    address: "",
    city: "",
    district: "",
    fone: "",
    last_visit: "",
    obs: "",
  };

  handleClean = () => {
    this.setState({
      name: "",
      age: "",
      cor: "",
      species: "",
      type_pet: "",
      owner: "",
      address: "",
      city: "",
      district: "",
      fone: "",
      last_visit: "",
      obs: "",
    });
    this.setState({ error: "" });
  };

  handlePet = async (e) => {
    e.preventDefault();
    const {
      name,
      age,
      cor,
      species,
      type_pet,
      owner,
      address,
      city,
      district,
      fone,
      last_visit,
      obs,
    } = this.state;
    if (
      !name ||
      !age ||
      !cor ||
      !species ||
      !type_pet ||
      !owner ||
      !address ||
      !city ||
      !district ||
      !fone ||
      !last_visit ||
      !obs
    ) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/pet", {
          name,
          age,
          cor,
          species,
          type_pet,
          owner,
          address,
          city,
          district,
          fone,
          last_visit,
          obs,
        });
        this.props.history.push("/signin");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Preencha todos os dados!" });
      }
    }
  };

  render() {
    return (
      <>
        <container>
          <form
            style={{ padding: 20 }}
            onSubmit={this.handlePet}
            onReset={this.handleClean}
          >
            <div className="dadospet">
              {this.state.error && <p>{this.state.error}</p>}
              <span className="title">Dados pet:</span>
              <input
                required
                className="input"
                type="text"
                placeholder="Nome de Pet"
                onChange={(e) => this.setState({ name: e.target.value })}
              />

              <div className="row">
                <input
                  min={0}
                  max={100}
                  required
                  className="input"
                  type="number"
                  placeholder="Idade"
                  onChange={(e) => this.setState({ age: e.target.value })}
                />
                <input
                  required
                  className="input"
                  type="text"
                  placeholder="Cor"
                  onChange={(e) => this.setState({ cor: e.target.value })}
                />
              </div>

              <div className="row">
                <input
                  required
                  className="input"
                  type="text"
                  placeholder="Raça"
                  onChange={(e) => this.setState({ species: e.target.value })}
                />
                <input
                  required
                  className="input"
                  type="text"
                  placeholder="Tipo"
                  onChange={(e) => this.setState({ type_pet: e.target.value })}
                />
              </div>
            </div>
            <div className="donoend">
              <span className="title">Dados dono:</span>
              <div className="row">
                <input
                  className="input"
                  type="text"
                  placeholder="Endereço"
                  onChange={(e) => this.setState({ address: e.target.value })}
                />
              </div>
              <div className="row">
                <input
                  className="input"
                  type="text"
                  placeholder="Cidade"
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Bairro"
                  onChange={(e) => this.setState({ district: e.target.value })}
                />
              </div>
              <div className="row">
                <input
                  className="input"
                  type="fone"
                  placeholder="Telefone"
                  onChange={(e) => this.setState({ fone: e.target.value })}
                />
              </div>

              <div className="row">
                <input
                  className="input"
                  type="text"
                  placeholder="Ultima Visita"
                  onChange={(e) =>
                    this.setState({ last_visit: e.target.value })
                  }
                />
              </div>

              <div className="row">
                <input
                  className="input"
                  type="text"
                  placeholder="Observações"
                  onChange={(e) => this.setState({ obs: e.target.value })}
                />
              </div>
            </div>
            <div className="containerBotoes">
              <button className="salva " type="reset">
                limpar
              </button>
              <button className="salva" type="submit">
                salvar
              </button>
            </div>
          </form>
        </container>
      </>
    );
  }
}
export default withRouter(RegisterPet);
