import React from 'react';
import { render } from 'react-dom';
import HeaderApp from './headerApp';
import PageContent from './pageContent';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { createStore, dispatch, getState} from 'redux';
import { Provider } from 'react-redux';
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
