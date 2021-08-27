import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: this.props.cat ? this.props.cat.name : '',
        age: this.props.cat ? this.props.cat.age: '',
        enjoys: this.props.cat ? this.props.cat.enjoys: ''
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.form, this.props.cat.id)
    this.setState({submitted:true})
  }


  render() {
    return (
      <>
        <h3>I am the edit page</h3>
        <Form>
         <FormGroup>
           <Label>Name</Label>
           <Input type="text" name="name" value={this.state.form.name} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Age</Label>
           <Input type="text" name="age" value={this.state.form.age} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Enjoys</Label>
           <Input type="text" name="enjoys" value={this.state.form.enjoys} onChange={ this.handleChange }/>
         </FormGroup>
        </Form>
        <button
          type="submit"
          value=""
          onClick={ this.handleSubmit }
        >
        Submit Changes
        </button>
        {this.state.submitted && <Redirect to='/catshow/:id' />}
      </>
    )
  }
}

export default CatEdit;
