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

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        cats: []
    }
  }

  componentDidMount(){
    this.catIndex()
  }

  catIndex = () => {
    fetch("http://localhost:3000/cats")
    .then(response => {
      return response.json()
    })
    .then(catsArray => {
      this.setState({cats: catsArray})
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewCat = (newcat) => {
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newcat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422) {
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response =>{
      if(response.status === 422) {
        alert("Please check your submission.")
      } else {
        return response.json()
      }
    })
  .then(payload => {
    this.catIndex()
  })
  .catch(errors => {
    console.log("update errors:", errors)
  })
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
