import React, { PureComponent } from 'react';

class Pure extends PureComponent {
    render() {
        console.log('PureComponent Rendered.');

        return (
            <div>
                <span>Hi {this.props.name}, I am a pure component</span>
            </div>
        );
    }
}

export default Pure;
