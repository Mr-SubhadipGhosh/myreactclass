import React from 'react';


import Detail from './pages/Detail';
import Info from './pages/Info';

class App extends React.Component{
    render(){
        return (<div>
            <Detail message="Detail section"></Detail>
            <Info></Info>
        </div>);
    }
}

export default App;