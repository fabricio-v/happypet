import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Sale from './shop/sale';
import ConsultationSale from './shop/consultationSale';
import Scheduling from './schedule/scheduling';
import ConsultationSchedule from './schedule/consultationSchedule';
import CancelSchedule from './schedule/cancelSchedule';
import Pet from './register/pet';
import Product from './register/product';
import Professional from './register/professional';
import Services from './register/services';
import Users from './register/users';


class App extends Component {
  render() {
    return (
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/Shop/Sale' exact component={Sale} />
          <Route path='/Shop/ConsultationSale' exact component={ConsultationSale} />
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