const form = document.querySelector("form");
const usersNumber = document.querySelector(".people");
const usersList = document.querySelector(".users");

function inputCreator(person) {
  const label = document.createElement("label");
  const inputName = document.createElement("input");
  const inputSurname = document.createElement("input");
  const inputAdress = document.createElement("input");
  inputName.placeholder = "Imię";
  inputName.required = true;
  inputSurname.placeholder = "Nazwisko";
  inputSurname.required = true;
  inputAdress.placeholder = "Adress";
  inputAdress.required = true;
  const labelContent = [inputName, inputSurname, inputAdress];
  label.textContent = `Osoba ${person}`;
  labelContent.forEach(input => {
    label.appendChild(input);
  });
  usersList.appendChild(label);
}

inputCreator(1);
usersNumber.addEventListener("change", () => {
  const value = usersNumber.value;
  usersList.textContent = "";
  for (let i = 1; i <= value; i++) {
    inputCreator(i);
  }
});

form.addEventListener("submit", event => {
  const formContent = [...document.getElementsByTagName("label")];
  console.log(formContent);

  event.preventDefault();
  //   formContent.forEach(content => content.classList.add("hidden"));
});
