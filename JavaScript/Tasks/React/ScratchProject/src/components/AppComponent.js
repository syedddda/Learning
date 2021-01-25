import React from 'react';
import PropTypes from 'prop-types';
import HeaderFunctionalComponent from './HeaderFunctionalComponent';
import HeaderComponent from './Header/HeaderComponent';
import MainComponent from './Main/MainComponent';
import PostsComponent from './Posts/PostsComponent';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            appName: 'My Test Application',
            showHome: true
        }
        // setTimeout(() => {
        //     this.setState({ 
        //         showHome: !this.state.showHome
        //     })
        // },3000)
    }

    handleInputChange (e) {
        this.setState( { name: e.target.value } );
        if( e.target.value === 'Syed sehu' ) {
            this.setState( { appName: e.target.value } );
        }
        // console.log( this );
    }

    render() {
        const { name, appName } = this.state;
        return (
            <Router>
                {/* <HeaderComponent appName={appName}/> */}
                {/* <Route exact path="/" component={HeaderComponent} name={name} /> */}
                <Route
                    path="/" 
                    render={(props) => (
                        <HeaderComponent {...props} name={name} />
                    )} 
                />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <MainComponent {...props} name={name} />
                        )} 
                    />
                    <Route
                        path="/posts" 
                        render={(props) => (
                            <PostsComponent {...props} name={name} />
                        )} 
                    />
                    <Route
                        path="/" 
                        render={() => (
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>404 - This page doesn't exist</h1>
                                    </div>
                                 </div>
                            </div>
                        )} 
                    />
                </Switch>
                
            </Router>
            // <div>    
            //     {
            //         this.state.showHome &&       
            //         <HeaderComponent appName={appName}/>
            //     }
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-md-12">
            //                 <h1>Welcome {name}!</h1>
            //                 <input type="text" value={name} onChange={e => this.handleInputChange(e)} />
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

AppComponent.propTypes = {
    name: PropTypes.string,
}

export default AppComponent;