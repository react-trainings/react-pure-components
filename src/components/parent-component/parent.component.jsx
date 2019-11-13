import React, { Component } from 'react';
import Pure from '../pure-component/pure.component';
import Regular from '../regular-component/regular.component';

class ParentComponent extends Component {
    state = { name: 'Devvrat' };

    componentDidMount = () => {
        setInterval(() => {
            this.setState({ name: 'Devvrat' });
            console.log('-----');
        }, 2000);
    };

    render() {
        console.log('ParentComponent Rendered.');

        return (
            <div>
                <span>Hi {this.state.name}, I am a Parent Component.</span>
                <Pure name={this.state.name} />
                <Regular name={this.state.name} />
            </div>
        );
    }
}

export default ParentComponent;
