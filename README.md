# @mammen/my_validator

`my_validator` is a powerful Node.js package designed to enhance the security of user authentication in your applications. It provides robust validation for email addresses, passwords, and phone numbers, ensuring that your users’ credentials meet the necessary criteria.

## Features

- **Email Validation**: Ensures the email format is correct and follows common standards.
- **Password Validation**: Validates passwords to ensure they meet security requirements, including a mix of upper and lower case letters, numbers, and a minimum length.
- **Phone Number Validation**: Cleans and validates phone numbers to ensure they are in a correct format.

## Installation

To install the package, use npm:

https://www.npmjs.com/package/@mammen/my_validator

```bash
npm install @mammen/my_validator
```
Usage
Here's a quick example of how to use the my_validator package:  
```
const MyValidator = require('@mammen/my_validator');

const user = {
    email: 'example@example.com',
    password: 'Password123',
    phone: '123-456-7890'
};

const validator = new MyValidator(user);

if (validator.validateUser()) {
    console.log('User is valid');
} else {
    console.log('User is invalid');
}
```

API
MyValidator
constructor(user)
Creates a new instance of MyValidator.

user: An object containing email, password, and phone properties.
isEmail(email)
Validates the email format.

email: The email address to validate.
Returns: true if the email is valid, otherwise false.
isPassword(password)
Validates the password format.

password: The password to validate.
Returns: true if the password is valid, otherwise false.
validatePhone(phone)
Validates the phone number format.

phone: The phone number to validate.
Returns: true if the phone number is valid, otherwise false.
validateUser()
Validates the user's email, password, and phone number.

Returns: true if all user details are valid, otherwise false.
Contributing
Contributions are welcome! Please open an issue or submit a pull request to the GitHub repository.

Author :
Mammen Mathew

Bugs and Issues :
If you encounter any bugs or issues, please report them.
