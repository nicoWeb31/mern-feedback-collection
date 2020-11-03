import React, { Component } from 'react'

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Hearder';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Dashboard from './dashbaord/Dashboard'

import Landing from '../component/landing/Landing'


const SureveilNew = () => <h2>SureveilNew</h2>;



class App extends Component {
    state = {}

    componentDidMount() {
        console.log(this.props)
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div>


                    <Header />

                    <div className="container">

                        <Route exact path='/surveys' component={Dashboard} />
                        <Route path='/serveys/new' component={SureveilNew} />

                        <Route exact path='/' component={Landing} />
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, { fetchUser })(App);





//routing

// const Header = () => <h2>hearder</h2>;
// const DashBord = () => <h2>DashBord</h2>;
// const SureveilNew = () => <h2>SureveilNew</h2>;
// const Landing = () => <h2>Landing</h2>;
// const App = () => {
//     return (
//         <div>


//             <Header/>

//             <BrowserRouter>
//                 <div>

//                     <Route path='/dash' component={DashBord}/>
//                     <Route exact={true} path='/serveys' component={DashBord}/>
//                     <Route path='/serveys/new' component={SureveilNew}/>

//                     <Route  exact path='/' component={Landing}/>
//                 </div>

//             </BrowserRouter>
//         </div>
//     );
// }