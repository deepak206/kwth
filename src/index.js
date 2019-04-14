import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import About from '../src/screens/about';
import WhyBecomeMember from '../src/screens/whyBecomeMember';
import Testimonials from '../src/screens/testimonials';
import Contact from '../src/screens/contact';
import Notfound from '../src/components/notfound';
import ForgetPassword from '../src/screens/forgotPassword';
import Login from '../src/screens/login';
import Hunting from '../src/screens/hunting';
import Photos from '../src/screens/photos';
import ReqsAndRegs from '../src/screens/reqsAndRegs';
import ReserverField from '../src/screens/reserveField';
import ScoutingReports from '../src/screens/scoutingReports';
import history from './history';

const routing = (
  <Router history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route excet strict path="/about" component={About} />
        <Route excet strict path="/why-become-member"  component={WhyBecomeMember} />
        <Route excet strict path="/testimonials"  component={Testimonials} />
        <Route excet strict path="/contact"  component={Contact} />
        <Route excet strict path="/forgot-password"  component={ForgetPassword} />
        <Route excet strict path="/login"  component={Login} />
        <Route excet strict path="/hunting"  component={Hunting} />
        <Route excet strict path="/photos"  component={Photos} />
        <Route excet strict path="/reqs-and-regs"  component={ReqsAndRegs} />
        <Route excet strict path="/reserve-field"  component={ReserverField} />
        <Route excet strict path="/scouting-reports"  component={ScoutingReports} />
        {/* <Route path='*' exact={true} component={Notfound} /> */}
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('page-wrapper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
