import React from 'react';
import ReactDOM from 'react-dom';

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
            textValue: ReactDOM.findDOMNode(this.refs.myInputRef).value // e.target.value
        });
    }

    render(){
        return <div> <input ref="myInputRef" value={this.state.textValue} onChange={this.updateState}/>{this.state.textValue}</div>;
    }

}

export default Forms;