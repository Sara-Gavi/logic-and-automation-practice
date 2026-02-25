// Tiempo = O(1) (orden constante)- > El trabajo no crece cuando crece al entrada
function printFirstElement(arr) {
  console.log(arr[0]);
}
// Tiempo = O(n) (orden lineal) -> El trabajo crece a medida que crece la entrada
function printAllElelements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// Tiempo = O(n^2) (orden cuadrático)
// El número de operaciones crece proporcionalmente al cuadrado del tamaño de la entrada.
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

// Dado un array de numeros, determina si contiene algún número duplicado.
function hasDuplicate(arr) {
  // recorremos cada posicion i del array
  for (let i = 0; i < arr.length; i++) {
    //comparamos arr[i] con las posiciones siguientes
    for (let j = i + 1; j < arr.length; j++) {
      //si encontramos un numero igual, retornamos true
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  } //si no encontramos ningún numero igual, retornamos false
  return false;
}

//Lista de usuarios de una API:
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
  { id: 3, name: "Carla" },
];
// Dado un array de usuarios y un id, devuelve el usuario con ese id o null si no existe.
function getUserById(users, id) {
  for (let user of users) {
    if (user.id === id) {
      return user;
    }
  }
  return null;
}

function createUserLookup(users) {
  const lookup = {}; //guardo los usuarios por id
  for (const user of users) {
    lookup[user.id] = user; //asigno el usuario al id correspondiente
  }
  return lookup;
}

const userMap = createUserLookup(users);
console.log(userMap[2]); // mostrar el usuario con id 2
