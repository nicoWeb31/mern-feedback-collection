import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


const Header = () => <h2>hearder</h2>;
const DashBord = () => <h2>DashBord</h2>;
const SureveilNew = () => <h2>SureveilNew</h2>;
const Landing = () => <h2>Landing</h2>;



const App = () => {
    return (
        <div>


            <Header/>

            <BrowserRouter>
                <div>

                    <Route path='/dash' component={DashBord}/>
                    <Route exact={true} path='/serveys' component={DashBord}/>
                    <Route path='/serveys/new' component={SureveilNew}/>

                    <Route  exact path='/' component={Landing}/>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;












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