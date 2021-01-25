import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerName: 'My Header'
        }
        // setTimeout(() => {
        //     this.setState( {
        //         headerName: 'My Header Updated'
        //     } )
        // }, 3000)

        // setTimeout(() => {
        //     this.setState( {
        //         headerName: 'My Header Updated True'
        //     } )
        // }, 5000)
    }
    
    componentWillMount() {
        console.log( 'Component will mount' );
    }
    
    componentDidMount() {
        console.log( 'Component did mount' );
    }

    componentWillReceiveProps(nextProps) {
        console.log( 'Component will receive props', nextProps );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log( 'ShouldComponentUpdate', nextProps, nextState );
        const { pathname } = this.props.location;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log( 'componentWillUpdate', nextProps, nextState );
    }

    componentDidUpdate( prevProps, prevState) { 
        console.log( 'componentDidUpdate', prevProps, prevState );
    }

    componentWillUnmount() {
        console.log( 'Component will unmount' );
    }

    render() { 
        const { pathname } = this.props.location;
        
        return(
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">{this.props.appName}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className={`nav-item  ${ pathname === '/' ? ' active' : ''}`}>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className={`nav-item  ${ pathname === '/users' ? ' active' : ''}`}>
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                            <li className={`nav-item  ${ pathname === '/posts' ? ' active' : ''}`}>
                                <Link className="nav-link" to="/posts">Posts</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

HeaderComponent.propTypes = {
    name: PropTypes.string
}

export default HeaderComponent;