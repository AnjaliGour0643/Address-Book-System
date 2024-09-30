// deleteContact.js
class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(c => c.firstName === firstName && c.lastName === lastName);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact ${firstName} ${lastName} deleted successfully.`);
        } else {
            console.log(`Contact ${firstName} ${lastName} not found.`);
        }
    }
}

const personalAddressBook = new AddressBook("Personal");
const contact1 = new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com");
personalAddressBook.addContact(contact1);
personalAddressBook.deleteContact("John", "Doe");
