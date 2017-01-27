import React from 'react';
import SubDetails from './SubDetails';
class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            someInfo: 200
        }
    }
    clickEventCall(){
        this.setState({someInfo:this.state.someInfo + 100});
    }
    render(){
        return (<div>
        <p>{this.props.params.message}</p>
        <SubDetails propNumber={this.state.someInfo}  clickFunc={this.clickEventCall.bind(this)}></SubDetails>
        </div>);
    }
}

export default Detail;