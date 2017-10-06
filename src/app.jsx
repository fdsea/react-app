import React from 'react';
import { render } from 'react-dom';
import HeaderApp from './headerApp';
import PageContent from './pageContent';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Link, Route, hashHistory } from 'react-router-dom';
import 'react-select/dist/react-select.css';

const history = createBrowserHistory();



const App = () => {
	return(
		<Router history={history}>
			<div>
				<HeaderApp />
				<PageContent />
			</div>
		</Router>   
  	);
};
render(<App />, document.getElementById('app-root'));
