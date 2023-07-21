import Contact from './contact.js';



let addBtn = document.querySelector('#add');
let updateBtn = document.querySelector('#update');
let deleteBtn = document.querySelector('#delete');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let phoneNumber = document.querySelector('#phone').value
    
    var c1 = new Contact();
    c1.addNewContact(name, email, phoneNumber);
    window.location.reload();
})

updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let phoneNumber = document.querySelector('#phone').value

    if(localStorage.getItem(name)) {
        var c1 = new Contact();
        c1.updateContact(name, email, phoneNumber);
    } else {
        alert('User does not exist')
    }
    window.location.reload();
})
    

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let name = document.querySelector('#name').value
    
    var c1 = new Contact();
    c1.deleteContact(name);
    window.location.reload();
})

let contactSelection = document.querySelector('#contacts')
let contacts = Object.keys(localStorage);
contacts.forEach(contact => {
   
        const option = document.createElement('option');
        option.value = contact;
        option.text = contact; 
        
        contactSelection.appendChild(option);

})

contactSelection.addEventListener('change', () => {
    let name = contactSelection.value;

    let contact = JSON.parse(localStorage.getItem(name));
    let email = contact[0]
    let phone = contact[1]



    document.querySelector('#name').value = name
    document.querySelector('#email').value = email
    document.querySelector('#phone').value = phone;
})

