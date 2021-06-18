import React, {Component} from 'react';
import { Form, Container1, Container2 } from './pet_styled';
import { withRouter } from 'react-router-dom';
import api from '../../../services/api';

class RegisterPet extends Component {
  state = {
    name:'',
    age:'',
    cor:'',
    species:'',
    type_pet:'',
    owner:'',
    address:'',
    city:'',
    district:'',
    fone:'',
    last_visit:'',
    obs: ''

  };


  handlePet = async e => {
    e.preventDefault();
    const { name, age, cor, species, type_pet, owner, address, city, district, fone, last_visit, obs} = this.state;
    if (!name || !age || !cor || !species || !type_pet || !owner || !address || !city || !district || !fone || !last_visit || !obs) {
      this.setState({ error: 'Preencha todos os dados para se cadastrar' });
    } else {
      try {
        await api.post('/pet', { name, age, cor, species, type_pet, owner, address, city, district, fone, last_visit, obs});
        this.props.history.push("/signin"); 
      } catch (err) {
        console.log(err);
        this.setState({ error: "Preencha todos os dados!" });
      }
    }
  };


  render() {
    return <>
      <Container1>
        <Form onSubmit={this.handlePet}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type='text'
            placeholder='Nome de Pet'
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type='number'
            placeholder='Idade'
            onChange={e => this.setState({ age: e.target.value })}
          />
          <input
            type='text'
            placeholder='Cor'
            onChange={e => this.setState({ cor: e.target.value })}
          />
           <input
            type='text'
            placeholder='Raça'
            onChange={e => this.setState({ species: e.target.value })}
          />
          <input
            type='text'
            placeholder='Tipo'
            onChange={e => this.setState({ type_pet: e.target.value })}
          />
        </Form>
      </Container1>
      <Container2>
        <Form onSubmit={this.handlePet}>
           <input
            type='text'
            placeholder='Endereço'
            onChange={e => this.setState({ address: e.target.value })}
            />
                     <input
            type='text'
            placeholder='Cidade'
            onChange={e => this.setState({ city: e.target.value })}
            />
            <input
            type='text'
            placeholder='Bairro'
            onChange={e => this.setState({ district: e.target.value })}
            />
            <input
            type='fone'
            placeholder='Telefone'
            onChange={e => this.setState({ fone: e.target.value })}
            />
            <input
            type='text'
            placeholder='Ultima Visita'
            onChange={e => this.setState({ last_visit: e.target.value })}
            />
            <input
            type='text'
            placeholder='Observações'
            onChange={e => this.setState({ obs: e.target.value })}
            />
          <button type='submit'>salvar</button>
        </Form>
        </Container2>
    </>;
  }
}
export default withRouter(RegisterPet);