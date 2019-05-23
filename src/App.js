import React,{Component} from 'react';
import './App.css';
import {
  Container, Col, Row
} from 'reactstrap';

import ColorPiker from './components/ColorPiker';
import FontSizeSetting from './components/FontSizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 14
    }
  }

  onSetColor = (params) => {
    this.setState({
      color: params
    });
  } //hàm nhận giá trị trả về khi click ColorPiker

  render(){
    return (
      <div className="App">
        <h1>Setting Text Color App</h1>
        <Container>
          <Row>
            <Col md="4">
              <ColorPiker activecolor={this.state.color} onReceiveColor={this.onSetColor}/>
              <FontSizeSetting/>
            </Col>
            <Col md="8">
              <Result colortext={this.state.color}/>
              <Reset/>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
