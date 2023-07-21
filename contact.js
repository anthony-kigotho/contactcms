export default class Contact{
    name;
    email;
    phoneNumber;

    constructor(name, email, phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber=phoneNumber;
    }

    addNewContact(name, email, phoneNumber) {
        let contact = JSON.stringify([email, phoneNumber])
        localStorage.setItem(`${name}`, contact)
    }
    
    updateContact(name, email, phoneNumber) {
        let contact = JSON.stringify([email, phoneNumber])

        localStorage.removeItem(name);
        localStorage.setItem(name, contact)
    }

    deleteContact(name) {
        localStorage.removeItem(name)
    }
}

