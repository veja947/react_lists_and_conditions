import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {
                id: 1,
                name: 'name 1',
                age: 18
            },
            {
                id: 2,
                name: 'name 2',
                age: 28
            },
            {
                id: 3,
                name: 'name 3',
                age: 38
            }
        ],
        description: 'this is the description in state',
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const buttonStyles = {
            backgroundColor: "#cccccc",
            border: "#ccc 1px solid",
            cursor: "pointer",
            padding: "8px"
        };

        let personList = null;
        if (this.state.showPersons) {
            personList = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            myClick={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button
                    style={buttonStyles}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                <p className="App-intro">
                    {personList}
                </p>
            </div>
        );
    }
}

export default App;
