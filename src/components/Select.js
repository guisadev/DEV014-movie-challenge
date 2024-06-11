export const select = () => {
    const mainElement = document.createElement("div");
    mainElement.innerHTML=`
    <select id='year'> 
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
        <option value='2024'>2024</option>
    <select>
    `
    return mainElement;
};