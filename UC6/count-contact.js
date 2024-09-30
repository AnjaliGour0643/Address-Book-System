// searchByCityOrState.js
class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    searchContactsByCityOrState(location) {
        return this.contacts.filter(contact => contact.city === location || contact.state === location);
    }
}

const personalAddressBook = new AddressBook("Personal");
personalAddressBook.addContact(new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com"));

const results = personalAddressBook.searchContactsByCityOrState("New York");
results.forEach(contact => console.log(contact.toString()));
