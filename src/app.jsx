import React from 'react';
import { render } from 'react-dom';
import HeaderApp from './headerApp';
import PageContent from './pageContent';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { createStore, dispatch, getState} from 'redux';
import { Provider } from 'react-redux';
import store from './store';
import 'react-select/dist/react-select.css';

const history = createBrowserHistory();



class App extends React.Component {
	constructor(props){
		super(props);
	}
	fetchAPI(url, type){
        fetch(url, {method: 'get'})
       .then((res) => res.json() )
       .then((data) => {
        store.dispatch({type: type, payload: data});
   
      })
      .catch((err) => console.log('database err') )
    }
    componentWillMount(){
        this.fetchAPI('/api/customers',"LOAD_DATA_CUSTOMERS" );
        this.fetchAPI('/api/products',"LOAD_DATA_PRODUCTS" );
    }
	render(){
		return(
			<Router history={history}>
				<div>
					<HeaderApp />
					<PageContent />
				</div>
			</Router>   
  		);
	}
};
const renderApp = () => {
	render(<App />, document.getElementById('app-root'));
}
store.subscribe(renderApp);
renderApp();