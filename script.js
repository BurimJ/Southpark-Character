"use strict";

const president = {
  name: "Donald",
  lastName: "Trump",
  image: ""
  age: "50",
  gender: "Male",
  hairColor: "Brown/Blonde",
  occupation: "Businessman",
  religion: "Presbyterian",
  episodes:"s05e11 and s19e02",
  appearances: "2",
  firstAppearence: "S05E11",
};
    name: "Barack Obama",
    nickname: "Hussein",
    image: "https://static.wikia.nocookie.net/southpark/images/f/f0/Barack-obama.png/revision/latest?cb=20170827130913",
    occupation: "President of the United States (formerly)",
    age: 61,
    voicedBy: "Trey Parker",
    gender: "Male",
    religion: "Protestant",
    catchPhrase: "My fellow Americans",
    hairColor: "Black",
    schoolGrade: undefined,
    episodes: "S01E01, S01E02",
    appearances: 29,
    firstAppearance: "S12E02"
console.log(president);

function showCharacter(president) {
  document.querySelector("#name").textContent = president.name;
  document.querySelector("#lastName").textContent = president.lastName;
  document.querySelector("#occupation").textContent = president.occupation;
  document.querySelector("#age").textContent = president.age;
  document.querySelector("#hairColor").textContent = president.hairColor;
  document.querySelector("#occupation").textContent = president.occupation;
  document.querySelector("#religion").textContent = president.religion;
  document.querySelector("#gender").textContent = president.gender;
  document.querySelector("#firstAppearence").textContent =
    president.firstAppearence;
}

showCharacter(president);

function showAllCharacters(data) {
  for (const obj of data) {
    showCharacter(obj);
  }
}
function showCharacter(obj) {
  const myHTML = /*html*/ `
        <article>
            <img src=${obj.image}>
            <h2>${obj.name}</h2>
            <p>${obj.occupation}</p>
        </article>
    `;
  characterContainer.insertAdjacentHTML("beforeend", myHTML);
  characterContainer
    .querySelector("article:last-child")
    .addEventListener("click", showDialog);
}

const list = document.querySelector("#presidentList");

function addCharacter(president) {
  const listItem = document.createElement("li");
  listItem.textContent = `The President is ${president.firstName} ${president.lastName}, ${president.age} years old, young ${president.gender} with ${president.hairColor} hair. A ${president.occupation} with ${president.religion} beliefs.`;
  list.appendChild(listItem);
}

addCharacter(president);

