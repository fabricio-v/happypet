import React from 'react';
import { withRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Sale from './shop/sale';
import ConsultationSale from './shop/consultationSale';
import Scheduling from './schedule/scheduling';
import ConsultationSchedule from './schedule/consultationSchedule';
import CancelSchedule from './schedule/cancelSchedule';
import Pet from './register/Pet';
import Product from './register/product';
import Professional from './register/professional';
import Services from './register/services';
import Users from './register/users';
import PagesPromotionForm from './register/components/RegisterPet/Form/Form';


const App = () => {
  return (
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/sale' exact component={Sale} />
          <Route path='/consultationSale' exact component={ConsultationSale} />
          <Route path='/scheduling' exact component={Scheduling} />
          <Route path='/consultationSchedule' exact component={ConsultationSchedule} />
          <Route path='/cancelSchedule' exact component={CancelSchedule} />
          <Route path='/pet' exact component={Pet} />
          <Route path='/create' component={PagesPromotionForm} />
          <Route path='/edit/:id' component={PagesPromotionForm} />
          <Route path='/product' exact component={Product} />
          <Route path='/professional' exact component={Professional} />
          <Route path='/petservices' exact component={Services} />
          <Route path='/users' exact component={Users} />
        </Switch>
      </Router>
   );
  };

export default withRouter(App);