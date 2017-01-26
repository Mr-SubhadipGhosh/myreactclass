import React from 'react';

class BasicCtrl extends React.Component{
    
    render(){
        return (<div>
            {this.props.message}
        </div>);
    }
}

export default BasicCtrl;