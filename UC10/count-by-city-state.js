class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    countByCity(city) {
        return this.contacts.filter(contact => contact.city === city).length;
    }

    countByState(state) {
        return this.contacts.filter(contact => contact.state === state).length;
    }
}

// Example usage
const addressBook = new AddressBook();

const contact1 = new Contact("John", "Doe", "123 St", "New York", "NY", "10001", "1234567890", "john@example.com");
const contact2 = new Contact("Jane", "Smith", "456 Ave", "Los Angeles", "CA", "90001", "0987654321", "jane@example.com");
const contact3 = new Contact("Jim", "Beam", "789 Blvd", "New York", "NY", "10002", "1112223333", "jim@example.com");

addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);

console.log(`Count by City (New York): ${addressBook.countByCity("New York")}`);
console.log(`Count by State (CA): ${addressBook.countByState("CA")}`);
