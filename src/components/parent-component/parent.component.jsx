import React, { Component } from 'react';
import Pure from '../pure-component/pure.component';
import Regular from '../regular-component/regular.component';

class ParentComponent extends Component {
    state = { name: 'Devvrat' };
    intervalId = null;

    componentDidMount = () => {
        this.intervalId = setInterval(() => {
            this.setState({ name: 'Devvrat' });
            console.log('-----');
        }, 2000);
    };

    componentWillUnmount = () => {
        console.log('ParentComponent unmounted.');
        clearInterval(this.intervalId);
    };

    render() {
        console.log('ParentComponent Rendered.');
        const { name } = this.state;
        return (
            <div>
                <span>Hi {name}, I am a Parent Component.</span>
                <Pure name={name} />
                <Regular name={name} />
            </div>
        );
    }
}

export default ParentComponent;
