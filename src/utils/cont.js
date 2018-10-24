import {connect} from 'react-redux';

import someDoing  from '../action/index';
import App from '../components/App';


const getVisibleClients = (clients, filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return clients;
      case "SEARCH":
        return clients.filter(item  => item.toLowerCase().include(text));
    }
  };
  
const mapStateToProps = (state) =>{
return{
  clients: getVisibleClients(state.clients, state.visibilityFilter)
}
}
const mapDispatchToProps = (dispatch)=>{
return {
  addClient: text => dispatch(someDoing(text))
 
}
}
const visibleClientList = connect(mapStateToProps, mapDispatchToProps)(App);

export default visibleClientList;