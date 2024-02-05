import { initializeApp } from "firebase/app";

/**
 * Objeto de configuración de Firebase.
 * @type {Object}
 * @property {string} apiKey - La clave API de Firebase.
 * @property {string} authDomain - El dominio de autenticación de Firebase.
 * @property {string} projectId - El ID del proyecto de Firebase.
 * @property {string} storageBucket - El bucket de almacenamiento de Firebase.
 * @property {string} messagingSenderId - El ID del remitente de mensajes de Firebase.
 * @property {string} appId - El ID de la aplicación de Firebase.
 */
const firebaseConfig = {
  apiKey: "AIzaSyCbccXoTKhLBJUjqigIRECb6FXJzNd5Jl8",
  authDomain: "osprey-g.firebaseapp.com",
  projectId: "osprey-g",
  storageBucket: "osprey-g.appspot.com",
  messagingSenderId: "521797669055",
  appId: "1:521797669055:web:ee0f8b587ff1df0373360a"
};

const app = initializeApp(firebaseConfig);

export default app;
