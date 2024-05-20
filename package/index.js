class MyValidator {
    constructor(user) {
        this.user = user;
    }

    isEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    isPassword(password) {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(password);
    }

    validatePhone(phone) {
        const cleanedNumber = phone.replace(/\D/g, '');
        return cleanedNumber.length === 10;
    }

    validateUser() {
        const { email, password } = this.user;
        return this.isEmail(email) && this.isPassword(password);
    }
}

module.exports = MyValidator;
