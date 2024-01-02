const form = document.querySelector('input[name="submit"').parentNode;
let registry = [];
let user = {};

// criando campo de tec
const labelFieldNameTec = document.createElement("label");
labelFieldNameTec.setAttribute("for", "field-name-tec");
labelFieldNameTec.innerText = "Technology name:";

const fieldNameTec = document.createElement("input");
fieldNameTec.setAttribute("name", "field-name-tec");
fieldNameTec.setAttribute("id", "field-name-tec");
fieldNameTec.setAttribute("type", "text");

//criando inputes de radio radios
const radio01 = document.createElement("input");
const radio02 = document.createElement("input");
const radio03 = document.createElement("input");

radio01.type = "radio";
radio02.type = "radio";
radio03.type = "radio";

radio01.name = "time-xp";
radio02.name = "time-xp";
radio03.name = "time-xp";

radio01.id = "radio01";
radio02.id = "radio02";
radio03.id = "radio03";

radio01.value = "0-2 anos";
radio02.value = "3-4 anos";
radio03.value = "5+ anos";

//criando labels dos inputs radios

const labelRadio01 = document.createElement("label");
const labelRadio02 = document.createElement("label");
const labelRadio03 = document.createElement("label");

labelRadio01.setAttribute("for", "radio01");
labelRadio02.setAttribute("for", "radio02");
labelRadio03.setAttribute("for", "radio03");

labelRadio01.innerText = "0-2 anos";
labelRadio02.innerText = "3-4 anos";
labelRadio03.innerText = "5+ anos";

//inplementando botoes
const btnSave = document.createElement("button");
btnSave.id = "button-save";
btnSave.innerText = "Save";

const btnClean = document.createElement("button");
btnClean.id = "button-clean";
btnClean.innerText = "Clean";

// verificando se ja existe um campo de tec e temp de xp e se campo de full name esta preenchido

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  let verification = document.querySelector("#field-name-tec");
  let fullName = document.querySelector("#full-name").value;

  if (verification === null && fullName.trim() !== "") {
    form.append(
      labelFieldNameTec,
      fieldNameTec,
      radio01,
      labelRadio01,
      radio02,
      labelRadio02,
      radio03,
      labelRadio03,
      btnSave,
      btnClean
    );
  }
});

//add ouvidores aos botoes

btnSave.addEventListener("click", function () {
  user.name = document.querySelector("#full-name").value;
  user.time = document.querySelector("input[name=time-xp]:checked").value;
  user.tec = fieldNameTec.value;
  registry.push(user);

  alert("user: " + user.name + " successfully registered.");

  console.log(registry);

  cleanFields()
});

btnClean.addEventListener('click', function () {
    cleanFields()
})

function cleanFields() {
  document.querySelector("#full-name").value = ''
  document.querySelector('#field-name-tec').value = ''

  let radios = document.querySelectorAll('input[type=radio]:checked')
  radios.forEach(radio => {
    radio.checked = false
  })
}