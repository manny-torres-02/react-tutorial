//FUNCTIONAL COMPONENT. NOT PLANNING ON MANAGING STATE. 
import React, {Component} from 'react';

import Person from './Person/Person'

class Persons extends Component {
 // static getDerivedStateFromProps(props, state) {
  //  console.log('[Person.js getDerivedStateFromProps')
   // return state;
  //}

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate')
    return true; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person,js] getSnapshotBeforeUPdate')
    return {message:  'snapshot'} 
  }

  componentDidUpdate (prevProps,prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot);
  }
  render () {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map( ( person, index ) => {
        return (
          <Person
            key={person.id}
            click={() => this.props.clicked( index )}
            name={person.name}
            age={person.age}
            changed={( event ) => this.props.changed( event, person.id )} />
       
    )} )};
        }

export default Persons;