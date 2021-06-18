import React, {Component} from 'react';
import './pet.css';
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
      <container>
        <form onSubmit={this.handlePet}>
          <div className='dadospet'>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            className='name'
            type='text'
            placeholder='Nome de Pet'
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            className='age'
            type='number'
            placeholder='Idade'
            onChange={e => this.setState({ age: e.target.value })}
          />
          <input
            className='cor'
            type='text'
            placeholder='Cor'
            onChange={e => this.setState({ cor: e.target.value })}
          />
           <input
            className='species'
            type='text'
            placeholder='Raça'
            onChange={e => this.setState({ species: e.target.value })}
          />
          <input
            className='type_pet'
            type='text'
            placeholder='Tipo'
            onChange={e => this.setState({ type_pet: e.target.value })}
          />
          </div>
          <div className='donoend'>
           <input
            className='address'
            type='text'
            placeholder='Endereço'
            onChange={e => this.setState({ address: e.target.value })}
            />
            <input
            className='city'
            type='text'
            placeholder='Cidade'
            onChange={e => this.setState({ city: e.target.value })}
            />
            <input
            className='district'
            type='text'
            placeholder='Bairro'
            onChange={e => this.setState({ district: e.target.value })}
            />
            <input
            className='fone'
            type='fone'
            placeholder='Telefone'
            onChange={e => this.setState({ fone: e.target.value })}
            />
            <input
            className='last_visit'
            type='text'
            placeholder='Ultima Visita'
            onChange={e => this.setState({ last_visit: e.target.value })}
            />
            <input
            className='obs'
            type='text'
            placeholder='Observações'
            onChange={e => this.setState({ obs: e.target.value })}
            />
            </div>
          <button className= 'salva' type='submit'>salvar</button>
        </form>
        </container>
    </>;
  }
}
export default withRouter(RegisterPet);