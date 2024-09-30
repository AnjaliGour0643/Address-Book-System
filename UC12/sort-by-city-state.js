class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    sortByCity() {
        return this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }

    sortByState() {
        return this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    }

    sortByZip() {
        return this.contacts.sort((a, b) => a.zip - b.zip);
    }

    displayContactsSortedByCity() {
        this.sortByCity().forEach(contact => {
            console.log(`${contact.firstName} ${contact.lastName} from ${contact.city}`);
        });
    }

    displayContactsSortedByState() {
        this.sortByState().forEach(contact => {
            console.log(`${contact.firstName} ${contact.lastName} from ${contact.state}`);
        });
    }

    displayContactsSortedByZip() {
        this.sortByZip().forEach(contact => {
            console.log(`${contact.firstName} ${contact.lastName} from Zip Code ${contact.zip}`);
        });
    }
}

// Example usage
const addressBook = new AddressBook();

addressBook.addContact(new Contact("John", "Doe", "123 St", "New York", "NY", "10001", "1234567890", "john@example.com"));
addressBook.addContact(new Contact("Jane", "Smith", "456 Ave", "Los Angeles", "CA", "90001", "0987654321", "jane@example.com"));
addressBook.addContact(new Contact("Jim", "Beam", "789 Blvd", "New York", "NY", "10002", "1112223333", "jim@example.com"));

console.log("Sorted by City:");
addressBook.displayContactsSortedByCity();

console.log("Sorted by State:");
addressBook.displayContactsSortedByState();

console.log("Sorted by Zip:");
addressBook.displayContactsSortedByZip();
