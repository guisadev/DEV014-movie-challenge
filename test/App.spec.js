import App from "../src/components/App";
import dataResult from "../src/lib/getMovies";
// Habilita los mocks de fetch
// import fetchMock from 'jest-fetch-mock';
describe('app component', () => {

it('app es una función', ()=>{
    expect(typeof App).toBe('function')
})
  // Puedes añadir más tests para diferentes casos de uso
});
