import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {Route,Router,hashHistory,IndexRoute} from 'react-router'

import App from './components/App'
import SongList from './components/songlist';
import SongCreate from './components/SongCreate';
import SongDetail from './components/songDetail';
import './style/style.css';



const client= new ApolloClient({
  dataIdFromObject:o=>o.id
});
const Root = () => {
 return(
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path='/' component={App}><IndexRoute component={SongList}/></Route>
      <Route path='songs/new' component={SongCreate}/>
      <Route path='songs/:id'component={SongDetail}/>
      
    </Router>
  </ApolloProvider>
 )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
