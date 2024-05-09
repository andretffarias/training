import { App } from "./App.js";
import { User } from "./User.js";
import { Vld } from "./Vld.1.js";

const btn = document.querySelector("#submit");
btn.addEventListener("click", sub);

function sub() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const passwordConfirm = document.querySelector("#password-confirm").value;

  const nameValidation = Vld.name(name);
  const emailValidation = Vld.email(email);
  const passwordValidation = Vld.password(password, passwordConfirm);

  if (nameValidation !== true) {
    return alert("[ERROR]: Invalid name.");
  } else if (emailValidation !== true) {
    return alert("[ERROR]: Invalid email.");
  } else if (passwordValidation !== true) {
    return alert("[ERROR]: Invalid password.");
  } else {
    alert("Successfully registered user.");
    const user = new User(name, email, password);
    App.users.push(user);
  }
  console.log(App.users);
}
