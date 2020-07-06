import React, {Component} from 'react';
import './App.css';
import {SearchField} from './components/SearchField';
import {CardContainer} from './components/CardContainer';
import {CardItem} from './components/CardItem';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({contacts: users}))
  }

  render() {
    const {contacts, searchInput} = this.state;
    const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchInput.toLowerCase())
    )

    const handleChange = e => {
      this.setState({searchInput: e.target.value});
    }

    return (
      <div className="App">
        <h1>Simple Contacts Search</h1>
        <SearchField handleChange={handleChange} />
        <CardContainer>
          {filteredContacts.map(contact => 
            <CardItem 
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
              email={contact.email}
            />
          )}
        </CardContainer>
      </div>
    )
  }
  
}

export default App;
