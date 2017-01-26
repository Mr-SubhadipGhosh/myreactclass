import React from 'react';
import Basic from './BasicCtrl';
let HODEx = CustomComp => class  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:'from hoc'
        }
    }
    render(){
        return (<CustomComp {...this.props}{...this.state}/>);
    }
}

export default HODEx(Basic);