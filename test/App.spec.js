import Movies from "../src/components/Movies";
import dataResult from "../src/lib/getMovies";
import { Home } from "../src/views/home";


// Habilita los mocks de fetch
// import fetchMock from 'jest-fetch-mock';

//y mi archivo de test de la apikey:
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';
describe('Devolver el valor de la API Key', () => {
  it('La aplicación debe devolver el valor de la API Key', () => {
    // Configuración inicial: establecer una API Key en localStorage
    const testApiKey = 'test123';
    localStorage.setItem('apikey', testApiKey);
    // Ejecutar la función getApiKey
    const apiKey = getApiKey();
    // Aserción: verificar que la API Key devuelta sea la misma que la establecida
    expect(apiKey).toBe(testApiKey);
  });
});
describe('Establecer la API Key', () => {
  it('La aplicación debe establecer correctamente la API Key', () => {
    // Llamar a la función setApiKey para establecer una nueva API Key
    const newApiKey = 'newTestKey';
    setApiKey(newApiKey);
    // Obtener la API Key almacenada en localStorage
    const storedApiKey = localStorage.getItem('apikey');
    // Aserción: verificar que la API Key almacenada sea la misma que la establecida
    expect(storedApiKey).toBe(newApiKey);
  });
});