const Account = (function() {
  const PWDERRMSG = 'Invalid Password';
  const Private = new WeakMap();

  function makeDisplayName() {
    let displayName = '';
    let randASCII;
    for (let i = 0; i < 16; i++) {
      randASCII = Math.floor(Math.random() * 94) + 32;
      displayName += String.fromCharCode(randASCII);
    }

    return displayName;
  }

  function pwdCheck(password, pvtObj) {
    return password === pvtObj.password;
  }

  return {
    init(email, password, firstName, lastName) {
      Private.set(this, {
        email,
        password,
        firstName,
        lastName,
      });

      this.displayName = makeDisplayName();

      return this;
    },

    email(password) {
      const pvtObj = Private.get(this);
      return pwdCheck(password, pvtObj) ? pvtObj.email : PWDERRMSG;
    },

    firstName(password) {
      const pvtObj = Private.get(this);
      return pwdCheck(password, pvtObj) ? pvtObj.firstName : PWDERRMSG;
    },

    lastName(password) {
      const pvtObj = Private.get(this);
      return pwdCheck(password, pvtObj)  ? pvtObj.lastName : PWDERRMSG;
    },

    resetPassword(password, newPassword) {
      const pvtObj = Private.get(this);
      if (pwdCheck(password, pvtObj)) {
        pvtObj.password = newPassword;
        return true;
      }

      return PWDERRMSG;
    },

    reanonymize(password) {
      const pvtObj = Private.get(this);
      if (pwdCheck(password, pvtObj)) {
        this.displayName = makeDisplayName();
        return true;
      }

      return PWDERRMSG;
    }
  }
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
fooBar.resetPassword('123456', 'abc');

console.log(fooBar.firstName('abc'));           // logs 'foo'
let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(bazQux.firstName('123456'));


