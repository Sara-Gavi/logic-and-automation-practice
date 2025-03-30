//Datos de entrada: Cliente con nombre y ciudad
const cliente = {
  nombre: "Sara",
  ciudad: "Granada",
};

//Función que asigna un técnico en función de la ciudad del cliente

function asignarTecnico(cliente) {
  let tecnico = ""; //Creamos una variable vacía para el tecnico asignado

  if (cliente.ciudad === "Granada") {
    tecnico = "Ana";
  } else if (cliente.ciudad === "Madrid") {
    tecnico = "Carlos";
  } else {
    tecnico = "equipo general"; // Por defecto, si la ciudad no esta en la lista
  }

  return `${cliente.nombre} será atendid@ por ${tecnico}`;
}

console.log(asignarTecnico(cliente));
