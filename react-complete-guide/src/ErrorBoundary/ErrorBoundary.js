import React, {Component} from 'react';

class ErrorBoundary extends Component {

    state= {
        hasError:false,
        errorMessage:''
    }
    componentDidCatch= (error,info) => {
    //if we catch an error we have to change the state and figure out what we need to do with it. 
    this.setState({
        hasError:true,
        errorMessage:error
    })
}
    render() {
        //if else statement to handle error status 
        
        //handle if false - return error message 
        if (this.state.hasError) {
            return <h1> something went wrong. </h1>
        } else {
            //if there is no errpr then return the component. 
            return this.props.children
        }
    }
}

export default ErrorBoundary;