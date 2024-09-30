class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    // Validate contact details
    isValid() {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Name must start with capital and minimum 3 characters
        const addressPattern = /^.{4,}$/; // Minimum 4 characters
        const zipPattern = /^\d{5}(-\d{4})?$/; // Zip
        const phonePattern = /^\d{10}$/; // Phone
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email

        return (
            namePattern.test(this.firstName) &&
            namePattern.test(this.lastName) &&
            addressPattern.test(this.address) &&
            addressPattern.test(this.city) &&
            addressPattern.test(this.state) &&
            zipPattern.test(this.zip) &&
            phonePattern.test(this.phone) &&
            emailPattern.test(this.email)
        );
    }
}

const contact1 = new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com");

if (contact1.isValid()) {
    console.log("Contact is valid and can be added.");
} else {
    console.log("Contact is invalid.");
}
