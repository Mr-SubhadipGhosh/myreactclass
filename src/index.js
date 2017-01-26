import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Detail from './pages/Detail';
import Info from './pages/Info';
import LifeCycle from './pages/ReactLife';
import MyForms from './pages/Forms';
import HOCEx from './pages/HOCEx';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(
     <Router history= {browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Detail}/>
                <Route path="detail" component= {Detail}/>
                <Route path="info" component= {Info}/>
                <Route path="life" component= {LifeCycle}/>
                <Route path="forms" component= {MyForms}/>
                <Route path="hoc" component={HOCEx}/>
            </Route>
        </Router>,
    document.getElementById('app')
)

// setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
