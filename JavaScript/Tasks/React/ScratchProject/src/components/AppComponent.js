import React from 'react';
import PropTypes from 'prop-types';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    handleInputChange (e) {
        this.setState( { name: e.target.value } );
        console.log( this );
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>Welcome {name}!</h1>
                <input type="text" value={name} onChange={e => this.handleInputChange(e)} />
            </div>
        )
    }
}

AppComponent.propTypes = {
    name: PropTypes.string,
}

export default AppComponent;