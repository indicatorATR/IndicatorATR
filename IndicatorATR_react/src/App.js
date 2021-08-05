import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import ATR_Page from './Atr_page/Atr_Page.js';

class App extends React.Component {
  render(){
    return (
      <main>
        <Switch>
          <Route path="/" component={ATR_Page} exact/> 
        </Switch>
      </main>
        );
    }
}

export default App;
