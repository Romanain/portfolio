import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar'

import {Container, Row, Col} from 'react-bootstrap'; // IMPORTANT: REMOVE ONCE DONE DEVELOPING
import { getSuggestedQuery } from '@testing-library/dom';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <br/>
      <Container>
        <Row>
          <Col md={{span: 4}} style={{height: '400px', textAlign: 'center', backgroundColor: '#f8f9fa'}}>
            <div>
              Picture of me
            </div>
          </Col>
          <Col md={{span: 8}}>
            <h1>Text about me</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
