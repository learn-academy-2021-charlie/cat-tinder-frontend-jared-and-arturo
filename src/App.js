import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import React, {Component} from 'react';


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

  createNewCat = (newCat) => {
    console.log(newCat)
  }

  updateCat = (updatedCat) => {
    console.log(updatedCat)
  }

render() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catindex" render={ (props) => <CatIndex cats={ this.state.cats } /> } />

        <Route path="/catshow/:id" render={ (props) => {
          let id = props.match.params.id
          let cat = this.state.cats.find(cat => cat.id === +id)
          return <CatShow cat={ cat } />
        }} />

        <Route path= "/catedit/:id" render= { (props) => {
          let id = props.match.params.id
          let cat = this.state.cats.find(cat => cat.id === +id)
          return <CatEdit cat={ cat } />
        }} />
        <Route
          path= "/catnew"
          render = {
            (props) => <CatNew createNewCat={ this.createNewCat}/>
            }
        />
        <Route component= {NotFound}/>
      </Switch>
      <Footer />
    </Router>
  );
}
}

export default App;
