import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from '../../component/Payments';

import './header.style.css'



class Hearder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderContent() {
        switch (this.props.isAuth) {
            case null:
                return
            case false:
                return (
                    <li>
                        <a href="auth/google">Login with Google</a>
                    </li>
                )

            default:
                return [<li key="2"><Payments/></li>,
                <li key="3" className="_liCredit"> credits : {this.props.isAuth.credits}</li>,
                <li key="1"><a href="/api/logout">logout</a></li>
                ]

        }
    }


    render() {
        console.log(this.props.isAuth)
        return (


            <nav >
                <div className="nav-wrapper">

                    <Link to={this.props.isAuth ? '/surveys' : '/'}

                        className="left brand-logo">€maily</Link>

                    <ul className="right">

                        {this.renderContent()}

                    </ul>

                </div>
            </nav>


        );
    }
}

const mapStateToProps = state => ({ isAuth: state.authR })
export default connect(mapStateToProps)(Hearder);