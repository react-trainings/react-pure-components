import React, { Component } from 'react';

class Regular extends Component {
    render() {
        console.log('RegularComponent Rendered.');

        return (
            <div>
                <span>Hi {this.props.name}, I am a Regular Component.</span>
            </div>
        );
    }
}

export default Regular;
