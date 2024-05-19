const MyValidator = require('my_validator')

let user = {
    email : "mammen999@gmail.com",
    password : "jhdfagbjk@2HH",
    phone : "0987654321",

}

const val = new MyValidator(user)
console.log(val.isEmail("user@domain")); //false
console.log(val.isPassword("Abcde1")); //false
console.log(val.validatePhone("12345690")) //false

console.log(val.validateUser(user)); //true