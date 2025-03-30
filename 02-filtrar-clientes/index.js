//Lista de clientes simulada
const clientes = [
  { nombre: "Sara", tecnico: "Ana" },
  { nombre: "Noa", tecnico: null },
  { nombre: "Carla", tecnico: "Román" },
  { nombre: "Victor", tecnico: null },
];

//Función para filtrar clientes que no tienen técnico asignado
function filtrarSinTecnico(listaClientes) {
  return listaClientes.filter((cliente) => cliente.tecnico === null);
}

//Uso de la función
const pendientes = filtrarSinTecnico(clientes);

//Mostrar cuántos hay sin técnico
console.log(`Total de clientes sin técnico: ${pendientes.length}`);

//Mostramos los resultados
console.log("Clientes sin tecnico asignado:");
pendientes.forEach((pendiente) => {
  console.log(pendiente.nombre);
});

const nuevosClientes = [
  { nombre: "Elena", tecnico: "Raúl" },
  { nombre: "Sergio", tecnico: null },
];

console.log(filtrarSinTecnico(nuevosClientes));

const nuevosPendientes = filtrarSinTecnico(nuevosClientes);
nuevosPendientes.forEach((pendiente) => {
  console.log(pendiente.nombre);
});
