
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(
	<BrowserRouter>
		<Route path='/SingIn' component={App} />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
