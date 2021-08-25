import React, { Component } from 'react';
import { Card, CardTitle, Col, CardText } from 'reactstrap';


class CatShow extends Component {
  render() {
    let {cat} = this.props
    return (
      <div>
      {cat && <Col sm="6">
        <Card body>
            <CardTitle>Hi, my name is {cat.name }!</CardTitle>
            <CardText>I am {cat.age } years old. I enjoy {cat.enjoys }.</CardText>
        </Card>
      </Col>}
      </div>
    )
  }
}

export default CatShow;
