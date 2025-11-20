// Importamos la API simulada:
const { api, WAREHOUSES } = require("./mock-apis");

// Aquí empieza la función a completar paso a paso
async function getProductAvailability(productId, userId) {
  // TODO: Implementar la lógica aquí
  /* Debe retornar un objeto con la siguiente estructura:
  {
    success: boolean,
    product: {
      id,
      name,
      originalPrice,
      finalPrice,  // precio con descuento aplicado
      discount     // porcentaje de descuento
    },
    availability: {
      totalStock: number,      // suma de todos los almacenes
      availableWarehouses: [   // solo almacenes con stock > 0
        { warehouseId, stock, deliveryDays }
      ],
      fastestDelivery: number, // menor tiempo de entrega disponible
      failedWarehouses: []     // IDs de almacenes que fallaron
    },
    reviews: {                 // null si no hay stock
      averageRating,
      totalReviews
    },
    error: string              // mensaje si hay error crítico
  }
  */
}

// Para probar la función en la terminal:
getProductAvailability("PROD-001", "USER-PREMIUM")
  .then(console.log)
  .catch(console.error);
