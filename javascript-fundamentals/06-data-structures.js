const numbers = [10, 20, 30, 40];

console.log(numbers[0]); // 10
console.log(numbers[3]); // 40

const tasks = [
  { id: 1, description: "Do laundry", completed: false },
  { id: 2, description: "Buy groceries", completed: true },
  { id: 3, description: "Clean the house", completed: false },
];
// añadir una nueva tarea al final del array
tasks.push({ id: 4, description: "Walk the dog", completed: false });
// eliminar la última tarea del array
tasks.pop();
// acceder a la segunda tarea
console.log("segunda tarea:", tasks[1]);
// Ver el tamaño antes de insertar en la segunda posición:
console.log("length antes de insertar:", tasks.length);
// insertar una nueva tarea en la segunda posición (índice 1)
tasks.splice(1, 0, { id: 5, description: "Pay bills", completed: false });
// Ver el tamaño después de insertar en la segunda posición:
console.log("length después de insertar:", tasks.length);
// Imprimir el array completo
console.log("tareas:", tasks);

const pageStack = [];

function visitPage(url) {
  pageStack.push(url);
  console.log("Visited:", url);
}

// Ver la página actual
function currentPage() {
  // TODO: si la pila está vacía, mostrar mensaje
  if (pageStack.length === 0) {
    console.log("No pages visited yet.");
  } else {
    // TODO: si no, mostrar la página que está arriba de la pila (último elemento)
    const current = pageStack[pageStack.length - 1];
    console.log("current page:", current);
  }
}

//Volver a la página anterior
function goBack() {
  // si la pila esta vacía, mostrar mensaje y salir de la función
  if (pageStack.length === 0) {
    console.log("No pages to go back to.");
    return;
  } else {
    // si no está vacía, hacer pop y mostrar a qué pagina has vuelto
    const previous = pageStack.pop();
    console.log("Went back to:", previous);
  }
}

// Flujo de prueba
visitPage("google.com");
visitPage("github.com");
visitPage("developer.mozilla.org");

currentPage();
goBack();
currentPage();

const customerQueue = [];

//funcion añadir cliente al final
function addcustomer(name) {
  customerQueue.push(name);
  console.log("Added customer:", name);
}

// función eliminar primer cliente
function serveCustomer() {
  // si al cola esta vacía mostrar mensaje y salir d ela función
  if (customerQueue.length === 0) {
    console.log("No customers to serve.");
    return;
  } else {
    // si no esta vacía hacer shift y mostrar a qué cliente has servido
    const served = customerQueue.shift();
    console.log("Served customer:", served);
  }
}

function countWords(text) {
  const words = text.split(" ");
  const counter = {};

  for (const word of words) {
    if (counter[word] === undefined) {
      counter[word] = 1;
    } else {
      counter[word]++;
    }
  }
  return counter;
}

console.log(countWords("hello world hello"));
