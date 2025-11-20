// APIs simuladas
const api = {
  // 1. OBTENER PRODUCTO (puede fallar)
  getProduct: (productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const products = {
          "PROD-001": {
            id: "PROD-001",
            name: "Laptop Gaming",
            basePrice: 1200,
          },
          "PROD-002": { id: "PROD-002", name: "Mouse Wireless", basePrice: 50 },
          "PROD-003": {
            id: "PROD-003",
            name: "Teclado Mecánico",
            basePrice: 150,
          },
        };

        if (products[productId]) {
          resolve(products[productId]); // Producto encontrado
        } else {
          reject(new Error("Producto no encontrado")); //  Error
        }
      }, Math.random() * 1000 + 500); // TIEMPO SIMULADO DE ESPERA
    });
  },

  // 2. CONSULTAR ALMACÉN (puede fallar ALEATORIAMENTE)
  checkWarehouse: (warehouseId, productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          // 10% de probabilidad de fallo
          reject(new Error(`Almacén ${warehouseId} no disponible`));
          return;
        }

        resolve({
          warehouseId,
          productId,
          stock: Math.floor(Math.random() * 20), // stock aleatorio de 0 a 19
          deliveryDays: Math.floor(Math.random() * 5) + 1, // 1 a 5 días
        });
      }, Math.random() * 2000 + 500);
    });
  },

  // 3. OBTENER DESCUENTO DEL USUARIO (nunca falla)
  getUserDiscount: (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const discounts = {
          "USER-PREMIUM": 0.15,
          "USER-REGULAR": 0.05,
          "USER-NEW": 0.1,
        };
        resolve(discounts[userId] || 0); // Si no existe, descuento = 0
      }, 300);
    });
  },

  // 4. OBTENER RESEÑAS (solo si hay stock)
  getReviews: (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          productId,
          averageRating: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0
          totalReviews: Math.floor(Math.random() * 500) + 10, // 10 a 509 reviews
        });
      }, 800);
    });
  },
};

// Lista de almacenes
const WAREHOUSES = ["WH-NORTE", "WH-SUR", "WH-CENTRO", "WH-ESTE"];

// Exportamos para usar en index.js
module.exports = { api, WAREHOUSES };
