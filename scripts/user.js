(function (core) {class User {
    //constructor for user class and creating a instance of the user class
    constructor(firstname, lastname, emailAddress,password) {
        this.Name = firstname
        this.LName = lastname
        this.EmailAddress = emailAddress
        this.Password = password
    }
//setters and getters
    get Name() {
        return this.m_name
    }
    set Name(firstname) {
        this.m_name = firstname
    }
    get LName() {
        return this.m_lname
    }
    set LName(lastname) {
        this.m_lname = lastname
    }

    get EmailAddress() {
        return this.m_emailAddress
    }
    set EmailAddress(emailAddress) {
        this.m_emailAddress = emailAddress
    }

    get Password() {
        return this.m_password
    }
    set Password(password) {
        this.m_password = password
    }

  
//toString method for output
    toString() {
        return `Firstname: ${ this.Name }\n Lastname: ${ this.LName}\n EmailAddress: ${ this.EmailAddress }\n Password: ${this.Password}`
    }


}core.User = User
})(core || (core = {}))