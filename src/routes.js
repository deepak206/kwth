import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import About from './screens/about';
import Home from './screens/home';
import WhyBecomeMember from './screens/whyBecomeMember';
import Testimonials from './screens/testimonials';
import Contact from './screens/contact';
import Notfound from './components/notfound';
import ForgetPassword from './screens/forgotPassword';
import Login from './screens/login';
import Hunting from './screens/hunting';
import Photos from './screens/photos';
import ReqsAndRegs from './screens/reqsAndRegs';
import ReserverField from './screens/reserveField';
import ScoutingReports from './screens/scoutingReports';
import configureStore from './redux/store';

const history = createHistory();
const store = configureStore(history);

const Routes = () => (
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route
            exact={false}
            path="/">
            <Switch>
                <Home exact path="/" />
                <About excet strict path="/about" />
                <WhyBecomeMember excet strict path="/why-become-member"/>
                <Testimonials excet strict path="/testimonials"/>
                <Contact excet strict path="/contact" />
                <ForgetPassword excet strict path="/forgot-password" />
                <Login excet strict path="/login" />
                <Hunting excet strict path="/hunting" />
                <Photos excet strict path="/photos" />
                <ReqsAndRegs excet strict path="/reqs-and-regs" />
                <ReserverField excet strict path="/reserve-field" />
                <ScoutingReports excet strict path="/scouting-reports" />
            </Switch>
        </Route>
      </ConnectedRouter>
  </Provider>
);

export default Routes;
