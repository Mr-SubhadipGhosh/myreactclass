import React from 'react';

class SubDetails extends React.Component{
    render(){
        return <div>
        <button onClick={this.props.clickFunc}>Click to call parent func</button>
        <p>{this.props.propSomeValue} - {this.props.propNumber}</p></div>;
    }
}
SubDetails.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propObject: React.PropTypes.object
}

SubDetails.defaultProps = {
   propArray: [0,1,2,3],
   propFunc: function(e){return e},
   propNumber: 1,
   propSomeValue: "Default Value from SubDetails",
   propObject: {
      object1:"object1",
      object2: "object2"
   }
}
export default SubDetails;