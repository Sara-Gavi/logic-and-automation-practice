/* En el año 3025, las ciudades están controladas por Inteligencias Artificiales que almacenan registros de todos los movimientos humanos.

Cada cierto tiempo, los nodos de vigilancia hacen una descarga segura de datos para evitar pérdidas ante apagones del sistema.

Tienes el timestamp de la última descarga segura y un registro de modificaciones recientes que hicieron los drones. Cada modificación está representada como un par: [ID del archivo, timestamp de modificación].

Tu misión es implementar la función getCompromisedFiles que devuelva un array con los IDs de los archivos modificados después de la última descarga, ordenados de menor a mayor. */




function getCompromisedFiles(lastSafeDownload, droneLogs) {
  const compromisedFiles = []

  for (let i = 0; i < droneLogs.length; i++) {
    const log = droneLogs[i]

    const fileId = log[0]
    const modifiedAt = log[1]

    if (modifiedAt > lastSafeDownload) {
      if (!compromisedFiles.includes(fileId)) {
        compromisedFiles.push(fileId)
      }
    }
  }

  compromisedFiles.sort((a, b) => a - b)

  return compromisedFiles
}