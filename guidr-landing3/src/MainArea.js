import React from 'react';
import { Container, Row, Col } from 'reactstrap';



export default class MainArea extends React.Component {
  render() {
    return (
      <Container>
       <Row>
            <Col xs="6" sm="4" className="top-header">
            <p className="p1">Your</p> 
            <p className="p2">gateway to</p>
            <p className="p3">the world</p></Col>
        </Row>
   
      </Container>
    );
  }
}