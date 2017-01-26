import React from 'react';

import Detail from './pages/Detail';
import Info from './pages/Info';
import LifeCycle from './pages/ReactLife';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
    }
    countInc(){
        this.setState({count: this.state.count+1});
    }
    render(){
        return (<div>
            <Detail message="Detail section"></Detail>
            <Info></Info>
            <div id="lifecyc">
                <button onClick={this.countInc.bind(this)}>++Count </button>
                <LifeCycle count={this.state.count}> </LifeCycle>
            </div>
        </div>);
    }
}

export default App;