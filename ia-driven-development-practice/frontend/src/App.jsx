import React, { useEffect, useState } from "react";

/**
 * Componente principal de la aplicación.
 * Realiza una petición al endpoint /ping del backend y muestra el resultado.
 */
function App() {
  // Estado para almacenar el resultado del endpoint /ping
  const [pingResult, setPingResult] = useState("");

  // Efecto para llamar al endpoint /ping cuando el componente se monta
  useEffect(() => {
    fetch("http://localhost:3000/ping")
      .then((res) => res.text())
      .then((data) => setPingResult(data))
      .catch(() => setPingResult("Error al conectar"));
  }, []);

  return (
    <div>
      <h1>Resultado del ping:</h1>
      {/* Muestra el resultado obtenido del backend */}
      <p>{pingResult}</p>
    </div>
  );
}

export default App;
