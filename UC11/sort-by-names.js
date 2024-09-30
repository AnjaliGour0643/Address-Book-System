class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortContactsByName() {
        return this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }

    displayContacts() {
        this.sortContactsByName().forEach(contact => {
            console.log(`${contact.firstName} ${contact.lastName}`);
        });
    }
}

// Example usage
const addressBook = new AddressBook();

addressBook.addContact(new Contact("John", "Doe", "123 St", "New York", "NY", "10001", "1234567890", "john@example.com"));
addressBook.addContact(new Contact("Jane", "Smith", "456 Ave", "Los Angeles", "CA", "90001", "0987654321", "jane@example.com"));
addressBook.addContact(new Contact("Jim", "Beam", "789 Blvd", "New York", "NY", "10002", "1112223333", "jim@example.com"));

addressBook.displayContacts(); // Outputs sorted list of contacts
