import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom'


class Hearder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            
                <nav >
                    <div className="nav-wrapper">
                        
                        <a href="true" className="left brand-logo">€maily</a>
                    
                    <ul className="right">
                        <li>
                            <a href="true">Login with Google</a>
                        </li>

                    </ul>

                    </div>
                </nav>



            
        );
    }
}

export default Hearder;