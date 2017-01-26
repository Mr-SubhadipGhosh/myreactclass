import React from 'react';

class ReactLife extends React.Component{
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
       
      console.log('Component WILL RECIEVE PROPS!', newProps);
   }

   shouldComponentUpdate(newProps, newState) {
        console.log('Should component Update! > prop->', newProps);
        console.log('Should component Update! > state->', newState);
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

    render(){
        return (<div><hr/><div>React Life Cycle - wait ....{this.props.count}</div></div>);
    }
}

export default ReactLife;