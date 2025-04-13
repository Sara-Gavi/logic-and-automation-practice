// Lista de tareas simulada
const tareas = [
  { nombre: "Instalar paneles solares", completada: false },
  { nombre: "Revisión técnica", completada: false },
  { nombre: "Subida de documentación", completada: false },
];

//Función para marcar todas las tareas como completadas
function marcarTareaCompletada(listaTareas) {
  return listaTareas.map((tarea) => {
    return { ...tarea, completada: true };
  });
}

//Ejecutamos la función

const tareasFinalizadas = marcarTareaCompletada(tareas);

//Mostramos resultados

console.log("Tareas finalizadas:");
tareasFinalizadas.forEach((tarea) => {
  console.log(`${tarea.nombre} - ${tarea.completada}`);
});
