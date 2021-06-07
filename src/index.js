import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Login from './pages/login';
import Logout from './pages/logout';
import Orders_page from './pages/orders';
import Portfolio from './pages/portfolio';
import Subscriptions_page from './pages/subscriptions';
import Developer from './pages/develop';
import Trade from './pages/manual_trading';
import Accounts from './pages/accounts';
import Support from './pages/support';
import Profile from './pages/profile';

const routing = (
	<Router>
		<React.StrictMode>
			<Switch>
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route path="/orders" component={Orders_page} />
				<Route path="/trade" component={Trade} />
				<Route path="/accounts" component={Accounts} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/subscriptions" component={Subscriptions_page} />
				<Route path="/develop" component={Developer} />
				<Route path="/support" component={Support} />
			</Switch>
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
