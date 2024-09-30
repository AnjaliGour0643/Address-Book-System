// addressBook.js
class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }
}

const personalAddressBook = new AddressBook("Personal");
console.log(`Address Book '${personalAddressBook.name}' created.`);
