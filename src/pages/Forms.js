import React from 'react';

class Forms extends React.Component{
    constructor(props){
        super(props);
        this.updateState=  this.updateState.bind(this);
        this.state = {
            textValue: 'Init val'
        }
    }

    updateState(e){
        this.setState({
            textValue: e.target.value
        });
    }

    render(){
        return <div> <input  value={this.state.textValue} onChange={this.updateState}/>{this.state.textValue}</div>;
    }

}

export default Forms;