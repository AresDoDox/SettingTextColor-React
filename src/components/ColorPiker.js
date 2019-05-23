import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardBody
} from 'reactstrap';


class ColorPiker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ['blue', 'grey', 'green', 'orange', 'red']
        }
    }

    setActiveColor(color){
        this.props.onReceiveColor(color);
    } // Truyền param ngược lại có App để setState color


    showButtonColor(color){
        return {
            backgroundColor: color
        }
    }
    render() {
        let elementColors = this.state.colors.map((color, index)=>{
            return  <Button 
                        style={this.showButtonColor(color)}
                        key={index}
                        className={this.props.activecolor === color ? 'active' : ''}
                        onClick={() => this.setActiveColor(color)}
                    >
                    </Button>;
        });

        return (
            <Card className=".col-4 color-piker">
                <CardHeader>Color Piker</CardHeader>
                <CardBody>
                    {elementColors}
                </CardBody>
            </Card>
        );
    }
}

export default ColorPiker;
