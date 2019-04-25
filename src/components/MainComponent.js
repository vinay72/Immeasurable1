import React, { Component } from 'react';
import Header from './HeaderComponent';
import Modules from './ModulesComponent';
import Home from './HomeComponent';
import Payment from './PaymentComponent';
import Footer from './FooterComponent';
import { Switch} from 'react-router-dom';
import { DATAS } from './shared/datas';




class Main extends Component {

  constructor(props){
    super(props);

    this.state={
     datas: DATAS,
     
     
    };
  }
  render() {

    return (
      <div>
        
        <Header />
          <Switch>
          <Modules datas={this.state.datas} />
          
            
            
          </Switch>
          <Home />
          <Payment />
        
        <Footer />
      </div>
    );
  }
}

export default Main;