import React, {Component, PropTypes} from 'react';
import fetch from 'isomorphic-fetch';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactsApp extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            contacts: []
        };
    }

    componentDidMount() {
        if (this.props.contacts && this.props.contacts.length > 0) {
            this.setState({contacts: this.props.contacts});
        } else {
            ContactsApp.requestInitialData().then(contacts => {
                this.setState({contacts});
            });
        }
    }

    handleUserInput(searchTerm) {
        this.setState({filterText: searchTerm})
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                    onUserInput={this.handleUserInput.bind(this)} />
                <ContactList contacts={this.state.contacts}
                    filterText={this.state.filterText}/>
            </div>
        )
    }
}
ContactsApp.propTypes = {
    contacts: React.PropTypes.arrayOf(React.PropTypes.object)
};

ContactsApp.requestInitialData = () => {
    if (typeof window === 'undefined') {
        console.log('server side rendering');
    } else {
        console.log('client side rendering');
    }
    return fetch('http://localhost:3000/contacts.json').then((response) => response.json());
};

export default ContactsApp;
