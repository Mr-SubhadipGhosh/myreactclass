import React from 'react';
import ReactDOM from 'react-dom';
class SubInfo extends React.Component{
    clickForceHandler(){
        this.forceUpdate();
        var spanColor = document.getElementsByTagName('span')[0];
        ReactDOM.findDOMNode(spanColor).style.color = "red";
    }
    render(){
        return (<div>Sub info value - ><button onClick={this.clickForceHandler.bind(this)}>Update forcefully</button>
        
            <span> {Math.random()}</span></div>);
    }
}

export default SubInfo;