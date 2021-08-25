import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    console.log(e.target.name)
    let {form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewCat(this.state.form)
    this.setState({submitted:true})
  }

  render() {
    console.log(this.state.form)
    return (
      <>
        <h3>Add a new cat!</h3>
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
        Submit Profile
        </button>
        {this.state.submitted && <Redirect to='/catindex' />}
      </>
    )
  }
}

export default CatNew;
