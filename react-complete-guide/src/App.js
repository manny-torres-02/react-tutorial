//using normal react class instead of onlyfunctional components
import React, { Component } from 'react';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:"unique", name: 'Max', age: 28 },
      {id:"no", name: 'Manu', age: 29 },
      {id:"yes", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
    
  }

  
  nameChangedHandler=( event, id )=>{
    
    const personIndex=this.state.persons.findIndex( p=> {return p.id ===id;
    })
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({
      persons:persons
      })

    };
 
 

deletePersonHandler = (personIndex) => {

   // const persons=this.state.persons
    
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons:persons})

}

  togglePersonsHandler = () => {
//this keyword will return to the class - 
//toggle property 

//this const always true or false - reflects current state
const doesShow= this.state.showPersons;

//if Does show is True - then show persons will be false
//if DoesShow is false, then ShowPersons will be True
//converts the Show Persons 
this.setState({showPersons : !doesShow})


  }

  render () {

    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:' 1px solid blue', 
      padding: '8px',
      cursor: 'pointer',
      /*':hover':{
        backgroundColor:'lightGreen',
      color:'grey'
    }/*/
    }; 

    let persons =null; 

    if ( this.state.showPersons  ) {
    persons = ( 
    <div> 
      {this.state.persons.map( (person, index)  => {
        return <Person
          click = {()=>this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)} />
      })}
        </div>
);
style.backgroundColor='red';
/*style[':hover']={
  backgroundColor:"salmon",
  color:'purple'
}*/
    }
    //need place to put classes
    const classes=[''];
    if(this.state.persons.length<=2) {
      classes.push('red'); //classes =['red']
    }

    if(this.state.persons.length<=1) {
      classes.push('bold'); //classes =['red']
    }
    return (
     // <StyleRoot>
      <div className="App">
      
        <h1 >Hi, I'm a React App</h1>
        <p className={classes.join(' ')} >This is really working!</p>
       
        <button  style ={style}  onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons} 
        
        
      </div>
     // </StyleRoot>      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

//export default Radium(App);
export default App;

/*import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

const app = props => {
const  [personsState, setPersonsState ] = useState({
    persons:[
  {name:"max", age:"always"},
  {name:"supermanny", age:"forever"},
  {name:"steph", age:30}
],

//removed otherState since it is being called in teh const value below: 
//otherState:'value'
});

//can call multiple use states 
const [otherState, setOtherState] = useState('meow');

console.log(personsState, otherState);

//method to handle function 
// functional comp to manage state 
//function inside function
const switchNameHandler=(newName) => {
  //console.log("CLCIKED")
  /* DO NOT DO THIS : 
  personsState.persons[0].name='MAXIe pad';
  */
 /*
 setPersonsState( {
  persons:[
    {name:newName, age:"always"},
    {name:"supermanny", age:"forever"},
    {name:"steph", age:1000000}
  ],

//need to manually include other state if the other state is not being updated. The merge is not automatic
other: personsState.otherState 
}
 )

}

   const nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  } )
}

  

    return (
      <div className="App">
     
        <h1>hi I am a react app</h1>
        <button onClick={() => switchNameHandler('FALL')}>Switch Function </button>
        <Person 
        name={personsState.persons[0].name} age={personsState.persons[0].name}
        click={switchNameHandler.bind(this,'FFFFFFFFFFFFF')} > I am a killer</Person>
       <Person 
       name={personsState.persons[2].name}  
       age={personsState.persons[2].age}
       changed={nameChangedHandler} > My hobby is being an ageless Queen </Person> 

       <Person 
       name={personsState.persons[1].name}  age={personsState.persons[1].age} />
      </div>
    );
  } 


export default app;
/*
state = {
  persons:[
    {name:"max", age:"always"},
    {name:"supermanny", age:"forever"},
    {name:"steph", age:30}
  ],
  other:'value'
}

*/

