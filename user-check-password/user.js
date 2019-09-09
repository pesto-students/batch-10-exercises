function User(uname, pwd) {
  this.username = uname;
  this.password = pwd;
}

User.prototype.checkPassword = function checkPassword(pwd) {
  return pwd === this.password;
};

export { User };
