import React from 'react';
import PropTypes from 'prop-types';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Welcome {this.props.name}!</h1>
        )
    }
}

AppComponent.propTypes = {
    name: PropTypes.string,
}

export default AppComponent;