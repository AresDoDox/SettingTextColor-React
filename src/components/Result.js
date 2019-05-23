import React, { Component } from 'react';
import {
    Card, CardHeader, CardBody, CardText
} from 'reactstrap';


class Result extends Component {

    styleText(){
        return {
            color: this.props.colortext,
            fontSize: this.props.fontSize
        }
    }
    render() {
        return (
            <Card className=".col-4">
                <CardHeader>My text</CardHeader>
                <CardBody>
                    <CardText style={this.styleText()}>This is the project "Setting Text Color Application" with ReactJS</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default Result;
