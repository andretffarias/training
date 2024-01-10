const btnAddTech = document.querySelector("#btn-add-tech");
const btnAddDev = document.querySelector('#btn-add-dev')
const developers = [];
let indexRow = 0;

function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = htmlFor;
  return label;
}

function createInput(id, name, value, type = "text") {
  const input = document.createElement("input");
  input.id = id;
  input.name = name;
  input.value = value;
  input.type = type;
  return input;
}

btnAddTech.addEventListener("click", function addTechField() {
  if (document.querySelector("#input-full-name").value.trim() !== "") {
    indexRow++;

    const techList = document.querySelector('#tech-list');

    const newRow = document.createElement("li");
    newRow.id = "input-row-" + indexRow;

    const labelTech = createLabel("Tech name:", "tech-name-input" + indexRow);
    const inputTech = createInput(
      "tech-name-input" + indexRow,
      "tech-input" + indexRow,
      null
    );

    const radioBtn01 = createInput(
      "radio-btn-1." + indexRow,
      "radio-btn-" + indexRow,
      "0-2 anos",
      "radio"
    );
    const radioBtn02 = createInput(
      "radio-btn-2." + indexRow,
      "radio-btn-" + indexRow,
      "3-4 anos",
      "radio"
    );
    const radioBtn03 = createInput(
      "radio-btn-3." + indexRow,
      "radio-btn-" + indexRow,
      "5+ anos",
      "radio"
    );

    const labelRadioBtn01 = createLabel("0-2 anos", "radio-btn-1." + indexRow);
    const labelRadioBtn02 = createLabel("3-4 anos", "radio-btn-2." + indexRow);
    const labelRadioBtn03 = createLabel("5+ anos", "radio-btn-3." + indexRow);

    const removeRowBtn = createInput(
      "remove-row-btn-" + indexRow,
      "remove-row-btn-" + indexRow,
      "Remove",
      "button"
    );

    removeRowBtn.addEventListener("click", function () {
      newRow.remove();
    });

    newRow.append(
      labelTech,
      inputTech,
      radioBtn01,
      labelRadioBtn01,
      radioBtn02,
      labelRadioBtn02,
      radioBtn03,
      labelRadioBtn03,
      removeRowBtn
    );
    techList.appendChild(newRow);
  } else {
    alert("First fill in the full name field");
  }
});

btnAddDev.addEventListener('click', function () {
  let fullName = document.querySelector('#input-full-name').value
  const xpList = document.querySelectorAll('#tech-list li')

  
  xpList.forEach(techElement => {
    const nameTech = techElement.querySelector("input[type='text']").value
    const timeXpElement = techElement.querySelector('input[type=radio]:checked')

    const dev = { 
      name: fullName,
      technologiesList: []
    }
    
    if (timeXpElement) {
      const timeXp = timeXpElement.value

      const tech = {
        nameTech: nameTech,
        timeXp: timeXp
      }
      
      dev.technologiesList.push(tech)
    }

    developers.push(dev)
  });
  console.log(developers)
})