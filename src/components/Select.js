export const select = () => {
    const mainElement = document.createElement("nav");
    //aquí se inserta el elemento en el main de la estructura
    mainElement.innerHTML=` 
    <select id='year'> 
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
        <option value='2024'>2024</option>
    </select>
    `
    return mainElement;
};
//acá puedo crear otro nodo con un elemento select que haga un filter

export const orderByTitle = () => {
    const mainElement = document.createElement("nav");
    //aquí se inserta el elemento en el main de la estructura
    mainElement.innerHTML=` 
    <select class='original_title'> 
        <option value='name-asc'>orden ascendente</option>
        <option value='name-desc'>orden descendente</option>
    </select>
    `
    return mainElement;
};