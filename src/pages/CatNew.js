import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    // let {form } = this.state
    // form[e.target.name] = e.target.value
    // this.setState({ form: form })
  }

  render() {
    console.log(this.state.form)
    return (
      <>
        <h3>I am the add new cat page</h3>
        <Form>
         <FormGroup>
           <Label>Name</Label>
           <Input type="text" name="name" onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Age</Label>
           <Input type="text" name="age" onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Enjoys</Label>
           <Input type="text" name="enjoys" onChange={ this.handleChange }/>
         </FormGroup>
        </Form>
      </>
    )
  }
}

export default CatNew;
