import React, { Component } from 'react';
import { Card, CardTitle, Col, CardText } from 'reactstrap';


class CatShow extends Component {
  render() {
    return (
      <>
<Col sm="6">
  <Card body>
      <CardTitle>Hi, my name is { this.props.cat.name }!</CardTitle>
      <CardText>I am { this.props.cat.age } years old. I enjoy { this.props.cat.enjoys }.</CardText>
  </Card>
</Col>
      </>
    )
  }
}

export default CatShow;
