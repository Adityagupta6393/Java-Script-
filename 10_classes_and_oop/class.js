function setUsername(username){
    this.username = username;
}

function createUser(username, eamil, password){
    setUsername.call(this, username);
    this.email = eamil;
    this.password = password;
}

const userOne = new createUser("aditya", "aditya@gmail.com", "aditya123");
console.log(userOne);