const MyValidator = require('my_validator')

let user = {
    email : "mammen999@gmail.com",
    password : "jhdfagbjk@2HH",
    phone : "0987654321",

}

const val = new MyValidator(user)
console.log(val.isEmail("user@domain"));
console.log(val.isPassword("Abcde1"));
console.log(val.validatePhone("12345690"))

console.log(val.validateUser(user));