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
		this.fetchAPI = this.fetchAPI.bind(this);
	}
	fetchAPI(url){
        fetch(url,{method: 'get'})
       .then((res) => res.json() )
       .then((data) => {
        store.dispatch({type:"LOAD_DATA_CUSTOMERS", payload: data});
      })
      .catch((err) => console.log('database err') )
    }
    componentDidMount(){
      this.fetchAPI('/api/customers');  
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
console.log(store.getState());
const renderApp = () => {
	render(<App />, document.getElementById('app-root'));
}
store.subscribe(renderApp);
renderApp();