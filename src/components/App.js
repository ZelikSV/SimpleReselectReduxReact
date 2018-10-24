import React, { Component } from 'react';
import {connect} from 'react-redux';;
import someDoing  from '../actions/index';
import {getVisibleClients} from '../selectors/index'

import './App.scss';



 class App extends Component{
  constructor(props) {
    super(props);
   this.state = {
     choiceClient: {
      name: "Kurt Buret",
      job: "Engenear",
      img: "./publick/img/img4.jpg"
  }
   }
  } 
  choiceClient(event){
    this.setState({
      choiceClient: event
    });
  }

searchSomeClients(event){
this.props.filterClients(event.target.value.toLowerCase());

}

    render() {
        return (
          <div className="wrap">
          <div className="clients-list-wrap">
            <label className="clients-searching">
            <input  type="search" placeholder="Введите что нибудь"
              onChange={this.searchSomeClients.bind(this) }
            />
          </label>
          <ul className="clients-list">
          {this.props.clients.map((item, k)=>{
            return (
              <li key={k} onClick={()=> this.choiceClient(item)}>
                <img src={item.img} />
                <p>{ item.name }</p>
            </li>
            )
          })}
            
          </ul>
          </div>
          <div className="clients-details-wrap">      
            <img src={ this.state.choiceClient.img } />
            <h2>{this.state.choiceClient.name}</h2>
            <p>{this.state.choiceClient.job}</p>
          </div>
          </div>
        );
      }
}
const mapStateToProps = (state)=>{
  return {
      clients: getVisibleClients(state)
  }
  
}
const mapDispatchToProps = (dispatch)=>{
  return {
    filterClients: text => dispatch(someDoing(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);