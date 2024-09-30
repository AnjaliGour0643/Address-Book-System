// countContacts.js
class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    countContacts() {
        return this.contacts.length;
    }
}

const personalAddressBook = new AddressBook("Personal");
personalAddressBook.addContact(new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com"));
console.log(`Number of contacts: ${personalAddressBook.countContacts()}`);
