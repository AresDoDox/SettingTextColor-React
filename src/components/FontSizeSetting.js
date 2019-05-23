import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardBody, CardText
} from 'reactstrap';


class FontSizeSetting extends Component {

    changeSize(value){
        this.props.onChangeSize(value);
    }

    render() {
        return (
                <Card className=".col-4">
                    <CardHeader>Font Size Setting</CardHeader>
                    <CardBody>
                        <CardText>Font-size: {this.props.fontSize}px</CardText>
                        <Button color="success" onClick={()=> this.changeSize(-1)}>-</Button>{' '}
                        <Button color="success" onClick={()=> this.changeSize(+1)}>+</Button>
                    </CardBody>
                </Card>
        );
    }
}

export default FontSizeSetting;
