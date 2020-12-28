const content = document.querySelector("#content");

function setAbout() {
    let divTab1 = document.createElement('div');
    let tabContent = document.createElement('article');
    divTab1.id = 'tab1';
    
    tabContent.innerText = `Nuray's pizzas are made with love.`;
    tabContent.style.cssText = `position: fixed; top:38%; left:30%; font-size: 30px; width:700px;
                                background-color: #E8D4A8; padding: 30px; z-index: -1; height: 400px;
                                border: #45433F 1px solid;`;
    divTab1.appendChild(tabContent);
    content.appendChild(divTab1);
}
export {setAbout};