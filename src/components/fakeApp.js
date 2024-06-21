//Primero crear una función Mock para Fetch que simule la respuesta de la API TMDB
//Luego configurar Jest para el test unitario 
//Reemplazar los datos de la función mock por el ejemplo de Jest

global.fetch = jest.fn();

const mockResponse = {
    results: [
        {
            id: 1,
            original_title: "Civil War",
            release_date: "2024-04-10",
            poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg"
        },
        {
            id: 2,
            original_title: "The Garfield Movie",
            release_date: "2024-04-30",
            poster_path: "/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg"
        }
    ]
};
