export class Vld {
  name(name) {
    return /^[a-zA-Z]+$/.test(name);
  }

  email(email) {
    const regex = /^[\w]{2,}@[\w]{2,}\.[\w]{2,}$/;
    return regex.test(email);
  }

  password(password, passwordConfirm) {
    if (password === passwordConfirm) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,16}$/.test(password);
    } else {
      alert("passwords do not match.");
      return false;
    }
  }
}
