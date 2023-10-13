/* const buttonNew = document.querySelector('.button1');

const readUsers = async () => {
const response = await fetch ('https://jsonplaceholder.typicode.com/users');
const data = await response.json();
return data;
};

const printUsers = async () => {
  const users = await readUsers();

  const elementoContainer = document.getElementById('app1');
  let template = '';
  users.forEach((person) => {
    template += `<div><p>${person.name}</p></div>`;
  });

  elementoContainer.innerHTML = template;
};

printUsers() */

//-----------------------------------

/* const buttonNew = document.querySelector('.button1');

const readUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

const printUsers = async () => {
  const users = await readUsers();

  const elementoContainer = document.getElementById('app1');
  let template = '';
  users.forEach((person) => {
    template += `<div><p class="email">${person.email}</p></div>`;
  });

  elementoContainer.innerHTML = template;
};

buttonNew.addEventListener('click', () => {
  printUsers();
});
 */

//Obteniendo correos

const buttonModel = document.querySelector('.button1');

const readUsers = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
};

const printUsers = async () => {
    const users = await readUsers();
    const container = document.getElementById('app1');
    let template = '';
    users.forEach((person) => {
        template += `<div><p class="email">${person.email}</p></div>`;
    });

    container.innerHTML = template;
};

buttonModel.addEventListener('click', () => {
printUsers();
});

//Obteniendo Zipcode

const buttonModel2 = document.querySelector('.button2');

const readUsers1 = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
};

const printUsers1 = async () => {
    const users = await readUsers1();
    const container = document.getElementById('app2');
    let template = '';
    users.forEach((person) => {
        template += `<div><p class="street">${person.address.street}</p></div>`;
    });

    container.innerHTML = template;
};

buttonModel2.addEventListener('click', () => {
    printUsers1();
});