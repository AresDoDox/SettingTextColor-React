import React, { Component } from 'react';
import {Button} from 'reactstrap';


class Result extends Component {

    onResetDefault = () => {
        this.props.onSettingDefault('abc');
    }

    render() {
        return (
            <Button color="primary" onClick={this.onResetDefault}>Reset</Button>
        );
    }
}

export default Result;
