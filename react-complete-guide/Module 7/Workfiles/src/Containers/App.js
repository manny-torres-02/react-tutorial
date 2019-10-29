import React, { PureComponent } from 'react';
import classes from './App.css';

import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';



class App extends PureComponent {
  constructor (props) {
    super (props);
    console.log('[App.js] constructor]')
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true

  }

  /* static getDerivedStateFromProps (props, state) {
    console.log('[app.js] getDerivedStateFromProps', props);
    return state;
  }

// componentWillMount () {
//   console.log('[App.js] componentWillMount');
// }
componentDidMount () {
  console.log('[App.js] ComponentDidMount');
}

shouldComponenetUpdate (nextProps, nextState) {
  console.log('[app.js] shouldComponentUpdate'); 
  if (
    nextProps.persons !== this.props.persons ||
    nextProps.changed !== this.props.changed ||
    nextProps.clicked !== this.props.changed 
  ) { 
  return true;
} else {
  return false;
}
} */

componentDidUpdate() {
  console.log('[app.js} componentDidUpdate]');
}
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () { 
    console.log('[app.js render]');
    let persons = null;
    

    if ( this.state.showPersons ) {
          persons = <Persons
          persons ={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed ={this.nameChangedHandler}
          />
    }

    

    return (
      <div className={classes.App}>
        <button onClick= {() => {this.setState({showCockpit:false});
        }}> Remove Cockpit </button>
        {this.state.showCockpit ?  <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        />  :null}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
