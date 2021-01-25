import React from 'react';

export default function MainComponent(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                    <h3>Welcome {props.name}!</h3>
                    <input type="text" value={props.name} onChange={e => props.handleInputChange(e)} />
                </div>
            </div>
        </div>
    )
}