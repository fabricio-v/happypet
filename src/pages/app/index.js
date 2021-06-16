import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { logout } from "../../services/auth";
import { ButtonContainer } from './styles';
import Button from '../../components/logout';
import Sidebar from '../../components/Sidebar';
import Sale from './shop/sale'
import ConsultationSale from './shop/consultationSale'
import Scheduling from './schedule/scheduling'
import ConsultationSchedule from './schedule/consultationSchedule'
import CancelSchedule from './schedule/cancelSchedule'
import Pet from './register/pet'
import Product from './register/product'
import Professional from './register/professional'
import Services from './register/services'
class App extends Component {
  handleLogout = e => {
    logout();
    this.props.history.push('/');
  };
  renderActions() {
    return (
      <ButtonContainer>
        <Button color="#222" onClick={this.handleLogout}>
          sair
        </Button>
      </ButtonContainer>
    );
  }

  render() {
    return (
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/Shop' exact component={Shop} />
          <Route path='/Shop/Sale' exact component={Sale} />
          <Route path='/Shop/ConsultationSale' exact component={ConsultationSale} />
          <Route path='/Schedule' exact component={Schedule} />
          <Route path='/Schedule/Scheduling' exact component={Scheduling} />
          <Route path='/Schedule/ConsultationSchedule' exact component={ConsultationSchedule} />
          <Route path='/Schedule/CancelSchedule' exact component={CancelSchedule} />
          <Route path='/Register/Pet' exact component={Pet} />
          <Route path='/Register/Product' exact component={Product} />
          <Route path='/Register/Professional' exact component={Professional} />
          <Route path='/Register/Services' exact component={Services} />
          <Route path='/Register/Users' exact component={Users} />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);