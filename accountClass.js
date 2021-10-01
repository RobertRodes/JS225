class Account {
  #email;
  #password;
  #firstName;
  #lastName;

  constructor(email, password, firstName, lastName) {
    this.#email = email;
    this.#password = password;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.displayName = this.#makeDisplayName();
  }

  get #PWDERRMSG() {
    return 'Invalid Password';
  }

  #makeDisplayName() {
    let displayName = '';
    let randASCII;
    for (let i = 0; i < 16; i++) {
      randASCII = Math.floor(Math.random() * 94) + 32;
      displayName += String.fromCharCode(randASCII);
    }

    return displayName;
  }

  #pwdCheck(password) {
    return password === this.#password;
  }

  email(password) {
    return this.#pwdCheck(password) ? this.#email : this.#PWDERRMSG;
  }

  firstName(password) {
    return this.#pwdCheck(password) ? this.#firstName : this.#PWDERRMSG;
  }

  lastName(password) {
    return this.#pwdCheck(password)  ? this.#lastName : this.#PWDERRMSG;      
  }

  resetPassword(password, newPassword) {
    if (this.#pwdCheck(password)) {
      this.#password = newPassword;
      return true;
    }

    return this.#PWDERRMSG;
  }

  reanonymize(password) {
    if (this.#pwdCheck(password)) {
      this.displayName = this.#makeDisplayName();
      return true;
    }

    return this.#PWDERRMSG;
  }
};


let fooBar = new Account('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.email('123456'));
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.lastName('123456'));
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

console.log(fooBar.firstName('abc'));
let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = new Account('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password
console.log(bazQux.firstName('123456'));

