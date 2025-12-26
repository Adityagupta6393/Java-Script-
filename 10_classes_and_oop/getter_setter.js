class User{
    constructor(email , password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(newEmail) {
        this._email = newEmail;
    }

    get password() {
        return `${this._password}123`;
    }

    set password(newPassword) {
        this._password = newPassword;
    }       
}

const user = new User("aditya@google.com", "abc");
console.log(user.email);
console.log(user.password);