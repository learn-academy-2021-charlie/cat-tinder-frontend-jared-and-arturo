import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import React, {Component} from 'react'


import {
  BrowserRouter as Router,
   Route,
   Switch
  } from 'react-router-dom'
  import cats from './mockCats.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        cats: cats
      }
    }


render() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path= "/catindex" component = {CatIndex} />
        <Route path= "/catshow"  component = {CatShow}/>
        <Route path= "/catedit" component = {CatEdit} />
        <Route path= "/catnew" component = {CatNew}/>
        <Route component= {NotFound}/>
      </Switch>

      <Footer />
    </Router>

  );
}
}

export default App;
