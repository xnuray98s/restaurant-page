const content = document.querySelector("#content");

function setContact() {
    let divTab3 = document.createElement('div');
    let tabContent = document.createElement('article');
    divTab3.id = 'tab3';
    
    tabContent.innerHTML = `<ul>
    <label>Numbers:</label>
    <li>+39 06 439 4892</li>
    <li>+39 06 384 6469</li>
    <label>Address</label>
    <li>Brione</li>
    </ul>`;
    tabContent.style.cssText = `position: fixed; top:38%; left:30%; font-size: 30px; width:700px;
                                background-color: #E8D4A8; padding: 30px; z-index: -1; height: 400px;
                                border: #45433F 1px solid; list-style-type: none;`;
    divTab3.appendChild(tabContent);
    content.appendChild(divTab3);
}
export {setContact};