import React from 'react';
import {Link} from 'react-router';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
    }
    countInc(){
        this.setState({count: this.state.count+1});
    }
    render(){
        return (
             <div>
             <Link to="/detail">Detail</Link>&nbsp;
             <Link to="/info">Info</Link>&nbsp;             
             <Link to="/life">LifeCycle</Link>&nbsp;
             <Link to="/forms">Forms</Link>&nbsp;
             <Link to="/hoc">HOC</Link>
             <hr/>
             {this.props.children}
             <hr/>
             <button onClick={this.countInc.bind(this)}>++Count->{this.state.count} </button>
          </div>   
        );
    }
}

export default App;

// <div>
//             <Detail message="Detail section"></Detail>
//             <Info></Info>
//             <div>
//                 <button onClick={this.countInc.bind(this)}>++Count </button>
//                 <LifeCycle count={this.state.count}> </LifeCycle>
//             </div>
//             <MyForms></MyForms>
//         </div>