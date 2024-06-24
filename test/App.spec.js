// Habilita los mocks de fetch
// import fetchMock from 'jest-fetch-mock';
import { dataResult } from '../src/lib/getMovies';
//declarar global
describe('dataResult', () => {
    beforeEach(() => {
        fetch.mockClear();
});

test('recupera los datos de la API', () => {
    fetch.mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
    });

    return expect(dataResult()).resolves.toEqual(mockResponse);
});

test('fetch fails with an error', () => {
    const mockError = new Error('Network response was not ok');
    fetch.mockRejectedValue(mockError);

    return expect(dataResult()).rejects.toEqual(mockError);
});

});

