import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

class CatEdit extends Component {

  render() {
    return (
      <>
        <h3>I am the edit page</h3>
        <Form>
         <FormGroup>
           <Label>Name</Label>
           <Input type="text" name="name" value='{this.state.form.name}' onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Age</Label>
           <Input type="text" name="age" value='{this.state.form.age}' onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Enjoys</Label>
           <Input type="text" name="enjoys" value='{this.state.form.enjoys}' onChange={ this.handleChange }/>
         </FormGroup>
        </Form>
        <button
          type="submit"
          value=""
          onClick={ this.handleSubmit }
        >
        Submit Changes
        </button>
      </>
    )
  }
}

export default CatEdit;
