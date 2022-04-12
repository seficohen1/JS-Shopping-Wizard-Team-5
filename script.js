/****************Global Variables*****************/
const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input:not([type='checkbox'], [type='radio'])");
// const inputsRequired = document.querySelectorAll("#form input:not([type='checkbox'], [type='radio'])");
const nextButton = document.getElementById("next-step");
const clearButton = document.getElementById("clear-form");
const steps = Array.from(document.querySelectorAll("#form .step"));
const messageRequired = "is required";
const messagesElements = {
    username: '<p></p>',
    email: '<p></p>',
    password: '<p></p>',
    password1: '<p></p>',
    firstName: '<p></p>',
    lastName: '<p></p>',
    birthday: '<p></p>',
    addres1: '<p></p>',
    address2: '<p></p>', 
    postalCode : '<p></p>',
    phone: '<p></p>',
}

/*Array for storing multiple data users*/
let users = [];
/*Data user object*/
let user = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthday: '',
    address1: '',
    address2: '',
    postalCode: 0,
    country: '',
    phone: '',
    regularAddress: false,
    shippingType: '',
    isGift: false,
    giftContent: {
        title: '',
        message: '',
    } //gift tittle and gift message
};

/*Arrays for form options*/
const shippingTypes = ['Free shipment (72H)', 'Extra shipping (48h) ( +5 € )', 'Premium (24h) ( + 10€ )'];
const shippingTime = [72, 48, 24];
const countries = ['Andorra', 'Spain', 'France', 'Germany', 'Greece', 'Isarel'];
const prefix = ['376', '34', '33', '49', '30', '972'];

/*Regular Expressions*/
const expressions = {
    username: /^[a-zA-Z0-9.-_]{5,20}$/, //Words, numbers, hyphen and underscore, no spaces, min5, max20
    email: /^\w+([\.-\_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //mail definition max50
    password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, //One number, one UPC, one LOC, one special character, min8, max20
    firstName: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, //letters, accent  marks letters, spaces, max20
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, //letters, accent  marks letters, spaces, max20
    address1: /^[0-9a-zA-Z\s\.,-º]{1,50}$/, //letters, numbers, dot, dash, comma, spaces, max20
    address2: /^[0-9a-zA-Z\s\.,-º]{1,50}$/, //letters, numbers, dot, dash, comma, spaces, max20
    postalCode: /^[0-9]{1,5}$/, //numbers, max5
    phoneNumber: /^[0-9]{1,9}$/ // numbers, max9
};

/* Control time out function */
const timeOutLimit = 300000; //Five minutes
const timeRedirect = 5000; //Five seconds
let timeOut = setTimeout(() => {
    setTimeout(() => {
        //Message displayed indicating maximum time allowed exceeded
        //Back to product page
    }, timeRedirect);
}, timeLimit);

/* Every Minute Message */
const timeMinute = 60000; // 1 minute
let intervalMinute = setInterval(() => { //Message indicating 
    setTimeout(() => {
        //Message dissapear
    }, timeRedirect);
}, timeMinute);

/* Adding eventlisteners keyup and blur to inputs */
inputs.forEach((input) => {
    input.addEventListener('keyup', );
    input.addEventListener('blur', );
});

/* Adding submit functionality to the form */
form.addEventListener('submit', (e) => {
    e.preventDefault();

});