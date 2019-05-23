import React, { Component } from 'react';
import {
    Card, CardHeader, CardBody, CardText
} from 'reactstrap';


class Result extends Component {

    styleText(){
        return {
            color: this.props.colortext
        }
    }
    render() {
        return (
            <Card className=".col-4">
                <CardHeader>My text</CardHeader>
                <CardBody>
                    <CardText style={this.styleText()}>My Text</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default Result;
