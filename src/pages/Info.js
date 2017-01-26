import React from 'react';
import SubInfo from './SubInfo';
class Info extends React.Component{
     constructor(props){
        super(props);
        this.infoEventHandler = this.infoEventHandler.bind(this);
        this.state = {
            value:'',
            data: [{name:'Test1'},{name:'Test3'},{name:'Test4'}]
        };
    }
    infoEventHandler(){
        this.setState({value:'Updated value in state'});
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('Should component Update! > prop->', newProps);
        console.log('Should component Update! > state->', newState);
      return true;
   }
    render(){
        return (<div>Info ->{this.state.value}
        <button onClick={this.infoEventHandler}>Update State</button>
        <SubInfo ></SubInfo>
        <hr/>
        list->
        {this.state.data.map((val, index)=>{
           return <div key={index}>{val.name}</div>
        })}
        </div>);
    }
}

export default Info;