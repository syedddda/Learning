import React from 'react';
import PropTypes from 'prop-types';
import HeaderFunctionalComponent from './HeaderFunctionalComponent';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            appName: 'My Test Application'
        }
    }

    handleInputChange (e) {
        this.setState( { name: e.target.value } );
        // console.log( this );
    }

    render() {
        const { name, appName } = this.state;
        return (
            <div>                
                <HeaderFunctionalComponent appName={appName}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Welcome {name}!</h1>
                            <input type="text" value={name} onChange={e => this.handleInputChange(e)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AppComponent.propTypes = {
    name: PropTypes.string,
}

export default AppComponent;