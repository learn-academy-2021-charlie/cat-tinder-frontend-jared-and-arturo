import React, { Component } from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class CatShow extends Component {
  render() {
    let {cat} = this.props
    return (
      <>
        {cat &&
        <Card body>
            <CardTitle>Hi, my name is {cat.name }!</CardTitle>
            <CardText>I am {cat.age } years old. I enjoy {cat.enjoys }.
            </CardText>
            <NavLink to="/catindex">
              <Button onClick={ () => this.props.deleteCat(cat.id) }>
              Delete Cat Profile
              </Button>
            </NavLink>
            <NavLink to={`/catedit/${cat.id}`}>
              <Button>
                Update Cat Profile
              </Button>
            </NavLink>
        </Card>
        }
      </>
    )
  }
}

export default CatShow;
