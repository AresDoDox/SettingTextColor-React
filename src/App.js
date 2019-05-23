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

  onChangeSize = (params) =>{
    if(this.state.fontSize + params >= 0 && this.state.fontSize + params <= 50){
      this.setState({
        fontSize: this.state.fontSize + params
      });
    }
  }

  onSettingDefault = (params)=>{
    if(params){
      this.setState({
        color: 'red',
        fontSize: 14
      });
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Setting Text Color App</h1>
        <Container>
          <Row>
            <Col md="4">
              <ColorPiker activecolor={this.state.color} onReceiveColor={this.onSetColor}/>
              <FontSizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
            </Col>
            <Col md="8">
              <Result colortext={this.state.color} fontSize={this.state.fontSize}/>
              <Reset onSettingDefault={this.onSettingDefault}/>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
