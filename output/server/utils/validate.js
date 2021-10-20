const email = email => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const password = password => {
  const character = /[A-Z]+/.test(password) && /[a-z]+/.test(password);
  const number = /[0-9]+/.test(password);
  return character && number;
};

const lengthPassword = password => {
  return password.length >= 6;
};

module.exports = { email, password, lengthPassword };
