import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import { connect } from 'react-redux';



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
                return (
                    <li>
                        <a href="/logout">logout</a>
                    </li>
                )
        }
    }


    render() {
        console.log(this.props.isAuth)
        return (

            <nav >
                <div className="nav-wrapper">

                    <a href="true" className="left brand-logo">€maily</a>

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