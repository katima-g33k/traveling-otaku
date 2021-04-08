import { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row noGutters>
          <Col>
            <Image fluid src="./fuji_san.jpg" alt="Mount Fuji" />
          </Col>
        </Row>
      </Container>
    );
  }
}
