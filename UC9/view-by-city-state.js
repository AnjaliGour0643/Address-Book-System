// sortContactsByCity.js
class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortContactsByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }

    displayContacts() {
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

const personalAddressBook = new AddressBook("Personal");
personalAddressBook.addContact(new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com"));
personalAddressBook.addContact(new Contact("Alice", "Smith", "456 Oak St", "Los Angeles", "CA", "90001", "9876543210", "alice.smith@example.com"));

personalAddressBook.sortContactsByCity();
console.log("Contacts sorted by city:");
personalAddressBook.displayContacts();
