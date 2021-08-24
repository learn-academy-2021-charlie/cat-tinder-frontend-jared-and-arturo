import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'


class CatIndex extends Component {
  render() {
    return (
      <>
        <h2>Meet the Cats!</h2>
<br />
  <Col sm="6">
    { this.props.cats.map(cat => {
      return (
        <Card body key={ cat.id }>
          <CardTitle>
          <NavLink to={`/catshow/${cat.id}`}>
            { cat.name }
          </NavLink>

          </CardTitle>
        </Card>
      )
    })}
  </Col>

      </>
    )
  }
}

export default CatIndex;
