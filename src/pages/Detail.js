import React from 'react';
import SubDetails from './SubDetails';
class Detail extends React.Component{
    render(){
        return (<div>
        <p>{this.props.message}</p>
        <SubDetails propNumber={2}></SubDetails>
        </div>);
    }
}

export default Detail;