import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardBody, CardText
} from 'reactstrap';


class FontSizeSetting extends Component {
    render() {
        return (
                <Card className=".col-4">
                    <CardHeader>Font Size Setting</CardHeader>
                    <CardBody>
                        <CardText>Font-size: 14px</CardText>
                        <Button color="success">-</Button>{' '}
                        <Button color="success">+</Button>
                    </CardBody>
                </Card>
        );
    }
}

export default FontSizeSetting;
