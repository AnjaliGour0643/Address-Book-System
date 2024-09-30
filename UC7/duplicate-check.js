// countByCityOrState.js
class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    countContactsByCityOrState() {
        const cityCount = this.contacts.reduce((acc, contact) => {
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            return acc;
        }, {});

        const stateCount = this.contacts.reduce((acc, contact) => {
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});

        console.log("Contact Count by City:", cityCount);
        console.log("Contact Count by State:", stateCount);
    }
}

const personalAddressBook = new AddressBook("Personal");
personalAddressBook.addContact(new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com"));
personalAddressBook.countContactsByCityOrState();
