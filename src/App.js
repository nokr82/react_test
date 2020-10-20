import React,{Component,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
class App extends Component {
  render() {
    return (
        <Fragment>
        <Counter/>
        <MyName name = "리액트">

        </MyName>
        </Fragment>
    );
  }
}

export default App;
